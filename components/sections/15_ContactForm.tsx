"use client";

import { useState } from "react";
import { Input, Textarea } from "@heroui/react";
import { ArrowRight, Mail, Instagram, MapPin } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const fieldClasses = {
  input: "bg-transparent text-text font-body",
  inputWrapper:
    "bg-surface border-border data-[hover=true]:border-accent/50 group-data-[focus=true]:border-accent",
  label: "text-muted font-body",
};

export default function ContactForm() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project enquiry from ${form.first} ${form.last}`.trim()
    );
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.first} ${form.last}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:kavinkumars773@gmail.com?subject=${subject}&body=${body}`;
  };

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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Input
                label="First Name"
                placeholder="Arjun"
                variant="bordered"
                size="md"
                value={form.first}
                onValueChange={set("first")}
                isRequired
                classNames={fieldClasses}
              />
              <Input
                label="Last Name"
                placeholder="Kumar"
                variant="bordered"
                size="md"
                value={form.last}
                onValueChange={set("last")}
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
                classNames={fieldClasses}
              />
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface2 px-5 py-2.5 font-body text-sm font-medium text-white transition-all duration-300 hover:border-accent/60"
            >
              Send message
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent transition-colors duration-300 group-hover:bg-accent-h">
                <ArrowRight
                  size={12}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
