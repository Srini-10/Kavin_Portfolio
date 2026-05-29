import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

const cards = [
  {
    src: "/images/card-acting-natural.jpg",
    title: "Natural Look",
    desc: "Warm natural lighting setup. Approachable South Indian look for commercial and romantic roles.",
  },
  {
    src: "/images/card-acting-intense.jpg",
    title: "Intense Look",
    desc: "Bold, raw intensity. Strong visual energy for dramatic and action-heavy scenes.",
  },
  {
    src: "/images/card-rugged.jpg",
    title: "Rugged Raw Look",
    desc: "Grounded, textured look. Built for villain shades, gritty drama, and strong character roles.",
  },
  {
    src: "/images/card-emotional.jpg",
    title: "Emotional Close-Up",
    desc: "Deeply expressive close-up. The face that tells the full story without a single word.",
  },
];

export default function ProjectCards() {
  return (
    <section className="wrap pb-24 md:pb-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((c, i) => (
          <FadeIn key={c.title} delay={(i % 2) * 0.12}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              {/* Image */}
              <Image
                src={c.src}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-card-overlay" />
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-white/70">
                  {c.desc}
                </p>
                <div className="mt-5 translate-y-1 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <PillButton label="View" href="#contact" size="sm" />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
