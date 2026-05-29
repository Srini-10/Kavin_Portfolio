import Img from "@/components/ui/Img";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactHero() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-contact-grad"
    >
      {/* depth overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,140,66,0.5),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />

      <div className="wrap relative z-10 grid grid-cols-1 items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        {/* Left content */}
        <FadeIn>
          <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/80">
            Get in touch
          </span>
          <h2 className="display-heading mt-4 text-white">Contact</h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/85">
            Let&apos;s build something great together — start the conversation
            today.
          </p>
        </FadeIn>

        {/* Right — portrait */}
        <FadeIn delay={0.15} direction="left">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <Img
              src="/images/contact-portrait.jpg"
              alt="Kavinkumar S"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0800]/50 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
