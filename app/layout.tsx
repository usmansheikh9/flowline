import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted variable fonts. next/font inlines the @font-face + size-adjust
// fallback metrics at build time, so there is no network request and no CLS.
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const TITLE = "Flowline: project tracking built for engineering teams";

// Social card copy, mirroring the hero so the share preview matches the page.
const SOCIAL_TITLE = "Flowline — Project management that moves as fast as your team";
const SOCIAL_DESCRIPTION =
  "Flowline combines issue tracking, sprints, and roadmaps in one fast, keyboard-driven tool built for engineering teams.";

export const metadata: Metadata = {
  // Placeholder origin. Swap for the custom domain once one is attached;
  // every relative metadata URL resolves against this.
  metadataBase: new URL("https://flowline-landing.vercel.app"),
  title: {
    default: TITLE,
    template: "%s | Flowline",
  },
  description: SOCIAL_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Flowline",
    url: "/",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
  },
  twitter: {
    // No og:image yet: without a real screenshot, X falls back to a plain
    // large-card treatment rather than rendering a broken image slot.
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:ring-1 focus:ring-border"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
