import Img from "@/components/ui/Img";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

const points = [
  "Script Breakdown",
  "Character Research",
  "On-Set Discipline",
  "BTS Documentation",
];

export default function AboutMe() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left — tall portrait */}
        <FadeIn direction="right">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border">
            <Img
              src="/images/aboutme-photo.jpg"
              alt="Kavinkumar S"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
          </div>
        </FadeIn>

        {/* Right — text */}
        <FadeIn delay={0.15}>
          <SectionLabel>About me</SectionLabel>
          <h2 className="section-heading mt-5">
            Actor.
            <br />
            Storyteller.
            <br />
            <span className="text-accent">Filmmaker.</span>
          </h2>
          <p className="mt-5 font-display text-lg font-medium text-white/90">
            Blending discipline and creativity to build cinematic work with
            purpose.
          </p>
          <p className="body-text mt-4">
            Based in Tamil Nadu / Chennai-ready. Tamil, Tanglish, and English
            communication. I work at the intersection of performance and
            production, bringing both an actor&apos;s instinct and an assistant
            director&apos;s discipline to every project I join.
          </p>

          {/* 4 mini process points */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            {points.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="font-body text-sm text-white/85">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PillButton label="Work with me" href="#contact" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
