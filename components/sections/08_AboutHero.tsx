import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutHero() {
  return (
    <section id="about" className="relative overflow-hidden bg-purple-grad">
      {/* texture / depth overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(123,45,216,0.5),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />

      <div className="wrap relative z-10 grid grid-cols-1 items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        {/* Left */}
        <FadeIn>
          <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70">
            Actor &amp; Filmmaker
          </span>
          <h2 className="display-heading mt-4 text-white">About</h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/80">
            Shaping meaningful stories through performance, direction,
            creativity, and collaboration.
          </p>
        </FadeIn>

        {/* Right — portrait */}
        <FadeIn delay={0.15} direction="left" className="relative">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <Image
              src="/images/about-portrait.jpg"
              alt="Kavinkumar S portrait"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-d/40 to-transparent" />
          </div>
          {/* floating label */}
          <p className="absolute -left-2 top-6 hidden max-w-[10rem] font-display text-lg font-bold leading-tight text-white/90 md:block">
            The Person Behind
            <br />
            the Frame
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
