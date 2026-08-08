import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { DEMO_MAILTO, SALES_MAILTO } from "@/lib/links";

/*
 * PLACEHOLDER PRICING. The $12/user/month figure is invented. No pricing has
 * been confirmed for this product (see PRODUCT.md, "Evidence on Hand").
 *
 * Of every placeholder on this page, this is the one a visitor is most likely
 * to act on: people budget against it, cite it internally, and compare it to
 * competitors. Replace with real, approved figures or remove the section
 * before the page is published.
 */
type Tier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    description: "For small teams getting started",
    features: [
      "Up to 5 members",
      "Unlimited issues",
      "Basic integrations",
      "30-day history",
    ],
    cta: "Start free",
    href: DEMO_MAILTO,
    featured: false,
  },
  {
    name: "Team",
    price: "$12",
    period: "/user/month",
    description: "For growing engineering teams",
    features: [
      "Unlimited members",
      "Unlimited issues",
      "All integrations",
      "Unlimited history",
      "Advanced permissions",
      "Priority support",
    ],
    cta: "Start free",
    href: DEMO_MAILTO,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Team",
      "SSO and SAML",
      "Custom contracts",
      "Dedicated support",
      "Audit logs",
    ],
    cta: "Contact sales",
    href: SALES_MAILTO,
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="mx-auto max-w-content px-6 py-24 md:px-8"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label-mono">Pricing</p>
        <h2
          id="pricing-heading"
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          Simple pricing that scales with you
        </h2>
        <p className="mt-4 text-muted">
          Start free. Upgrade when your team needs more.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TIERS.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 0.08}>
            <div
              className={`flex h-full flex-col rounded-xl bg-surface p-8 ${
                // Emphasis carried by border weight, not a second accent hue.
                tier.featured ? "border border-foreground/20" : "border border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-medium text-foreground">{tier.name}</h3>
                {tier.featured && (
                  <span className="font-mono text-xs text-muted">Most popular</span>
                )}
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-muted">{tier.period}</span>
                )}
              </div>

              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <hr className="mt-8 border-border" />

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* mt-auto keeps the three CTAs on one baseline despite
                  differing feature counts. */}
              <div className="mt-auto pt-10">
                <a
                  href={tier.href}
                  className={`block rounded-md px-4 py-2.5 text-center text-sm font-medium transition-[background-color,transform] duration-150 ease-subtle active:scale-[0.97] ${
                    tier.featured
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "border border-border text-foreground hover:bg-background"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
