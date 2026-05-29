import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutDetail() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <FadeIn>
          <SectionLabel>Who I Am</SectionLabel>
          <h2 className="section-heading mt-5">
            Perform with Purpose
            <br />
            and Personality
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-text">
            I&apos;m Kavinkumar, an aspiring filmmaker and actor passionate
            about emotionally driven storytelling. I actively work on short film
            concepts, screenplay development, production planning, assistant
            direction, and performance-based cinema. My goal is to grow as both
            an actor and assistant director while building films rooted in
            strong emotions and visual storytelling.
          </p>
          <p className="body-text mt-5">
            Whether you&apos;re looking for a committed actor, a reliable
            assistant director, or a creative collaborator — I bring discipline,
            emotional intelligence, and a deep passion for cinema to every
            project.
          </p>
          <div className="mt-7">
            <PillButton label="Let's collaborate" href="#contact" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
