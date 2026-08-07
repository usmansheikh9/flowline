"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The horizontal rule threading the process steps. Draws in with scaleX so the
 * animation stays on the compositor: animating width would relayout the row on
 * every frame.
 */
export default function FlowLine({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
