# Product

<!-- impeccable:product-schema 1 -->

> **Provenance note.** No human interview was run. The user directed init to infer
> from the explicit brief and the incumbent `flowline-landing/tailwind.config.ts`
> tokens. Every fact below marked _(inferred)_ came from that brief, not from a
> confirmed answer, and should be re-confirmed before it is used as a public claim.

## Platform

web

## Users

_(inferred)_ Engineering teams at software companies — ICs, tech leads, and
engineering managers — evaluating a replacement for a heavier issue tracker.
The primary visitor to this surface is a developer or eng manager doing a
fast, skeptical evaluation scan, often mid-workday, often comparing two or
three tools in adjacent tabs.

## Product Purpose

_(inferred)_ Flowline unifies issue tracking, sprints, and roadmaps into a
single fast, keyboard-driven tool, so engineering teams stop context-switching
between planning tools and the work itself.

## Positioning

_(inferred)_ Speed and keyboard-first interaction as the differentiator, in the
Linear/Vercel competitive register. The claim a neighboring product could not
truthfully copy is the combination of issue tracking + sprints + roadmaps in one
surface at that latency, rather than any single one of them.

## Operating Context

_(inferred)_ Used daily alongside a code host and CI. Evaluation happens on
desktop first; the marketing surface is nonetheless read on mobile often enough
that layout must hold at 360px.

## Capabilities and Constraints

Confirmed from the codebase:

- Next.js 14.2.35, App Router, TypeScript, Tailwind 3.4, `@/*` alias, no `src/`.
- `framer-motion` and `lucide-react` are the only UI dependencies.
- Fonts are self-hosted Geist Sans + Geist Mono via `next/font/local`.
- Design tokens are fixed and closed: `background #0A0A0B`, `surface #131316`,
  `border #232326`, `foreground #EDEDEF`, `muted #8B8B8F`, `accent #5E5CE6`,
  `accent-hover #4B49D6`, `accent-text #7D7BFF`.
- Stated performance/accessibility target: Lighthouse 95+ on both.

**Explicitly undecided:** real feature names beyond the three named surfaces,
integrations, and any latency figure. Do not invent benchmarks.

## Brand Commitments

- Name: **Flowline**. Wordmark is text, not an image asset.
- _(inferred)_ Voice: precise, technical, understated. No exclamation marks, no
  growth-marketing register. Claims stay concrete.
- Single accent hue used sparingly — at most one accent highlight per section.

## Evidence on Hand

**None.** There are no real customers, logos, testimonials, case studies,
benchmarks, press mentions, or pricing figures in this repository.

Future work on LogoBar, Testimonial, and Pricing must either obtain real
material from the user or render those sections in an explicitly placeholder
state. Fabricated company names, quotes, headshots, attributed titles, or
dollar figures are prohibited — they read as real to a visitor and would be a
false claim about a real market.

## Product Principles

1. **Speed is the argument.** If the page is slow, the positioning is refuted by
   the artifact itself. Performance is a brand commitment, not a tax.
2. **Concrete over superlative.** Name the mechanism; never reach for "best".
3. **Restraint carries the accent.** One accent moment per section; scarcity is
   what makes it read as deliberate.
4. **Never fabricate proof.** Absent evidence is left absent and flagged.

## Accessibility & Inclusion

Target WCAG 2.1 AA on a dark canvas. Accent `#5E5CE6` measures 4.13:1 on
`#0A0A0B` and therefore may not be used for body-size text; `accent-text
#7D7BFF` (5.8:1) is the text-safe variant. All motion must degrade under
`prefers-reduced-motion`.
