/**
 * Outbound destinations for the page's primary actions.
 *
 * This is a portfolio build with no signup backend, so the conversion points
 * route to email rather than to dead anchors. Change CONTACT_EMAIL here and
 * every CTA on the page follows.
 */
export const CONTACT_EMAIL = "usmansheikhwork@gmail.com";

/** Primary CTAs: "Start free" and "View demo". */
export const DEMO_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Flowline%20Demo%20Request`;

/** Pricing's Enterprise tier, so enquiries arrive pre-labelled. */
export const SALES_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Flowline%20Enterprise%20Enquiry`;
