export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: "Live" | "Building" | "Archived";
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "signal-lab",
    title: "Signal Lab",
    summary: "A workspace for turning fuzzy product ideas into validated experiments.",
    description:
      "Signal Lab combines lightweight research notes, hypothesis tracking, and launch checklists so builders can learn quickly without losing context.",
    status: "Building",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "craft-ledger",
    title: "Craft Ledger",
    summary: "A public log of small software decisions, tradeoffs, and lessons learned.",
    description:
      "Craft Ledger is a writing-first project that documents the messy middle of building polished interfaces and resilient systems.",
    status: "Live",
    stack: ["MDX", "Design Systems", "Automation"],
  },
  {
    slug: "tiny-ops",
    title: "Tiny Ops",
    summary: "Operational templates for solo founders and independent teams.",
    description:
      "Tiny Ops packages recurring workflows into simple playbooks for shipping updates, triaging issues, and keeping momentum visible.",
    status: "Building",
    stack: ["Notion", "APIs", "Workflows"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
