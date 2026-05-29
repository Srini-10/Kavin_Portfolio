"use client";

import Img from "@/components/ui/Img";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";

const stats = [
  { num: "01", label: "Acting" },
  { num: "02", label: "Asst. Direction" },
  { num: "03", label: "Short Films" },
  { num: "04", label: "Filmmaking" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg pt-16"
    >
      {/* Portrait — right side, full height */}
      <div className="absolute inset-y-0 right-0 hidden h-full w-[55%] lg:block xl:w-[52%]">
        <Img
          src="/images/hero-portrait.jpg"
          alt="Kavinkumar S — cinematic portrait"
          fill
          priority
          sizes="55vw"
          className="object-cover object-center"
        />
        {/* Fade the portrait's left edge to solid bg so it reads as pure black */}
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
        {/* Warm right-edge glow */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_right,_rgba(240,69,0,0.25),transparent_70%)]" />
      </div>

      {/* Warm orange glow — sits ABOVE the portrait so it sweeps as one
          continuous wash across the left content area AND the faded-black left
          edge of the portrait, erasing the center seam. Fades out before it
          reaches the subject, and the z-10 content stays crisp on top. */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

      {/* Left content */}
      <div className="wrap relative z-10 w-full">
        <div className="flex max-w-2xl flex-col">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Actor · Assistant Director · Filmmaker
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-body text-lg text-muted"
          >
            Hey, I&apos;m an
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="display-heading mt-1"
          >
            Actor &amp;
            <br />
            <span className="text-accent">Filmmaker</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-md border-l-2 border-accent/60 pl-4 font-body text-sm italic leading-relaxed text-white/70"
          >
            &ldquo;An aspiring actor and assistant director focused on emotional
            storytelling, performance-driven cinema, and disciplined film
            production.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <PillButton label="View my work" href="#projects" size="lg" />
            <PillButton label="Get in touch" href="#contact" size="lg" />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.num} className="bg-bg/60 px-5 py-5 backdrop-blur-sm">
              <span className="font-display text-xs font-semibold text-accent">
                {s.num}
              </span>
              <p className="mt-1 font-display text-sm font-bold text-white">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-2 lg:flex">
        <span className="font-body text-[0.65rem] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
        />
      </div>
    </section>
  );
}
