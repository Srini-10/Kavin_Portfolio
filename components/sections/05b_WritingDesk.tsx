"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import ScriptModal from "@/components/ui/ScriptModal";
import { stories, type Story } from "@/lib/stories";

export default function WritingDesk() {
  const [active, setActive] = useState<Story | null>(null);

  return (
    <section id="stories" className="wrap py-24 md:py-32">
      {/* Header */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <FadeIn className="md:col-span-7">
          <SectionLabel>Stories</SectionLabel>
          <h2 className="section-heading mt-5">
            From the
            <br />
            <span className="text-accent">Writing Desk</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="md:col-span-5">
          <p className="body-text">
            Original short film scripts — small rooms, late nights, and quiet
            goodbyes. Tap a card to read the full screenplay.
          </p>
        </FadeIn>
      </div>

      {/* Preview cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, i) => (
          <FadeIn key={story.id} delay={(i % 3) * 0.12}>
            <button
              type="button"
              onClick={() => setActive(story)}
              aria-label={`Read the full script: ${story.title}`}
              className="group flex h-full w-full flex-col rounded-3xl border border-border bg-surface p-7 text-left transition-all duration-300 hover:border-accent/40 hover:bg-surface2"
            >
              {/* Genre + setting */}
              <div className="flex items-start justify-between gap-3">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted-2">
                  {story.genre}
                </span>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 text-muted-2 transition-colors group-hover:text-accent"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-2xl font-bold text-white transition-colors group-hover:text-accent">
                {story.title}
              </h3>
              <p className="mt-1 font-display text-xs font-medium uppercase tracking-[0.12em] text-muted-2">
                {story.setting}
              </p>

              {/* Preview lines */}
              <div className="mt-5 space-y-2 border-l-2 border-border pl-4 transition-colors group-hover:border-accent/50">
                {story.preview.map((line, j) => (
                  <p
                    key={j}
                    className="font-body text-sm leading-relaxed text-white/65"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Logline */}
              <p className="mt-5 font-body text-xs italic leading-relaxed text-muted">
                {story.logline}
              </p>

              {/* "Read more" — visual pill (the whole card is the button) */}
              <span className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface2 px-3 py-1.5 font-body text-xs font-medium text-white transition-all duration-300 group-hover:border-accent/60">
                  <span className="whitespace-nowrap">Read more</span>
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors duration-300 group-hover:bg-accent-h">
                    <ArrowRight
                      size={10}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      <ScriptModal story={active} onClose={() => setActive(null)} />
    </section>
  );
}
