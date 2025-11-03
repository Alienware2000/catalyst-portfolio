// src/components/Hero.jsx
import Typewriter from "./Typewriter.jsx";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[60vh] flex flex-col items-start justify-center gap-4"
    >
      {/* Optional soft glow (remove if you dislike it) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full
                     bg-indigo-500/10 blur-3xl dark:bg-indigo-400/15"
        />
      </div>

      {/* Name with typewriter */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        <Typewriter text="David Antwi" speed={45} />
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        I build ML-powered tools, embedded systems, and clean web apps.
      </p>

      {/* Short introductory paragraph */}
      <p className="max-w-2xl text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
        I’m a Yale EECS student and Catalyst Mentor. I work across AI/ML, robotics,
        and modern frontend—pairing solid engineering with simple, thoughtful design.
        Lately: academic-lab matching tools, a voice journaling app, and wearable robotics.
      </p>

      {/* Call-to-action buttons */}
      <div className="mt-2 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900
                     hover:bg-gray-100 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-100
                     dark:hover:bg-neutral-800 transition"
        >
          View projects
        </a>
        <a
          href="https://www.linkedin.com/in/david-antwi-b17727205/"
          className="rounded-md px-3 py-1.5 text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition"
        >
          Connect
        </a>
      </div>
    </section>
  );
}
