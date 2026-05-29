import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

const packages = [
  {
    tier: "Short Film",
    price: "Actor",
    sub: "Acting Collaboration",
    features: [
      "Character performance",
      "Emotional scene work",
      "Tamil & English dialogue",
      "Portfolio documentation",
    ],
    highlight: false,
  },
  {
    tier: "Brand Content",
    price: "Actor + AD",
    sub: "Dual Role Collaboration",
    features: [
      "Acting performance",
      "Script breakdown",
      "Shot division",
      "Continuity management",
      "Production coordination",
      "BTS documentation",
      "Storyboard support",
    ],
    highlight: true,
    badge: "Full Stack",
  },
  {
    tier: "Feature / Series",
    price: "Full AD",
    sub: "Assistant Direction",
    features: [
      "Full pre-production support",
      "Call sheet management",
      "Location scouting",
      "Rehearsal direction",
    ],
    highlight: false,
  },
];

export default function PackagesSection() {
  return (
    <section id="acting" className="wrap py-24 md:py-32">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionLabel>Collaboration</SectionLabel>
        </div>
        <h2 className="section-heading mt-5">
          Simple Packages
          <br />
          for Every Stage
        </h2>
        <p className="body-text mx-auto mt-5 max-w-lg">
          Kavinkumar brings value at every stage of production — from short
          films to full features.
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {packages.map((p, i) => (
          <FadeIn key={p.tier} delay={i * 0.12}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                p.highlight
                  ? "border-accent bg-orange-grad shadow-2xl shadow-accent/20 md:scale-[1.03]"
                  : "border-border bg-surface hover:border-accent/30"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-bg">
                  {p.badge}
                </span>
              )}

              <p
                className={`font-body text-xs uppercase tracking-[0.18em] ${
                  p.highlight ? "text-white/80" : "text-muted"
                }`}
              >
                {p.tier}
              </p>

              <div className="mt-3">
                <span
                  className={`font-display text-3xl font-bold ${
                    p.highlight ? "text-white" : "text-white"
                  }`}
                >
                  {p.price}
                </span>
                <p
                  className={`mt-1 font-body text-sm ${
                    p.highlight ? "text-white/70" : "text-muted"
                  }`}
                >
                  {p.sub}
                </p>
              </div>

              <span
                className={`my-6 h-px w-full ${
                  p.highlight ? "bg-white/25" : "bg-border"
                }`}
              />

              <ul className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 font-body text-xs ${
                      p.highlight ? "text-white/90" : "text-muted"
                    }`}
                  >
                    <Check
                      size={14}
                      strokeWidth={3}
                      className={p.highlight ? "text-white" : "text-accent"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <PillButton
                  label="Get in touch"
                  href="#contact"
                  className={
                    p.highlight
                      ? "border-white/40 bg-white/10 text-white hover:border-white"
                      : ""
                  }
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
