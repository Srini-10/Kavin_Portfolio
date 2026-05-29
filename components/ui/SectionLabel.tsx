import { cn } from "@/lib/cn";

export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("section-label inline-flex items-center gap-2", className)}>
      <span className="h-px w-5 bg-accent/70" aria-hidden />
      {children}
    </span>
  );
}
