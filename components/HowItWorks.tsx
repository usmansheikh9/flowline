import FlowLine from "./FlowLine";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    name: "Capture",
    description:
      "Turn any conversation, bug report, or idea into a tracked issue in seconds.",
  },
  {
    number: "02",
    name: "Plan",
    description:
      "Organize work into sprints and cycles your team actually follows.",
  },
  {
    number: "03",
    name: "Ship",
    description:
      "Track progress in real time and know exactly what's shipping this week.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="product"
      aria-labelledby="how-heading"
      className="mx-auto max-w-content px-6 py-24 md:px-8"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2
          id="how-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          From idea to shipped, in one flow
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/*
          Sits at the vertical centre of the h-8 number row below, so the rule
          reads as passing through the nodes rather than under them.
        */}
        <FlowLine className="absolute inset-x-0 top-4 hidden h-px bg-border md:block" />

        <ol className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.name} className="relative">
              <Reveal delay={index * 0.1}>
                <div className="flex h-8 items-center">
                  {/* Opaque background knocks a gap in the rule behind it. */}
                  <span className="bg-background pr-4 font-mono text-sm text-muted">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-medium text-foreground">{step.name}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
