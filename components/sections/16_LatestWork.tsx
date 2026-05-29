import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Acting & Direction",
    name: "Short Film Concept Development",
    year: "2025",
    desc: "Story ideation, screenplay planning, scene breakdown, performance preparation.",
  },
  {
    category: "Content Creation",
    name: "Brand Reel Content Planning",
    year: "2025",
    desc: "Hook writing, reel structure, visual planning, and production flow.",
  },
  {
    category: "Independent Film",
    name: "Independent Film Preparation",
    year: "2024",
    desc: "Character preparation, shot division, location planning, team coordination.",
  },
  {
    category: "Art Direction",
    name: "Emotional Short Film Concept",
    year: "2024",
    desc: "Script development and performance planning for an emotionally driven narrative.",
  },
];

export default function LatestWork() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        {/* Left */}
        <FadeIn className="md:col-span-5">
          <SectionLabel>Recent Work</SectionLabel>
          <h2 className="section-heading mt-5">
            Latest Projects
            <br />
            &amp; Collaborations
          </h2>
          <p className="body-text mt-5 max-w-sm">
            A look at what I&apos;ve been working on lately — acting prep,
            production planning, and creative story partnerships.
          </p>
        </FadeIn>

        {/* Right — project list */}
        <FadeIn delay={0.15} className="md:col-span-7">
          <div>
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="group flex items-start justify-between gap-4 border-t border-border py-6 transition-colors hover:border-accent/40"
              >
                <div>
                  <span className="font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted-2">
                    {p.category}
                  </span>
                  <p className="mt-1 font-display text-lg font-semibold text-white transition-colors group-hover:text-accent">
                    {p.name}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-col items-end gap-3">
                  <span className="font-display text-sm font-semibold text-muted">
                    {p.year}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-2 transition-colors group-hover:text-accent"
                  />
                </div>
              </div>
            ))}
            <p className="mt-6 font-body text-xs italic text-muted-2">
              * More projects and showreel links will be added here as work
              progresses.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
