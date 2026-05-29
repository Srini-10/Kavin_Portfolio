import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

export default function ProjectsHero() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden"
    >
      {/* Full-bleed background image */}
      <Image
        src="/images/projects-hero.jpg"
        alt="Cinematic project still"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/75 to-transparent" />

      {/* Content — intro pinned top-right, big heading pinned bottom-left */}
      <div className="wrap relative z-10 flex min-h-[80vh] w-full flex-col justify-between pb-14 pt-28 md:pb-20 md:pt-32">
        <FadeIn className="max-w-sm md:max-w-md md:self-end md:text-right">
          <p className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
            Real stories,{" "}
            <span className="text-accent">real emotions.</span>
          </p>
          <p className="body-text mt-3 md:ml-auto">
            A curated collection of acting work, assistant direction projects,
            and short film productions built for impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="display-heading mt-3">Projects</h2>
        </FadeIn>
      </div>
    </section>
  );
}
