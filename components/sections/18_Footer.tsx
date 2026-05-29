import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const footerLinks = [
  { label: "Acting", href: "#acting" },
  { label: "Direction", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="wrap flex flex-col items-center gap-8 py-12 md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="text-center md:text-left">
          <Link
            href="#home"
            className="font-display text-xl font-bold tracking-tight text-white"
          >
            Kavinkumar S<span className="text-accent">.</span>
          </Link>
          <p className="mt-1 font-body text-xs uppercase tracking-[0.18em] text-muted-2">
            Actor · Assistant Director · Filmmaker
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {footerLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-body text-sm text-muted transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/kavinkumars773"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-accent"
          >
            <Instagram size={18} />
          </a>
          <a
            href="mailto:kavinkumars773@gmail.com"
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="wrap py-5 text-center">
          <p className="font-body text-xs text-muted-2">
            © 2025 Kavinkumar S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
