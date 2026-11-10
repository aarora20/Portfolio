import { useCallback, useEffect, useState } from "react";
import { useTheme, type Theme } from "./hooks/useTheme";
import { Nav } from "./components/Nav";
import { Terminal } from "./components/Terminal";
import { CommandPalette } from "./components/CommandPalette";
import { About, Contact, Experience, Projects } from "./components/Sections";
import { StatusBar } from "./components/StatusBar";
import { Reveal } from "./components/Reveal";
import { profile } from "./data/content";

export default function App() {
  const { theme, setTheme, toggle } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onTheme = useCallback(
    (next: Theme | "toggle") => {
      if (next === "toggle") toggle();
      else setTheme(next);
    },
    [setTheme, toggle]
  );

  // ⌘K / Ctrl+K toggles the palette.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Track which section is in view, for the status bar "path".
  useEffect(() => {
    const ids = ["home", "about", "experience", "projects", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen pb-10">
      <div className="bg-grid" aria-hidden />
      <Nav
        theme={theme}
        onToggle={toggle}
        onOpenPalette={() => setPaletteOpen(true)}
        onNavigate={navigate}
      />

      {/* Hero */}
      <section
        id="home"
        className="mx-auto w-full max-w-content px-6 pb-8 pt-16 sm:pt-24"
      >
        <Reveal>
          <p className="font-mono text-sm text-accent">{profile.greeting}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name}.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Terminal onTheme={onTheme} onNavigate={navigate} />
          </div>
        </Reveal>
      </section>

      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto w-full max-w-content px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React · TypeScript · Tailwind</span>
        </div>
      </footer>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={navigate}
        onToggleTheme={toggle}
        theme={theme}
      />

      <StatusBar theme={theme} activeSection={activeSection} />
    </div>
  );
}
