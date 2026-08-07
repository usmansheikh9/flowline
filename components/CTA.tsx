import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-content px-6 py-24 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Ready to move faster?
          </h2>

          <p className="mt-4 text-muted">
            Join engineering teams already shipping with Flowline.
          </p>

          <a
            href="#signup"
            className="mt-10 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white transition-[background-color,transform] duration-150 ease-subtle hover:bg-accent-hover active:scale-[0.97]"
          >
            Start free
          </a>
        </Reveal>
      </div>
    </section>
  );
}
