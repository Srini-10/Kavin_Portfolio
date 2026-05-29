import Img from "@/components/ui/Img";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

const gridImages = [
  { src: "/images/work-grid-1.jpg", label: "Idaithum Naan Tholaikiren" },
  { src: "/images/work-grid-2.jpg", label: "On Set" },
  { src: "/images/work-grid-3.jpg", label: "Production" },
  { src: "/images/work-grid-4.jpg", label: "Performance" },
];

export default function CuriousSection() {
  return (
    <section id="gallery" className="wrap py-24 md:py-32">
      {/* Centered header */}
      <FadeIn className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionLabel>Behind the Work</SectionLabel>
        </div>
        <h2 className="section-heading mt-5">
          Curious What Else
          <br />
          I&apos;ve Done?
        </h2>
        <p className="body-text mx-auto mt-5 max-w-lg">
          Explore more about how I approach roles, set work, screenplay
          planning, and my personal film projects and collaborations.
        </p>
        <div className="mt-7 flex justify-center">
          <PillButton label="View the gallery" href="#contact" />
        </div>
      </FadeIn>

      {/* 4-image grid — uniform square cards */}
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {gridImages.map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.1}>
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Img
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 font-display text-xs font-semibold text-white/90">
                {img.label}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
