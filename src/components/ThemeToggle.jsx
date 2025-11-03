import { useEffect, useState } from "react";

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const initial = document.documentElement.classList.contains("dark");
  const [dark, setDark] = useState(initial);

  useEffect(() => {
    const root = document.documentElement.classList;
    if (dark) {
      root.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      aria-label="Toggle dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                 text-gray-600 hover:text-gray-900
                 dark:text-gray-300 dark:hover:text-white
                 ring-1 ring-transparent hover:ring-gray-300/60 dark:hover:ring-neutral-700/60
                 transition-colors"
    >
      <span className="relative block">
        {/* fade the icons cross-fade */}
        <SunIcon className={`h-5 w-5 transition-opacity duration-200 ${dark ? "opacity-0" : "opacity-100"}`} />
        <MoonIcon className={`h-5 w-5 absolute inset-0 transition-opacity duration-200 ${dark ? "opacity-100" : "opacity-0"}`} />
      </span>
    </button>
  );
}
