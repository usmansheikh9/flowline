"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Calendar, CheckSquare, GitBranch, Home } from "lucide-react";

type Priority = "high" | "medium" | "low";

type Issue = {
  id: string;
  title: string;
  priority: Priority;
  assignee: string;
};

type Column = {
  name: string;
  issues: Issue[];
};

// Tonal steps from the existing token set, not a red/amber/green semantic
// palette. High and medium intentionally share a value: these are decorative
// markers inside an aria-hidden graphic, and reserving the accent for the CTA
// matters more than distinguishing them.
const PRIORITY_DOT: Record<Priority, string> = {
  high: "bg-muted",
  medium: "bg-muted",
  low: "bg-border",
};

const PRIORITY_LABEL: Record<Priority, string> = {
  high: "High priority",
  medium: "Medium priority",
  low: "Low priority",
};

const SIDEBAR_ITEMS = [
  { icon: Home, label: "Inbox", active: true },
  { icon: CheckSquare, label: "My issues", active: false },
  { icon: GitBranch, label: "Branches", active: false },
  { icon: Calendar, label: "Cycles", active: false },
];

const COLUMNS: Column[] = [
  {
    name: "Backlog",
    issues: [
      { id: "ENG-2847", title: "Fix auth token refresh race condition", priority: "high", assignee: "PR" },
      { id: "ENG-2839", title: "Drop legacy /v1 webhook payloads", priority: "low", assignee: "TO" },
      { id: "ENG-2831", title: "Add a retry budget to the sync worker", priority: "medium", assignee: "ML" },
      { id: "ENG-2822", title: "Investigate p99 latency on saved search", priority: "medium", assignee: "DW" },
      { id: "ENG-2814", title: "Migrate seat billing to usage records", priority: "low", assignee: "SM" },
    ],
  },
  {
    name: "In Progress",
    issues: [
      { id: "ENG-2803", title: "Real-time presence for shared views", priority: "high", assignee: "AV" },
      { id: "ENG-2798", title: "Rewrite the keyboard shortcut registry", priority: "medium", assignee: "PR" },
      { id: "ENG-2790", title: "Paginate the activity feed query", priority: "medium", assignee: "ML" },
      { id: "ENG-2781", title: "Harden SAML assertion validation", priority: "low", assignee: "TO" },
    ],
  },
  {
    name: "Done",
    issues: [
      { id: "ENG-2774", title: "Cache project permissions per session", priority: "medium", assignee: "DW" },
      { id: "ENG-2765", title: "Ship offline draft recovery", priority: "high", assignee: "SM" },
      { id: "ENG-2757", title: "Remove the duplicate index on issues", priority: "low", assignee: "AV" },
      { id: "ENG-2749", title: "Backfill archived sprint history", priority: "low", assignee: "PR" },
    ],
  },
];

export default function HeroMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 20px of total travel across the whole pass. Enough to feel buoyant,
  // small enough that it never reads as the page fighting the scroll.
  //
  // Written as a full translate3d string rather than framer's `y` shorthand:
  // `y` resolves through the main-thread style path, while translate3d
  // promotes the element to its own compositor layer so scrolling repaints
  // stay off the main thread.
  const transform = useTransform(
    scrollYProgress,
    (progress) => `translate3d(0, ${(10 - progress * 20).toFixed(2)}px, 0)`,
  );

  return (
    <motion.div
      ref={ref}
      style={
        prefersReducedMotion ? undefined : { transform, willChange: "transform" }
      }
      className="relative"
    >
      {/*
        The board is decoration, not content. Exposing a fake, non-interactive
        kanban to a screen reader would be noise, so it is hidden and replaced
        with one sentence describing what a sighted user sees.
      */}
      <p className="sr-only">
        A screenshot of the Flowline board, showing Backlog, In Progress, and
        Done columns filled with engineering issues.
      </p>

      <div
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(94,92,230,0.45)]"
      >
        {/* Browser chrome */}
        <div className="flex h-10 items-center gap-2 border-b border-border px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-3 font-mono text-[11px] text-muted">
            flowline.dev/team/eng/board
          </span>
        </div>

        {/*
          The board keeps desktop proportions and is cropped by the parent's
          overflow-hidden on narrow screens, the way a real screenshot would be.
          Reflowing it to three ~88px columns at 360px looked broken.
        */}
        <div className="flex min-w-[760px]">
          {/* Sidebar */}
          <div className="flex w-52 shrink-0 flex-col border-r border-border p-3">
            <div className="mb-4 flex items-center gap-2 rounded-md px-2 py-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-border text-[10px] font-medium text-foreground">
                E
              </span>
              <span className="text-sm font-medium text-foreground">Engineering</span>
            </div>

            {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm ${
                  active ? "bg-background text-foreground" : "text-muted"
                }`}
              >
                <Icon size={15} strokeWidth={1.5} />
                {label}
              </div>
            ))}
          </div>

          {/* Board */}
          <div className="grid min-w-0 flex-1 grid-cols-3 gap-4 p-4">
            {COLUMNS.map((column) => (
              <div key={column.name} className="min-w-0">
                <div className="mb-2.5 flex items-center gap-2 px-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-label text-muted">
                    {column.name}
                  </span>
                  <span className="font-mono text-[10px] text-muted">
                    {column.issues.length}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {column.issues.map((issue) => (
                    <div
                      key={issue.id}
                      className="rounded-lg border border-border bg-background p-2.5"
                    >
                      <div className="flex items-start gap-2">
                        <span
                          title={PRIORITY_LABEL[issue.priority]}
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${PRIORITY_DOT[issue.priority]}`}
                        />
                        <p className="min-w-0 text-xs leading-snug text-foreground">
                          {issue.title}
                        </p>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between pl-3.5">
                        <span className="font-mono text-[10px] text-muted">
                          {issue.id}
                        </span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-border text-[9px] font-medium text-foreground">
                          {issue.assignee}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
