import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  future: {
    // Compiles every `hover:` variant to
    // `@media (hover: hover) and (pointer: fine)`, so touch devices don't
    // latch hover styles on tap. Applied globally rather than per call site.
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black canvas, never pure black.
        background: "#0A0A0B",
        // Raised surfaces: cards, panels, popovers.
        surface: "#131316",
        // Hairline dividers. Decorative only — never carries meaning alone.
        border: "#232326",
        foreground: "#EDEDEF",
        muted: "#8B8B8F",
        accent: {
          // Fill for primary CTAs. White text on this is 4.8:1 (AA).
          DEFAULT: "#5E5CE6",
          hover: "#4B49D6",
          // Accent *as text* on #0A0A0B. #5E5CE6 is only 4.13:1 and fails AA
          // at body size, so links and inline highlights use this instead (5.8:1).
          text: "#7D7BFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        label: "0.08em",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        // Decelerating, no overshoot.
        subtle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
