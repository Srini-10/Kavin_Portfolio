import Img from "@/components/ui/Img";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const skills = [
  { name: "Sony a6100 Handling", category: "Camera", year: "Tech" },
  { name: "DaVinci Resolve Editing", category: "Post", year: "Tech" },
  { name: "Script Breakdown & Shot Div.", category: "Direction", year: "AD" },
  { name: "Emotional Performance", category: "Acting", year: "Core" },
  { name: "Storyboarding", category: "Pre-Prod", year: "AD" },
  { name: "Framing & Composition", category: "Camera", year: "Tech" },
];

export default function SkillsSection() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left */}
        <FadeIn>
          <SectionLabel>Skills &amp; Recognition</SectionLabel>
          <h2 className="section-heading mt-5">
            Proud Moments,
            <br />
            Shared Success
          </h2>
          <p className="body-text mt-5 max-w-md">
            A few highlights from practical filmmaking preparation, on-set
            experience, and technical skill development.
          </p>

          <div className="mt-10">
            {skills.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.08}>
                <div className="flex items-center justify-between border-t border-border py-5 transition-colors hover:border-accent/40">
                  <div>
                    <span className="font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted-2">
                      {s.category}
                    </span>
                    <p className="mt-1 font-display text-lg font-semibold text-white">
                      {s.name}
                    </p>
                  </div>
                  <span className="font-display text-sm font-semibold text-accent">
                    {s.year}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Right — atmospheric image */}
        <FadeIn delay={0.15} direction="left">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-border">
            <Img
              src="/images/skills-image.jpg"
              alt="On-set lighting setup"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl font-bold text-white">
                Hands-on, on-set.
              </p>
              <p className="mt-1 font-body text-sm text-white/70">
                Learning the craft through real production work.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
