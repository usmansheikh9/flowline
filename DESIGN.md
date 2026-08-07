---
name: Flowline
description: Project management that moves as fast as your team.
colors:
  void: "#0A0A0B"
  slate-panel: "#131316"
  hairline: "#232326"
  bone: "#EDEDEF"
  ash: "#8B8B8F"
  arc-violet: "#5E5CE6"
  arc-violet-deep: "#4B49D6"
  arc-violet-lifted: "#7D7BFF"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.arc-violet}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.arc-violet-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.slate-panel}"
  card:
    backgroundColor: "{colors.slate-panel}"
    textColor: "{colors.bone}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip:
    backgroundColor: "{colors.slate-panel}"
    textColor: "{colors.ash}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Flowline

## Overview

**Creative North Star: "The Instrument Panel at Night"**

Flowline's surface behaves like precision equipment observed in a dark room. The
canvas is not black but very-near-black (#0A0A0B), the way an unlit screen is
never truly off. Every element reads as machined: hairline borders instead of
shadows, tonal steps instead of glow, monospace where the interface is naming
something rather than speaking to you. Nothing is decorative that could not also
be functional.

The density is calm and generous rather than packed. Marketing surfaces breathe
at 96px section rhythm; the product mockups inside them stay tight, because the
contrast between the two is the argument — the page is unhurried, the tool is
fast. Restraint carries the identity. A single violet is the only chromatic event
in the entire system, and it appears at most once per section. Its scarcity is
what makes it read as intentional rather than as branding applied on top.

The confirmed anti-reference is the gradient-heavy, multi-hue, glass-morphic SaaS
register. Flowline rejects it: no gradient meshes, no hero blur blobs, no second
accent hue introduced for variety.

**Key Characteristics:**

- Near-black canvas, never pure black
- One accent hue, used at most once per section
- Hairline borders as the primary separation device; shadows are almost absent
- Monospace reserved for labels, tags, and code-like fragments
- Tight negative letter-spacing on large type, wide positive on small mono labels

## Colors

A monochrome graphite system interrupted exactly once per section by a single
electric violet.

### Primary

- **Arc Violet** (#5E5CE6): The only chromatic voice. Reserved for primary CTA
  fills, the active state of a selected control, and a single highlight moment
  per section. It is a *fill* color, not a text color — see the Text-Safe Rule.
- **Arc Violet Deep** (#4B49D6): The pressed and hovered state of any Arc Violet
  fill. Darker rather than lighter, so hover reads as depression, not glow.
- **Arc Violet Lifted** (#7D7BFF): Arc Violet's text-safe sibling. Used for
  links, inline emphasis, and focus rings — anywhere the accent must carry glyph
  weight against the void.

### Neutral

- **Void** (#0A0A0B): The page canvas. Near-black with a faint blue-violet bias,
  which is what keeps it from reading as a dead LCD black.
- **Slate Panel** (#131316): Every raised surface — cards, the mobile menu, the
  scrolled nav, mockup chrome. Depth is expressed by this tonal step, not shadow.
- **Hairline** (#232326): 1px separations, card outlines, dividers. Visible but
  never assertive; it should be felt as an edge before it is noticed as a line.
- **Bone** (#EDEDEF): Primary text, headlines, and active states. ~16.5:1 on Void.
- **Ash** (#8B8B8F): Secondary text, inactive nav links, captions, mono labels.
  5.83:1 on Void — genuinely readable, not decorative grey.

### Named Rules

**The One Accent Rule.** Arc Violet appears at most once per section, and never
twice in the same viewport. If a section needs a second emphasis, it earns it
with weight, size, or a tonal step — not with color.

**The Text-Safe Rule.** #5E5CE6 measures 4.13:1 on #0A0A0B and therefore never
carries body-size text. Accent *fills* use #5E5CE6 with white glyphs (4.79:1);
accent *text* uses #7D7BFF (5.8:1). Violating this is the single easiest way to
fail the project's accessibility target.

**The No Second Hue Rule.** Status colors inside product mockups are expressed as
tonal steps of the neutrals, not as a red/amber/green semantic palette. The one
exception is a functional status dot, which may only ever be Arc Violet, Ash, or
Bone.

## Typography

**Display Font:** Geist Sans (with system-ui, sans-serif fallback)
**Body Font:** Geist Sans (same family; hierarchy is carried by weight and size)
**Label/Mono Font:** Geist Mono (with ui-monospace fallback)

**Character:** A single neo-grotesque doing all the speaking, with a monospace
that only ever *labels*. The pairing reads as engineered rather than designed —
Geist Sans is neutral enough to disappear at body size and confident enough to
carry a 72px headline, while Geist Mono signals "this is a name, a tag, or a
value" without needing a color change.

### Hierarchy

- **Display** (600, clamp 2.25rem–4.5rem, 1.05 line-height, -0.02em): Hero
  headline only. One per page. The negative tracking is mandatory at this size —
  default tracking makes Geist look loose and amateur above 48px.
- **Headline** (600, 1.875rem, 1.2, -0.015em): Section headings.
- **Title** (500, 1rem, 1.4): Card titles, nav links, button labels.
- **Body** (400, 1.125rem, 1.6): Subheads and paragraphs. Cap measure at 65–75ch.
- **Label** (400, 0.75rem, +0.08em, uppercase, Geist Mono): Eyebrows, tags,
  chips, and metadata. Always Ash, never Bone.

### Named Rules

**The Tracking Inversion Rule.** Letter-spacing runs negative as type grows and
positive as it shrinks. Large type tightens (-0.02em); small mono labels open up
(+0.08em). Never the reverse.

**The Mono-Is-A-Noun Rule.** Geist Mono labels things — statuses, tags, section
eyebrows, identifiers. It never sets a sentence. If it reads as prose, it should
be Geist Sans.

## Layout

A centered max-width container (`max-w-content`, 72rem) with responsive gutters:
24px at mobile, widening to 32px+ from the `md` breakpoint. Vertical rhythm is
built on a 96px section step (`py-24`), tightening to 64px for connective
sections like the logo bar.

Text blocks are constrained well inside the container — hero copy caps at
`max-w-4xl` and subheads at `max-w-2xl` — so that measure stays readable even
though the shell is wide. The layout must hold without horizontal scroll at
360px.

Navigation is a fixed 64px bar. Any content that could pass beneath it accounts
for that height in its own top padding rather than relying on a global offset.

## Elevation & Depth

**This system is nearly flat by doctrine.** Depth is communicated through tonal
layering — Void → Slate Panel → Hairline border — not through drop shadows. A
card is "above" the page because it is lighter and outlined, not because it casts.

The one sanctioned exception is the product mockup, which may carry a wide,
very-low-opacity Arc Violet bloom to lift it off the canvas and mark it as the
page's focal object.

### Shadow Vocabulary

- **Focal bloom** (`box-shadow: 0 0 80px -20px rgba(94, 92, 230, 0.28)`): The
  hero product mockup only. Never on cards, buttons, or nav.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. If an element needs to
feel raised, change its background one tonal step and give it a hairline border
before reaching for a shadow.

## Shapes

Corners are consistently soft but never pill-like, except where a shape is meant
to read as a token. Interactive controls and cards use 6–12px radii (`rounded-md`
for buttons, `rounded-xl` for the mockup shell). Chips, badges, avatars, and
status dots go fully round (`rounded-full`) — roundness is the signal that an
element is a *token* rather than a *surface*.

Borders are always exactly 1px and always Hairline. There is no 2px border
anywhere in the system; emphasis is never expressed by thickening a stroke.

## Components

### Buttons

- **Shape:** Softly rounded (6–8px, `rounded-md`). Never pill-shaped.
- **Primary:** Arc Violet fill (#5E5CE6) with white text, 12px/24px padding,
  medium weight.
- **Hover / Focus:** Background steps down to Arc Violet Deep (#4B49D6) over
  ~150ms. Focus shows a 2px Arc Violet Lifted ring, offset 2px from the Void.
- **Secondary:** Transparent with a Hairline border and Bone text; hover fills to
  Slate Panel. Identical padding and radius to primary so the pair aligns
  optically when set side by side.

### Chips

- **Style:** Slate Panel background, Hairline border, fully round, Ash text at
  label size. Used for announcement pills and metadata tags.
- **State:** Static by default. A chip that is interactive must gain a hover
  background step, otherwise it must not look clickable.

### Cards / Containers

- **Corner Style:** 12px (`rounded-xl`) for large containers, 8px for issue-card
  scale elements.
- **Background:** Slate Panel on Void.
- **Shadow Strategy:** None — see Elevation & Depth.
- **Border:** 1px Hairline, always.
- **Internal Padding:** 24px for content cards, 12px for dense list items.

### Navigation

Fixed, 64px tall, transparent over the hero at rest. On scroll it acquires a
translucent Void background (80% with backdrop blur) and a Hairline bottom
border. Links are Ash at title size, transitioning to Bone on hover over ~150ms.
The mobile treatment collapses links into a Slate Panel panel that slides down
beneath the bar.

### Signature Component: The Product Mockup

A browser-chrome-style container (12px radius, Hairline border, `overflow-hidden`)
rendered entirely in markup — no raster or vector image assets. It carries the
Focal bloom, and it is the only element on the page permitted to do so. Inside,
product UI is rendered at reduced fidelity: real structure, plausible copy,
tonal-step status indicators, and initial-based avatars in flat circles.

## Do's and Don'ts

### Do:

- **Do** use `#7D7BFF` for any accent-colored text or icon; reserve `#5E5CE6` for fills.
- **Do** express depth as a tonal step plus a 1px `#232326` border.
- **Do** set every mono label uppercase at 0.75rem with +0.08em tracking, in Ash.
- **Do** tighten tracking to -0.02em on any type above 48px.
- **Do** build product mockups from markup so they cost nothing at LCP.
- **Do** degrade every motion to a fade under `prefers-reduced-motion`.

### Don't:

- **Don't** introduce a second accent hue, a gradient mesh, or a glass-morphic panel.
- **Don't** place `#5E5CE6` behind body-size text, or as body-size text.
- **Don't** use a drop shadow on a card, button, or the nav bar.
- **Don't** let Arc Violet appear twice in one viewport.
- **Don't** set prose in Geist Mono.
- **Don't** thicken a border past 1px to signal emphasis.
- **Don't** fabricate customer names, logos, quotes, headshots, or pricing — see
  PRODUCT.md's Evidence on Hand.
