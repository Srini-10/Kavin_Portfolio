import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";
import { Drama, Clapperboard, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Drama,
    label: "Your role, visually defined.",
    title: "Acting & Performance",
    desc: "Natural performance, emotional dialogue delivery, character-driven scenes, Tamil & English language roles, improvisation, and camera awareness.",
  },
  {
    icon: Clapperboard,
    label: "Clarity behind the visuals.",
    title: "Assistant Direction",
    desc: "Script breakdown, shot division, scene continuity, call sheet support, location scouting, rehearsal planning, and production coordination.",
  },
  {
    icon: Lightbulb,
    label: "Ongoing creative guidance.",
    title: "Creative Consulting",
    desc: "Screenplay concept development, content reel planning, brand film structuring, storyboarding, and visual storytelling strategy.",
  },
];

export default function ServicesSection() {
  return (
    <section className="wrap py-24 md:py-32">
      {/* Header row */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <FadeIn className="md:col-span-7">
          <SectionLabel>Services</SectionLabel>
          <h2 className="section-heading mt-5">
            What I Bring
            <br />
            to the Set
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="md:col-span-5">
          <p className="body-text">
            From performance to production planning, I offer tailored
            contributions to help your project grow with clarity and cinematic
            impact.
          </p>
        </FadeIn>
      </div>

      {/* 3 service cards */}
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.12}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface2">
              <s.icon
                size={26}
                strokeWidth={1.75}
                className="text-accent"
              />
              <p className="mt-6 font-body text-xs uppercase tracking-[0.15em] text-muted-2">
                {s.label}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
              {/* orange bottom-accent line */}
              <span className="mt-auto block h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-10">
        <PillButton label="Discuss your project" href="#contact" />
      </FadeIn>
    </section>
  );
}
