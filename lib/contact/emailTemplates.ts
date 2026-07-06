// =============================================================================
// Email templates for the portfolio contact form (Next.js API route version).
//
//  ▸ Branding lives in the BRAND object below — change the name, colours, logo
//    and social links in ONE place and BOTH emails update.
//  ▸ Every visitor-supplied value is HTML-escaped (escapeHtml) before it is
//    placed into the markup, so a malicious submission can never inject markup.
//  ▸ Emails use table-based layout + inline styles for maximum client support
//    (Gmail, Apple Mail, Outlook, mobile).
// =============================================================================

export interface ContactData {
  first: string;
  last: string;
  email: string;
  message: string;
  fullName: string;
  brandName: string;
  receivedAt?: string;
}

export const BRAND = {
  name: "Kavinkumar S.",
  tagline: "Actor · Assistant Director · Filmmaker",

  // Colours mirror the portfolio's Tailwind theme (tailwind.config.ts).
  accent: "#F04500",
  accentLight: "#FF6B35",
  bg: "#0D0D0D",
  surface: "#161616",
  surface2: "#1F1F1F",
  border: "#2A2A2A",
  text: "#FFFFFF",
  muted: "#8A8A8A",

  // --- Adjust these to your own links -------------------------------------
  website: "https://your-portfolio-url.com",
  instagram: "https://www.instagram.com/kavin__003_",
  email: "kavinkumars773@gmail.com",

  // Optional: a hosted logo image (must be an https URL). Leave "" for the
  // text logo ("Kavinkumar S." with an orange full stop).
  logoUrl: "",
};

// ---------------------------------------------------------------------------
// Escaping helpers — ALWAYS run visitor input through these before it touches
// the HTML string.
// ---------------------------------------------------------------------------
export function escapeHtml(value: unknown): string {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Escape first, THEN convert newlines to <br> so multi-line messages render.
function escapeMultiline(value: unknown): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

// ---------------------------------------------------------------------------
// Shared email shell (header + footer + responsive wrapper).
// ---------------------------------------------------------------------------
function shell({
  brandName,
  preheader,
  bodyHtml,
}: {
  brandName: string;
  preheader: string;
  bodyHtml: string;
}): string {
  const name = escapeHtml(brandName || BRAND.name);

  const logo = BRAND.logoUrl
    ? `<img src="${BRAND.logoUrl}" alt="${name}" width="150" style="display:block;border:0;outline:none;text-decoration:none;max-width:150px;height:auto;" />`
    : `<span style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:22px;font-weight:700;color:${BRAND.text};letter-spacing:-0.5px;">${name}<span style="color:${BRAND.accent};">.</span></span>`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>${name}</title>
  <style>
    body { margin:0 !important; padding:0 !important; width:100% !important; }
    a { text-decoration:none; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:22px !important; padding-right:22px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};">
  <!-- Preheader: shows as preview text, hidden in the body. The trailing
       spacer run consumes the rest of the preview window so following body
       copy doesn't bleed into the inbox preview line. -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${BRAND.bg};font-size:1px;line-height:1px;">
    ${escapeHtml(preheader)}
    <span style="display:none;">${"&nbsp;&zwnj;".repeat(40)}</span>
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.bg};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${BRAND.surface};border:1px solid ${BRAND.border};border-radius:20px;overflow:hidden;">

          <!-- Accent bar (solid-colour fallback first for Outlook, which
               ignores CSS gradients) -->
          <tr>
            <td bgcolor="${BRAND.accent}" style="height:4px;background-color:${BRAND.accent};background:linear-gradient(90deg,${BRAND.accent} 0%,${BRAND.accentLight} 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="px" style="padding:28px 36px 8px 36px;">
              ${logo}
            </td>
          </tr>

          <!-- Body -->
          ${bodyHtml}

          <!-- Footer -->
          <tr>
            <td class="px" style="padding:24px 36px 32px 36px;border-top:1px solid ${BRAND.border};">
              <p style="margin:0 0 6px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${BRAND.muted};">
                ${name} &nbsp;·&nbsp; ${escapeHtml(BRAND.tagline)}
              </p>
              <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${BRAND.muted};">
                <a href="${BRAND.instagram}" style="color:${BRAND.accentLight};">Instagram</a>
                &nbsp;·&nbsp;
                <a href="mailto:${BRAND.email}" style="color:${BRAND.accentLight};">${escapeHtml(BRAND.email)}</a>
              </p>
            </td>
          </tr>

        </table>
        <p style="margin:16px 0 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.muted};">
          Sent from the ${name} portfolio contact form.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// 1) ADMIN NOTIFICATION — sent to the site owner.
// ---------------------------------------------------------------------------
export function buildAdminEmail(d: ContactData): string {
  const name = escapeHtml(d.fullName || `${d.first || ""} ${d.last || ""}`.trim());
  const safeEmail = escapeHtml(d.email);
  const safeMessage = escapeMultiline(d.message);
  const when = escapeHtml(d.receivedAt || "");

  const row = (label: string, valueHtml: string) => `
    <tr>
      <td style="padding:0 0 4px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.accent};font-weight:600;">${label}</td>
    </tr>
    <tr>
      <td style="padding:0 0 18px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${BRAND.text};line-height:1.5;">${valueHtml}</td>
    </tr>`;

  const bodyHtml = `
  <tr>
    <td class="px" style="padding:8px 36px 4px 36px;">
      <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${BRAND.muted};">New enquiry</p>
      <h1 style="margin:6px 0 20px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:26px;font-weight:700;color:${BRAND.text};line-height:1.2;">
        You have a new message
      </h1>
    </td>
  </tr>
  <tr>
    <td class="px" style="padding:0 36px 8px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${row("Name", name)}
        ${row("Email", `<a href="mailto:${safeEmail}" style="color:${BRAND.accentLight};">${safeEmail}</a>`)}
        ${when ? row("Received", when) : ""}
        <tr>
          <td style="padding:0 0 4px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.accent};font-weight:600;">Message</td>
        </tr>
        <tr>
          <td style="padding:0 0 24px 0;">
            <div style="background-color:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:12px;padding:18px 20px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:#E8E8E8;line-height:1.65;">
              ${safeMessage}
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 8px 0;">
            <a href="mailto:${safeEmail}?subject=${encodeURIComponent("Re: your enquiry")}"
               style="display:inline-block;background-color:${BRAND.accent};background:linear-gradient(135deg,${BRAND.accent} 0%,${BRAND.accentLight} 100%);color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:600;padding:12px 26px;border-radius:999px;">
              Reply to ${name}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;

  return shell({
    brandName: d.brandName,
    preheader: `New enquiry from ${d.fullName} — ${d.message}`.slice(0, 140),
    bodyHtml,
  });
}

export function buildAdminText(d: ContactData): string {
  const name = d.fullName || `${d.first || ""} ${d.last || ""}`.trim();
  return [
    "NEW CONTACT ENQUIRY",
    "===================",
    `Name:    ${name}`,
    `Email:   ${d.email}`,
    d.receivedAt ? `Received: ${d.receivedAt}` : null,
    "",
    "Message:",
    d.message,
    "",
    "— Sent from your portfolio contact form.",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

// ---------------------------------------------------------------------------
// 2) USER AUTO-REPLY — confirmation sent back to the visitor.
// ---------------------------------------------------------------------------
export function buildUserEmail(d: ContactData): string {
  const displayBrand = escapeHtml(d.brandName || BRAND.name);
  const firstName = escapeHtml((d.first || d.fullName || "there").split(" ")[0] || "there");
  const safeMessage = escapeMultiline(d.message);

  const bodyHtml = `
  <tr>
    <td class="px" style="padding:8px 36px 4px 36px;">
      <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${BRAND.muted};">Message received</p>
      <h1 style="margin:6px 0 16px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:28px;font-weight:700;color:${BRAND.text};line-height:1.2;">
        Thanks, ${firstName}. <span style="color:${BRAND.accent};">Let's talk.</span>
      </h1>
      <p style="margin:0 0 16px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:#D4D4D4;line-height:1.7;">
        Thank you for reaching out through my portfolio. Your message has landed
        safely in my inbox, and I read every one personally. I'll get back to you
        within <strong style="color:${BRAND.text};">1–2 days</strong>.
      </p>
      <p style="margin:0 0 24px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:#D4D4D4;line-height:1.7;">
        In the meantime, here's a copy of what you sent me for your records.
      </p>
    </td>
  </tr>
  <tr>
    <td class="px" style="padding:0 36px 8px 36px;">
      <p style="margin:0 0 8px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.accent};font-weight:600;">Your message</p>
      <div style="background-color:${BRAND.bg};border:1px solid ${BRAND.border};border-left:3px solid ${BRAND.accent};border-radius:12px;padding:18px 20px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:#E8E8E8;line-height:1.65;">
        ${safeMessage}
      </div>
    </td>
  </tr>
  <tr>
    <td class="px" style="padding:26px 36px 8px 36px;">
      <p style="margin:0 0 2px 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:#D4D4D4;line-height:1.6;">Warm regards,</p>
      <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:17px;font-weight:700;color:${BRAND.text};">${displayBrand}</p>
      <p style="margin:2px 0 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${BRAND.muted};">${escapeHtml(BRAND.tagline)}</p>
    </td>
  </tr>`;

  return shell({
    brandName: d.brandName,
    preheader: `Thanks for reaching out — I'll get back to you within 1–2 days.`,
    bodyHtml,
  });
}

export function buildUserText(d: ContactData): string {
  const displayBrand = d.brandName || BRAND.name;
  const firstName = (d.first || d.fullName || "there").split(" ")[0] || "there";
  return [
    `Hi ${firstName},`,
    "",
    "Thank you for reaching out through my portfolio. Your message has landed",
    "safely in my inbox — I read every one personally and will get back to you",
    "within 1-2 days.",
    "",
    "For your records, here's a copy of what you sent:",
    "",
    d.message,
    "",
    "Warm regards,",
    displayBrand,
    BRAND.tagline,
  ].join("\n");
}
