import Reveal from "./Reveal";
import HeroMockup from "./HeroMockup";
import { DEMO_MAILTO } from "@/lib/links";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-content px-6 pb-20 pt-32 md:px-8"
    >
      <div className="flex flex-col items-center text-center">
        <h1
          id="hero-heading"
          className="hero-rise max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl"
          style={{ "--rise-delay": "0ms" } as React.CSSProperties}
        >
          Project management that moves as fast as your team.
        </h1>

        <p
          className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          style={{ "--rise-delay": "80ms" } as React.CSSProperties}
        >
          Flowline combines issue tracking, sprints, and roadmaps in one fast,
          keyboard-driven tool built for engineering teams.
        </p>

        <div
          className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ "--rise-delay": "160ms" } as React.CSSProperties}
        >
          <a
            href={DEMO_MAILTO}
            className="rounded-md bg-accent px-6 py-3 font-medium text-white transition-[background-color,transform] duration-150 ease-subtle hover:bg-accent-hover active:scale-[0.97]"
          >
            Start free
          </a>
          <a
            href={DEMO_MAILTO}
            className="rounded-md border border-border px-6 py-3 font-medium text-foreground transition-[background-color,transform] duration-150 ease-subtle hover:bg-surface active:scale-[0.97]"
          >
            View demo
          </a>
        </div>
      </div>

      <Reveal className="mt-20" distance={16}>
        <HeroMockup />
      </Reveal>
    </section>
  );
}
