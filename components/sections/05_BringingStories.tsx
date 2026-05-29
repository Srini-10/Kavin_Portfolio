import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

export default function BringingStories() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <FadeIn className="md:col-span-7">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="section-heading mt-5">
            Bringing Characters
            <br />
            to Life Through
            <br />
            <span className="text-accent">Performance</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="md:col-span-5">
          <p className="body-text">
            A curated collection of acting appearances, assistant direction
            work, and creative projects built for emotional impact and cinematic
            identity.
          </p>
          <div className="mt-6">
            <PillButton label="Explore projects" href="#gallery" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
