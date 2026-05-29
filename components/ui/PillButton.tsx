import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PillBtnProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { wrap: "px-3 py-1.5 gap-2 text-xs", dot: "w-5 h-5", icon: 10 },
  md: { wrap: "px-4 py-2 gap-2.5 text-sm", dot: "w-7 h-7", icon: 12 },
  lg: { wrap: "px-5 py-2.5 gap-3 text-base", dot: "w-8 h-8", icon: 14 },
};

/**
 * The distinctive toggle-pill CTA used across the whole site:
 * dark pill, white text on the left, orange filled circle with an
 * arrow icon on the right.
 */
export default function PillButton({
  label,
  href = "#",
  onClick,
  size = "md",
  className = "",
}: PillBtnProps) {
  const s = sizes[size];

  const inner = (
    <span
      className={cn(
        "group inline-flex items-center rounded-full border border-border bg-surface2 font-body font-medium text-white transition-all duration-300 hover:border-accent/60",
        s.wrap,
        className
      )}
    >
      <span className="whitespace-nowrap">{label}</span>
      <span
        className={cn(
          "flex flex-shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors duration-300 group-hover:bg-accent-h",
          s.dot
        )}
      >
        <ArrowRight
          size={s.icon}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </span>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="cursor-pointer">
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className="inline-flex cursor-pointer">
      {inner}
    </Link>
  );
}
