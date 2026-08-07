import type { ReactNode } from "react";
import { Box, Database, GitPullRequest, Layers, MousePointer2, Terminal } from "lucide-react";
import Reveal from "./Reveal";

type Feature = {
  title: string;
  description: string;
  /* 12-column spans, deliberately uneven so no row repeats the one above it. */
  span: string;
  minHeight: string;
  visual: ReactNode;
};

const TIMELINE = ["Spec", "Alpha", "Beta", "GA"];

const INTEGRATIONS = [
  { icon: Box, label: "Packages" },
  { icon: Terminal, label: "CLI" },
  { icon: Database, label: "Data warehouse" },
  { icon: GitPullRequest, label: "Pull requests" },
  { icon: Layers, label: "Design tools" },
];

const ROLES = [
  { name: "Admin", border: "border-border" },
  { name: "Member", border: "border-border/70" },
  { name: "Viewer", border: "border-border/40" },
];

const FEATURES: Feature[] = [
  {
    title: "Real-time sync",
    description: "Everyone sees the same board at the same moment, with no refresh.",
    span: "lg:col-span-7",
    minHeight: "lg:min-h-[320px]",
    visual: (
      <div className="relative h-full min-h-[150px] rounded-lg border border-border bg-background p-4">
        <div className="space-y-2.5">
          <div className="h-2 w-3/5 rounded-full bg-border" />
          <div className="h-2 w-4/5 rounded-full bg-border" />
          <div className="h-2 w-2/5 rounded-full bg-border" />
          <div className="h-2 w-3/4 rounded-full bg-border" />
        </div>

        {/* The section's single accent moment. */}
        <div className="absolute left-[34%] top-[24%] flex items-start gap-1">
          <MousePointer2 size={14} strokeWidth={1.5} className="fill-accent text-accent" />
          <span className="flex items-center gap-1.5 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white">
            Priya
            <span className="animate-soft-pulse h-1 w-1 rounded-full bg-white" />
          </span>
        </div>

        <div className="absolute left-[58%] top-[62%] flex items-start gap-1">
          <MousePointer2 size={14} strokeWidth={1.5} className="fill-muted text-muted" />
          <span className="rounded bg-border px-1.5 py-0.5 font-mono text-[10px] text-foreground">
            Aleksi
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Keyboard shortcuts",
    description: "Every action has a key. Your hands never leave the keyboard.",
    span: "lg:col-span-5",
    minHeight: "lg:min-h-[320px]",
    visual: (
      <div className="flex flex-wrap items-center gap-2">
        <kbd className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground">
          Cmd
        </kbd>
        <kbd className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground">
          K
        </kbd>
        <span className="ml-2 rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground">
          C
        </span>
      </div>
    ),
  },
  {
    title: "Custom workflows",
    description: "Model the states your team actually uses, not the ones you inherited.",
    span: "lg:col-span-5",
    minHeight: "lg:min-h-[260px]",
    visual: (
      <div className="flex flex-wrap items-center gap-y-2">
        <span className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[10px] text-muted">
          Todo
        </span>
        <span aria-hidden="true" className="mx-2 h-px w-5 bg-border" />
        <span className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[10px] text-muted">
          Review
        </span>
        <span aria-hidden="true" className="mx-2 h-px w-5 bg-border" />
        <span className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[10px] text-muted">
          Done
        </span>
      </div>
    ),
  },
  {
    title: "Roadmaps and timelines",
    description: "Plan quarters ahead without leaving the tool your team works in.",
    span: "lg:col-span-7",
    minHeight: "lg:min-h-[260px]",
    visual: (
      <div className="flex items-start">
        {TIMELINE.map((milestone, index) => (
          <div key={milestone} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-muted" />
              <span className="font-mono text-[10px] text-muted">{milestone}</span>
            </div>
            {index < TIMELINE.length - 1 && (
              <span aria-hidden="true" className="mt-[3px] h-px flex-1 bg-border" />
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Integrations",
    description: "Connects to the systems your work already flows through.",
    span: "lg:col-span-6",
    minHeight: "lg:min-h-[220px]",
    visual: (
      <div className="flex flex-wrap gap-2">
        {INTEGRATIONS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            title={label}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted"
          >
            <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Advanced permissions",
    description: "Give contractors a view without giving them the keys.",
    span: "lg:col-span-6",
    minHeight: "lg:min-h-[220px]",
    visual: (
      <div className="flex flex-wrap gap-2">
        {ROLES.map(({ name, border }) => (
          <span
            key={name}
            className={`rounded-full border ${border} px-3 py-1 font-mono text-[10px] text-muted`}
          >
            {name}
          </span>
        ))}
      </div>
    ),
  },
];

export default function BentoFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto max-w-content px-6 py-24 md:px-8"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label-mono">Features</p>
        <h2
          id="features-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          Everything your team needs to ship
        </h2>
        <p className="mt-4 text-muted">
          Built for engineering teams who move fast and hate friction.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {FEATURES.map((feature, index) => (
          <Reveal
            key={feature.title}
            className={`${feature.span} ${feature.minHeight}`}
            delay={index * 0.07}
          >
            <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-150 ease-subtle hover:border-muted/30">
              <h3 className="font-medium text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
              <div className="mt-auto pt-8">{feature.visual}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
