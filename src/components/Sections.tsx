import { Reveal } from "./Reveal";
import { experience, facts, profile, projects, socials } from "../data/content";

/* Small shared building blocks ------------------------------------------ */

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
      <span className="text-accent">{n}</span>
      <span className="text-accent">//</span>
      {children}
    </div>
  );
}

function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-content scroll-mt-24 px-6 py-8 sm:py-10"
    >
      {children}
    </section>
  );
}

/* About ------------------------------------------------------------------ */

export function About() {
  return (
    <Section id="about">
      <SectionLabel n="01">about</SectionLabel>
      <div className="grid items-start gap-10 md:grid-cols-[1fr_300px]">
        <div>
          <Reveal>
            <p className="max-w-[34ch] text-2xl font-medium leading-snug sm:text-3xl">
              {profile.about}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              {profile.outside}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <dl className="rounded-xl border border-border bg-surface p-5 font-mono text-sm">
            {facts.map((f) => (
              <div
                key={f.key}
                className="flex items-center justify-between gap-4 py-1.5"
              >
                <dt className="text-accent">{f.key}</dt>
                <dd className="text-right text-fg">
                  {f.key === "status" ? (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-accent">
                      {f.value}
                    </span>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

/* Experience ------------------------------------------------------------- */

export function Experience() {
  return (
    <Section id="experience">
      <SectionLabel n="02">experience</SectionLabel>
      <div className="relative pl-8">
        <div className="absolute bottom-3 left-[6px] top-3 w-px bg-border" />
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <div
              className={`relative ${
                i < experience.length - 1 ? "pb-7" : ""
              }`}
            >
              <span className="absolute -left-[26px] top-[7px] h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <div className="mt-3 space-y-2">
                {job.roles.map((r) => (
                  <div
                    key={r.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5"
                  >
                    <span className="text-[15px] text-fg">{r.title}</span>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {r.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* Projects --------------------------------------------------------------- */

export function Projects() {
  return (
    <Section id="projects">
      <SectionLabel n="03">projects</SectionLabel>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <article className="relative flex h-full flex-col rounded-xl border border-border bg-surface p-6">
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                </div>
                {p.year && (
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 font-mono text-xs">
                {p.links?.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* Contact ---------------------------------------------------------------- */

export function Contact() {
  return (
    <Section id="contact">
      <SectionLabel n="04">contact</SectionLabel>
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
          Let's talk.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Open to new roles and interesting problems. The fastest way to reach
          me is below.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
