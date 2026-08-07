import Reveal from "./Reveal";

/*
 * PLACEHOLDER CONTENT. Priya Raman is not a real person, holds no role at any
 * real company, and never said this. The quote is invented.
 *
 * A fabricated endorsement attributed to a named individual with a job title
 * is a stronger factual claim than a fabricated logo: it asserts that a
 * specific person vouched for the product. Replace with a real, permissioned
 * quote or delete this section before the page is published.
 * See PRODUCT.md, "Evidence on Hand".
 */
const QUOTE =
  "We moved off three different tools onto Flowline in a week. Our team actually uses it. That's the real win.";

const ATTRIBUTION = {
  name: "Priya Raman",
  title: "Engineering Lead",
  initials: "PR",
};

export default function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="mx-auto max-w-content px-6 py-24 md:px-8"
    >
      <h2 id="testimonial-heading" className="sr-only">
        What customers say
      </h2>

      <Reveal className="mx-auto max-w-3xl text-center">
        <figure>
          <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
            {QUOTE}
          </blockquote>

          <figcaption className="mt-10 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-border text-xs font-medium text-foreground"
            >
              {ATTRIBUTION.initials}
            </span>
            <span className="text-left text-sm">
              <span className="block font-medium text-foreground">
                {ATTRIBUTION.name}
              </span>
              <span className="block text-muted">{ATTRIBUTION.title}</span>
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
