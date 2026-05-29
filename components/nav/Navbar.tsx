"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { cn } from "@/lib/cn";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Acting", href: "#acting" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/88 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="wrap flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-white transition-colors hover:text-accent"
        >
          Kavinkumar S<span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PillButton label="Get in touch" href="#contact" size="sm" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-muted transition-colors hover:text-white md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-bg/98 px-6 pt-8 backdrop-blur-2xl md:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-4 font-display text-4xl font-bold text-white/80 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8">
              <PillButton
                label="Get in touch"
                href="#contact"
                size="lg"
                onClick={() => setOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
