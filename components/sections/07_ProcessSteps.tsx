import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    num: "01",
    title: "Script Breakdown",
    desc: "Analyzing screenplay structure, character arcs, and scene requirements for thorough preparation.",
  },
  {
    num: "02",
    title: "Rehearsal & Prep",
    desc: "Character research, dialogue delivery practice, and physical preparation for performance.",
  },
  {
    num: "03",
    title: "On-Set Execution",
    desc: "Disciplined set presence, continuity tracking, team coordination, and camera awareness.",
  },
  {
    num: "04",
    title: "Post & Showreel",
    desc: "BTS documentation, showreel curation, and project wrap with full production notes.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="wrap grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div className="relative h-full px-2 py-12 sm:px-6 lg:px-7 lg:py-16">
              {/* divider for lg+ */}
              {i !== 0 && (
                <span className="absolute left-0 top-12 hidden h-[calc(100%-6rem)] w-px bg-border lg:block" />
              )}
              <span className="font-display text-4xl font-bold text-accent/80">
                {s.num}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
