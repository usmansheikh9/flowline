# Flowline

Marketing landing page for Flowline, a project tracking and issue management
tool for engineering teams. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, framer-motion, and lucide-react.

## Getting started

```bash
npm install
npm run dev     # development server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build (use this for Lighthouse)
```

Run Lighthouse against `npm run start`, never `npm run dev` — dev mode is
deliberately unoptimized and will report misleading numbers.

## Placeholder content

Three sections assert things that are not true and must be replaced or removed
before this is deployed to a public URL. Each file carries a block comment at
the top explaining what is invented.

| File | Fabricated |
| --- | --- |
| `components/LogoBar.tsx` | Six invented companies under a "Trusted by engineering teams at" heading |
| `components/Testimonial.tsx` | A named person and an endorsement quote, both invented |
| `components/Pricing.tsx` | The `$12/user/month` figure; no pricing has been confirmed |

Also placeholder: every footer and social link is `href="#"`, and
`metadataBase` points at `https://flowline-landing.vercel.app`.

## Design system

`PRODUCT.md` records durable product truth. `DESIGN.md` records the visual
system, with machine-readable tokens in its frontmatter and the extended token
set in `.impeccable/design.json`. Tokens are normative: the eight colors in
`tailwind.config.ts` are the complete palette, and no component introduces a
raw hex value.

Two rules do most of the work:

- **The One Accent Rule.** `#5E5CE6` appears at most once per section.
- **The Text-Safe Rule.** `#5E5CE6` measures 4.13:1 on `#0A0A0B` and fails AA
  at body size, so accent *fills* use `#5E5CE6` with white glyphs while accent
  *text* uses `#7D7BFF` (5.8:1).

## Build tooling

This project was built using Claude Code with design-discipline skills
(impeccable, design-taste-frontend, emil-design-eng, full-output-enforcement).
Run `npx skills add` per `skills-lock.json` to reproduce the setup.

The skill sources are not vendored into this repository. `skills-lock.json`
records each skill's upstream source, path, and content hash:

```bash
npx skills add leonxlnx/taste-skill --skill design-taste-frontend --agent claude-code
npx skills add leonxlnx/taste-skill --skill full-output-enforcement --agent claude-code
npx skills add emilkowalski/skills --skill emil-design-eng --agent claude-code
npx skills add pbakaus/impeccable --skill impeccable --agent claude-code
```
