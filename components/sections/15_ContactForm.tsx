"use client";

import { useState } from "react";
import { Input, Textarea } from "@heroui/react";
import { ArrowRight, Mail, Instagram, MapPin, Check, Loader2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const fieldClasses = {
  input: "bg-transparent text-text font-body",
  inputWrapper:
    "bg-surface border-border data-[hover=true]:border-accent/50 group-data-[focus=true]:border-accent",
  label: "text-muted font-body",
};

// Same-origin API route (app/api/contact/route.ts). Override with an external
// URL via NEXT_PUBLIC_CONTACT_ENDPOINT only if you host the backend elsewhere.
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY = { first: "", last: "", email: "", message: "", _honey: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    // Clear a lingering success/error banner once the visitor edits again.
    setStatus((s) => (s === "success" || s === "error" ? "idle" : s));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const sending = status === "sending";

  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left */}
        <FadeIn>
          <SectionLabel>Contact me</SectionLabel>
          <h2 className="section-heading mt-5">
            Let&apos;s Create
            <br />
            Something
            <br />
            <span className="text-accent">Meaningful</span>
          </h2>
          <p className="body-text mt-5 max-w-md">
            Whether you&apos;re starting from scratch or need a dedicated actor /
            AD for your project, I&apos;m here to help bring your vision to life.
          </p>

          {/* Contact info */}
          <div className="mt-9 flex flex-col gap-4">
            <a
              href="mailto:kavinkumars773@gmail.com"
              className="flex items-center gap-3 font-body text-sm text-white/85 transition-colors hover:text-accent"
            >
              <Mail size={16} className="text-accent" />
              kavinkumars773@gmail.com
            </a>
            <a
              href="https://www.instagram.com/kavin__003_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-white/85 transition-colors hover:text-accent"
            >
              <Instagram size={16} className="text-accent" />
              kavin__003_
            </a>
            <span className="flex items-center gap-3 font-body text-sm text-muted">
              <MapPin size={16} className="text-accent" />
              Tamil Nadu / Chennai-ready
            </span>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-surface/50 p-6 sm:p-8"
          >
            {/* Honeypot — hidden from humans; bots that fill it are silently
                dropped by the backend. */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form._honey}
              onChange={(e) => set("_honey")(e.target.value)}
              className="hidden"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Input
                label="First Name"
                placeholder="Arjun"
                variant="bordered"
                size="md"
                value={form.first}
                onValueChange={set("first")}
                isRequired
                isDisabled={sending}
                classNames={fieldClasses}
              />
              <Input
                label="Last Name"
                placeholder="Kumar"
                variant="bordered"
                size="md"
                value={form.last}
                onValueChange={set("last")}
                isDisabled={sending}
                classNames={fieldClasses}
              />
            </div>
            <div className="mt-5">
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                variant="bordered"
                value={form.email}
                onValueChange={set("email")}
                isRequired
                isDisabled={sending}
                classNames={fieldClasses}
              />
            </div>
            <div className="mt-5">
              <Textarea
                label="Message"
                placeholder="Tell me about your project..."
                minRows={5}
                variant="bordered"
                value={form.message}
                onValueChange={set("message")}
                isRequired
                isDisabled={sending}
                classNames={fieldClasses}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface2 px-5 py-2.5 font-body text-sm font-medium text-white transition-all duration-300 hover:border-accent/60 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send message"}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent transition-colors duration-300 group-hover:bg-accent-h">
                {sending ? (
                  <Loader2 size={12} strokeWidth={2.5} className="animate-spin" />
                ) : (
                  <ArrowRight
                    size={12}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                )}
              </span>
            </button>

            {/* Status messages — the live-region wrappers stay mounted so
                screen readers reliably announce changes to their contents. */}
            <div aria-live="polite" role="status">
              {status === "success" && (
                <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 font-body text-sm text-white">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Thanks! Your message is on its way — I&apos;ll get back to you
                  soon.
                </div>
              )}
            </div>
            <div aria-live="assertive" role="alert">
              {status === "error" && (
                <div className="mt-5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 font-body text-sm text-red-300">
                  {error || "Something went wrong. Please try again."}
                </div>
              )}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
