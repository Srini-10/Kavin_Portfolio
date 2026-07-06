// =============================================================================
// Contact-form backend — Next.js Route Handler (runs as a Vercel Serverless
// Function on the Node.js runtime).
//
// POST /api/contact  { first, last, email, message, _honey? }
//
//  1. Per-IP rate limit + honeypot (spam/abuse defense).
//  2. Validate & sanitise fields.
//  3. Send an ADMIN notification (required) + a USER auto-reply (best effort).
//  4. Return JSON success/error with proper status codes.
//
// Credentials come from server-side env vars (EMAIL_USER / EMAIL_PASS) — never
// hardcoded, never exposed to the browser (no NEXT_PUBLIC_ prefix). Because the
// form calls this route on the same origin, CORS is not needed.
// =============================================================================

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import {
  buildAdminEmail,
  buildAdminText,
  buildUserEmail,
  buildUserText,
  type ContactData,
} from "@/lib/contact/emailTemplates";

// Node runtime is required for Nodemailer/SMTP (the Edge runtime can't open
// raw TCP sockets). Force-dynamic so it's never statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Validation --------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 254, message: 5000 };

// All C0 control chars (U+0000..U+001F) + DEL (U+007F).
const CTRL_ALL = /[\u0000-\u001F\u007F]/g;
// Same set, but preserving tab (09), newline (0A) and carriage return (0D).
const CTRL_EXCEPT_NEWLINE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// Single-line fields (names, email): strip every control char / line break and
// collapse whitespace. Defends against email header injection on top of
// Nodemailer's own header sanitisation.
function cleanLine(value: unknown): string {
  return cleanString(value).replace(CTRL_ALL, " ").replace(/\s+/g, " ").trim();
}

// Multi-line field (message): keep newlines and tabs, drop other control chars.
function cleanText(value: unknown): string {
  return cleanString(value).replace(CTRL_EXCEPT_NEWLINE, "");
}

interface Parsed {
  data: { first: string; last: string; email: string; message: string };
  fields: Record<string, string>;
}

function validate(body: Record<string, unknown>): Parsed {
  const first = cleanLine(body.first ?? body.firstName ?? body.name);
  const last = cleanLine(body.last ?? body.lastName);
  const email = cleanLine(body.email);
  const message = cleanText(body.message);

  const fields: Record<string, string> = {};

  if (!first) fields.first = "First name is required.";
  else if (first.length > LIMITS.name) fields.first = "First name is too long.";

  if (last.length > LIMITS.name) fields.last = "Last name is too long.";

  if (!email) fields.email = "Email is required.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    fields.email = "Please enter a valid email address.";
  }

  if (!message) fields.message = "Message is required.";
  else if (message.length > LIMITS.message) {
    fields.message = `Message must be under ${LIMITS.message} characters.`;
  }

  return { data: { first, last, email, message }, fields };
}

// --- Abuse mitigation --------------------------------------------------------
// Lightweight, dependency-free defenses. For stronger protection add a captcha
// (Cloudflare Turnstile / reCAPTCHA) and verify its token here.
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };
const ipHits = new Map<string, number[]>();

function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "";
}

function isRateLimited(ip: string): boolean {
  if (!ip) return false; // can't identify the caller — don't hard-block
  const now = Date.now();
  const recent = (ipHits.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT.windowMs
  );
  recent.push(now);
  ipHits.set(ip, recent);
  if (ipHits.size > 5000) {
    for (const [key, times] of ipHits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) ipHits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

// --- Mail transport ----------------------------------------------------------
let cachedTransporter: Transporter | null = null;
function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    throw new Error(
      "Missing EMAIL_USER / EMAIL_PASS. Set them in .env.local (local) and in the Vercel project's Environment Variables (production)."
    );
  }

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  return cachedTransporter;
}

function formatTimestamp(): string {
  try {
    return (
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }) + " IST"
    );
  } catch {
    return new Date().toISOString();
  }
}

// --- Handler -----------------------------------------------------------------
export async function POST(req: Request) {
  // Throttle abusive callers before doing any work.
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown> = {};
  try {
    const parsed = await req.json();
    if (parsed && typeof parsed === "object") body = parsed as Record<string, unknown>;
  } catch {
    body = {};
  }

  // Honeypot: bots fill the hidden "_honey" field; real users never see it.
  if (cleanString(body._honey)) {
    console.info("Honeypot triggered — dropping submission.");
    return NextResponse.json({ success: true, message: "Thanks! Your message has been sent." });
  }

  const { data, fields } = validate(body);
  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { success: false, error: "Please correct the highlighted fields.", fields },
      { status: 400 }
    );
  }

  const fullName = `${data.first} ${data.last}`.trim();
  const fromAddress = process.env.EMAIL_USER as string;
  const recipient = process.env.CONTACT_RECIPIENT || fromAddress;
  const brandName = process.env.BRAND_NAME || "Kavinkumar S.";
  const templateData: ContactData = {
    ...data,
    fullName,
    brandName,
    receivedAt: formatTimestamp(),
  };

  let transporter: Transporter;
  try {
    transporter = getTransporter();
  } catch (err) {
    console.error("Transporter init failed:", (err as Error).message);
    return NextResponse.json(
      { success: false, error: "Email service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  // 1) Admin notification — required. Reply-To is the visitor so hitting
  // "Reply" in your inbox writes straight back to them.
  try {
    await transporter.sendMail({
      from: `"${brandName} — Portfolio" <${fromAddress}>`,
      to: recipient,
      replyTo: `"${fullName}" <${data.email}>`,
      subject: `New enquiry from ${fullName}`,
      text: buildAdminText(templateData),
      html: buildAdminEmail(templateData),
    });
  } catch (err) {
    console.error("Failed to send admin notification:", err);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't send your message right now. Please try again, or email me directly.",
      },
      { status: 502 }
    );
  }

  // 2) Auto-reply to the visitor — best effort; a bounce must not fail the
  // request, since the owner already received the message.
  try {
    await transporter.sendMail({
      from: `"${brandName}" <${fromAddress}>`,
      to: `"${fullName}" <${data.email}>`,
      subject: `Thanks for reaching out — ${brandName}`,
      text: buildUserText(templateData),
      html: buildUserEmail(templateData),
    });
  } catch (err) {
    console.warn("Auto-reply to visitor failed (non-fatal):", (err as Error).message);
  }

  return NextResponse.json({
    success: true,
    message: "Thanks! Your message has been sent — I'll get back to you soon.",
  });
}
