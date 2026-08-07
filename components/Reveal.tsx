"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating. Use small steps (0.05–0.1) to stagger siblings. */
  delay?: number;
  /** Travel distance in px. Keep it small — this is a settle, not an entrance. */
  distance?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 12,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Honour the OS setting: fade only, no movement.
  const offset = prefersReducedMotion ? 0 : distance;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: fires a single time, so scrolling back up doesn't re-trigger.
      // margin: starts slightly before the element reaches the viewport edge.
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.32,
        delay,
        // Decelerating curve — no overshoot, no bounce.
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
