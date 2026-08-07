"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // useScroll rather than a scroll listener: framer batches this against rAF
  // instead of firing a React setState on every scroll frame.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ease-subtle ${
        isScrolled || isMenuOpen
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-sm text-base font-semibold tracking-tight text-foreground"
        >
          {/* Neutral mark: the accent is reserved for the CTA. */}
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-foreground" />
          Flowline
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
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

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#login"
            className="rounded-sm text-sm text-muted transition-colors duration-150 ease-subtle hover:text-foreground"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-[background-color,transform] duration-150 ease-subtle hover:bg-accent-hover active:scale-[0.97]"
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-md p-2 text-foreground transition-colors duration-150 ease-subtle hover:bg-surface md:hidden"
        >
          {isMenuOpen ? (
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
            }}
            // Faster on the way out: the user is deciding on open, and the
            // system is just getting out of the way on close.
            exit={{
              opacity: 0,
              y: -8,
              transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] },
            }}
            className="border-t border-border bg-surface md:hidden"
          >
            <ul className="flex flex-col px-6 py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-sm py-3 text-sm text-muted transition-colors duration-150 ease-subtle hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-border px-6 py-4">
              <a
                href="#login"
                onClick={closeMenu}
                className="rounded-sm py-1 text-sm text-muted transition-colors duration-150 ease-subtle hover:text-foreground"
              >
                Log in
              </a>
              <a
                href="#signup"
                onClick={closeMenu}
                className="rounded-md bg-accent px-4 py-2 text-center text-sm font-medium text-white transition-[background-color,transform] duration-150 ease-subtle hover:bg-accent-hover active:scale-[0.97]"
              >
                Start free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
