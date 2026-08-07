import { siGithub, siX } from "simple-icons";

const LINK_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

/*
 * Brand marks come from simple-icons, since lucide-react ships none. Path data
 * is inlined at build time by this Server Component, so it costs no client JS.
 *
 * LinkedIn is absent deliberately: simple-icons removed it (along with Slack)
 * following trademark requests, and hand-drawing the glyph is not an option.
 */
const SOCIAL_LINKS = [
  { label: "GitHub", href: "#", path: siGithub.path },
  { label: "X", href: "#", path: siX.path },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-foreground" />
              Flowline
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Project management for teams that ship.
            </p>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-medium text-foreground">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rounded-sm text-sm text-muted transition-colors duration-150 ease-subtle hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            &copy; 2026 Flowline. All rights reserved.
          </p>

          <ul className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="block rounded-sm text-muted transition-colors duration-150 ease-subtle hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={link.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
