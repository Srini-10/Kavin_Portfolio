import { Clapperboard, Film, Video, Camera } from "lucide-react";

const productions = [
  { icon: Film, name: "Film Tamil" },
  { icon: Clapperboard, name: "Indie Works" },
  { icon: Video, name: "Short Form" },
  { icon: Camera, name: "Kollywood Ready" },
];

export default function BrandsBar() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="wrap flex flex-col items-center gap-6 py-7 md:flex-row md:justify-between">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted-2">
          Productions I&apos;ve Been Part Of
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {productions.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 text-muted transition-colors hover:text-white"
            >
              <Icon size={18} strokeWidth={1.75} />
              <span className="font-display text-sm font-semibold tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
