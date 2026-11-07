"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("gemologyx-theme");
    const initial: Theme =
      saved === "dark" || saved === "light"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("gemologyx-theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="gx-theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      <span className="sr-only">{theme === "light" ? "Dark theme" : "Light theme"}</span>
    </button>
  );
}
