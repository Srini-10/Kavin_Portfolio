"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ScriptBlock, Story } from "@/lib/stories";

/** Renders a single screenplay block in the correct script style. */
function Block({ block }: { block: ScriptBlock }) {
  switch (block.type) {
    case "time":
      return (
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {block.text}
        </p>
      );
    case "scene":
      return (
        <p className="border-l-2 border-accent/70 pl-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
          {block.text}
        </p>
      );
    case "action":
      return (
        <p className="font-body text-sm leading-relaxed text-white/70">
          {block.text}
        </p>
      );
    case "dialogue":
      return (
        <div className="px-2 text-center sm:px-10">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-l">
            {block.character}
          </p>
          {block.lines.map((line, i) => (
            <p
              key={i}
              className="mt-1 font-body text-sm italic leading-relaxed text-white"
            >
              {line}
            </p>
          ))}
        </div>
      );
    case "transition":
      return (
        <p className="text-right font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {block.text}
        </p>
      );
    case "titlecard":
      return (
        <p className="text-center font-display text-base font-medium italic leading-relaxed text-accent">
          {block.text}
        </p>
      );
    default:
      return null;
  }
}

export default function ScriptModal({
  story,
  onClose,
}: {
  story: Story | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape + lock body scroll while open (same pattern as Navbar).
  useEffect(() => {
    if (!story) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [story, onClose]);

  return (
    <AnimatePresence>
      {story && (
        <motion.div
          key="script-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/80 px-4 py-8 backdrop-blur-md sm:px-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${story.title} — short film script`}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
          >
            {/* Sticky header */}
            <div className="flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-6 py-5 backdrop-blur-sm sm:px-8">
              <div>
                <span className="section-label">{story.genre}</span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {story.title}
                </h3>
                <p className="mt-1 font-display text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {story.setting}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close script"
                className="flex-shrink-0 rounded-full border border-border bg-surface2 p-2 text-muted transition-colors hover:border-accent/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable screenplay body */}
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-7 sm:px-10">
              {story.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
