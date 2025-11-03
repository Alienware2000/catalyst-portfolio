import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6">
        {/* 48px row; compact and balanced */}
        <div className="grid h-12 grid-cols-3 items-center">
          {/* left spacer keeps center perfectly centered */}
          <div className="justify-self-start" />

          {/* centered links */}
          <ul
            className="justify-self-center flex items-center gap-6 text-sm"
            aria-label="Primary"
          >
            {[
              { href: "#projects", label: "Projects" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-2 py-1.5 rounded-lg text-gray-600 dark:text-gray-300
                             hover:text-gray-900 dark:hover:text-white
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                             transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* theme toggle on the right */}
          <div className="justify-self-end">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* ultra-thin, full-bleed divider (no 'bar' look) */}
      <div className="h-px w-full bg-gradient-to-r
                      from-transparent via-black/10 to-transparent
                      dark:via-white/10" />
    </header>
  );
}
