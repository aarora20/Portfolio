/*
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME. This is the single place to update site content.
 *  Everything below is placeholder — swap in your real details.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Aryaman Arora",
  // Kicker shown above the name in the hero.
  greeting: "Hi, I'm 👋",
  // One-liner under the name — product-leaning, not a job title.
  tagline: "I turn fuzzy ideas into products people actually use.",
  location: "Toronto, Canada",
  // Main About paragraph.
  about:
    "I'm a University of Waterloo CS grad with a business specialization, " +
    "based in Toronto. I like turning fuzzy ideas into things people actually " +
    "use, and I enjoy the whole arc of a product: figuring out what to make, " +
    "making it, and making it feel good to use.",
  // Smaller "outside of work" line shown under the bio.
  outside:
    "Outside of work, you'll find me playing guitar, travelling, deep in a TV " +
    "series, or out at a concert or live game.",
  resumeUrl: "/resume.pdf", // drop a resume.pdf in /public, or link elsewhere
};

// Config-style key/value list shown beside the About paragraph.
// Keep values short — they render in a monospace panel.
export const facts: { key: string; value: string }[] = [
  { key: "location", value: "Toronto, CA" },
  { key: "focus", value: "product · engineering" },
  { key: "education", value: "Waterloo CS + Business" },
];

export type Social = {
  label: string;
  href: string;
  // shown by the `contact` terminal command
  handle: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/aarora20", handle: "@aarora20" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryaman02/",
    handle: "in/aryaman02",
  },
  {
    label: "Email",
    href: "mailto:aryaman.arora@uwaterloo.ca",
    handle: "aryaman.arora@uwaterloo.ca",
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  year?: string;
  // Per-project links with their own labels, e.g. "overview", "demo",
  // "live", "source". Rendered in order.
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "QuestFlow",
    blurb:
      "A course-planning app for University of Waterloo students that builds " +
      "conflict-free schedules. A constraint solver (OptaPlanner) eliminates " +
      "overlaps, minimizes gaps, and compresses days off, with drag-and-drop " +
      "editing, fuzzy course search, and shareable schedules.",
    tags: ["Kotlin", "Jetpack Compose", "OptaPlanner", "Client–Server"],
    year: "2023",
    links: [
      { label: "overview", url: "https://aarora20.github.io/CalendarApp/" },
      { label: "source", url: "https://github.com/aarora20/CalendarApp" },
    ],
  },
  {
    name: "Fit4Me",
    blurb:
      "A full-stack Android fitness app: browse and build workouts, log sets, " +
      "reps, and personal records, and get matched with training partners " +
      "through a strategy-based scoring engine and real-time chat.",
    tags: ["Kotlin", "Jetpack Compose", "Node.js", "TypeScript", "PostgreSQL"],
    year: "2025",
    links: [
      { label: "demo", url: "https://www.youtube.com/watch?v=_2dJb6zYpTw" },
      { label: "source", url: "https://github.com/grace-ful/cs446-team-project" },
    ],
  },
  {
    name: "Biquadris",
    blurb:
      "A two-player, turn-based twist on Tetris, written in C++ around a clean " +
      "object-oriented design: Observer-driven rendering, polymorphic block " +
      "types, and pluggable difficulty levels.",
    tags: ["C++", "OOP", "Design Patterns"],
    year: "2022",
    links: [{ label: "source", url: "https://github.com/aarora20/Biquadris" }],
  },
];

export type Role = { title: string; period: string };

// A company with one or more roles. Multiple roles = progression at one
// place (most recent role first).
export type Job = {
  company: string;
  roles: Role[];
};

// Most recent first.
export const experience: Job[] = [
  {
    company: "Vivid Seats",
    roles: [
      { title: "Software Quality Engineer I", period: "Oct 2025 – Present" },
      {
        title: "Software Quality Engineering Intern",
        period: "Jan 2025 – Apr 2025",
      },
    ],
  },
  {
    company: "Stratemis HR Technologies",
    roles: [
      { title: "Software Engineer Intern", period: "May 2024 – Aug 2024" },
    ],
  },
  {
    company: "Carta",
    roles: [
      { title: "Product Manager Intern", period: "Sep 2022 – Dec 2022" },
    ],
  },
  {
    company: "LifeLabs",
    roles: [
      {
        title: "Consumer Platform and Partnership Specialist Intern",
        period: "Jan 2022 – Apr 2022",
      },
    ],
  },
  {
    company: "Waterloo × Microsoft Accelerate",
    roles: [
      { title: "Project Team Member", period: "May 2021 – Aug 2021" },
    ],
  },
];

// Tech shown as a simple, readable list (no logo-soup like the old template).
export const stack: string[] = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
];
