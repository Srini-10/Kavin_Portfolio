"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "left" | "right" | "none";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const init: Record<Direction, { opacity: number; x?: number; y?: number }> = {
    up: { opacity: 0, y: 28 },
    left: { opacity: 0, x: -28 },
    right: { opacity: 0, x: 28 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={init[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : init[direction]}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
