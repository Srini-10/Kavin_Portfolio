import Img from "@/components/ui/Img";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

// Each photo keeps its real aspect ratio. flex-grow is set proportional to the
// ratio (with basis-0) so every image renders at the SAME height with its
// natural width — a clean, uncropped "filmstrip" that matches the UI.
// `position` is a per-photo object-position: these are tall portrait shots
// dropped into short landscape boxes, so a centered crop would cut off the
// heads — each is biased toward the top to keep the full face in frame.
// (Class strings are static literals so Tailwind's JIT scanner emits them.)
const photos = [
  { src: "/images/acting-white-shirt.jpg", caption: "Natural", aspect: "aspect-[3/2]", grow: "sm:grow-[1.5]", position: "object-[center_15%]" },
  { src: "/images/acting-black-tshirt.jpg", caption: "Intense", aspect: "aspect-[16/9]", grow: "sm:grow-[1.78]", position: "object-[center_15%]" },
  { src: "/images/acting-side-profile.jpg", caption: "Cinematic", aspect: "aspect-[16/9]", grow: "sm:grow-[1.78]", position: "object-[center_58%]" },
];

export default function BehindTheWork() {
  return (
    <section className="wrap py-24 md:py-32">
      {/* Two-column header */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <FadeIn className="md:col-span-7">
          <SectionLabel>Behind the Work</SectionLabel>
          <h2 className="section-heading mt-5">
            Performances That
            <br />
            Make You Feel Something
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="md:col-span-5">
          <p className="body-text">
            &ldquo;I&apos;m an actor and assistant director focused on building
            clean, emotionally honest performances that solve real storytelling
            problems.&rdquo;
          </p>
          <div className="mt-6">
            <PillButton label="See the range" href="#gallery" />
          </div>
        </FadeIn>
      </div>

      {/* Natural-ratio justified gallery */}
      <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-stretch">
        {photos.map((p, i) => (
          <div key={p.caption} className={`sm:basis-0 ${p.grow} sm:min-w-0`}>
            <FadeIn delay={i * 0.12}>
              <div
                className={`group relative w-full overflow-hidden rounded-2xl border border-border ${p.aspect}`}
              >
                <Img
                  src={p.src}
                  alt={`Kavinkumar S — ${p.caption} acting look`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={`object-cover ${p.position} grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {p.caption}
                </span>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
