// src/components/Atmosphere.jsx
// A minimal, theme-aware background: soft vignette + faint grid.
// Remove this file or its usage if you don’t like it.

export default function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-50">
      {/* base vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-white/5" />
      
      {/* faint radial haze behind hero area */}
      <div className="absolute left-1/2 top-28 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl
                      bg-indigo-500/5 dark:bg-indigo-400/10" />

      {/* subtle grid lines, very low opacity */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-800 dark:text-gray-200"/>
      </svg>
    </div>
  );
}
