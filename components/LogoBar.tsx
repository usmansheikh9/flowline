import Reveal from "./Reveal";

/*
 * PLACEHOLDER CONTENT. These six companies do not exist. They are invented
 * wordmarks standing in for a real customer list.
 *
 * The heading above them ("Trusted by engineering teams at") reads to a
 * visitor as a factual claim, so this section must be replaced with real,
 * permissioned customer names or deleted outright before the page is
 * published. See PRODUCT.md, "Evidence on Hand".
 */
const WORDMARKS = [
  { name: "Northgate", monogram: "NG" },
  { name: "Kestrel", monogram: "KE" },
  { name: "Halyard Systems", monogram: "HS" },
  { name: "Meridian", monogram: "MD" },
  { name: "Sundial", monogram: "SD" },
  { name: "Lockstep", monogram: "LS" },
];

export default function LogoBar() {
  return (
    <section
      aria-labelledby="logobar-heading"
      className="mx-auto max-w-content px-6 py-16 md:px-8"
    >
      <Reveal>
        <h2 id="logobar-heading" className="sr-only">
          Teams using Flowline
        </h2>

        <p className="text-center font-mono text-xs uppercase tracking-label text-muted">
          Trusted by engineering teams at
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {WORDMARKS.map(({ name, monogram }) => (
            <li
              key={name}
              className="flex items-center gap-2.5 opacity-60 transition-opacity duration-150 ease-subtle hover:opacity-100"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-surface font-mono text-xs text-muted"
              >
                {monogram}
              </span>
              <span className="text-lg font-semibold tracking-tight text-muted">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
