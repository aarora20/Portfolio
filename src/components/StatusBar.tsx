import { useEffect, useState } from "react";
import type { Theme } from "../hooks/useTheme";

type Props = {
  theme: Theme;
  activeSection: string;
};

/**
 * A vim/tmux-style status line pinned to the bottom of the viewport.
 * Left: mode + current "path" (the section in view). Right: theme,
 * a faux git branch, and scroll progress.
 */
export function StatusBar({ theme, activeSection }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-8 items-stretch border-t border-border bg-surface font-mono text-xs">
      <div className="flex items-center bg-accent px-3 font-bold tracking-wide text-accent-fg">
        -- NORMAL --
      </div>
      <div className="flex items-center px-3 text-fg">
        ~/portfolio/{activeSection}
      </div>
      <div className="flex-1" />
      <div className="hidden items-center px-3 text-muted sm:flex">
        {theme === "dark" ? "dark" : "light"}
      </div>
      <div className="hidden items-center px-3 text-muted sm:flex">main*</div>
      <div className="flex items-center px-3 text-muted">{progress}%</div>
    </div>
  );
}
