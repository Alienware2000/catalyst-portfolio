// src/components/Hero.jsx
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import NextSectionButton from "./NextSectionButton.jsx";
import Typewriter from "./Typewriter.jsx";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[90vh] grid place-content-center text-center"
    >
      {/* soft glow (kept subtle) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full
                     bg-indigo-500/10 blur-3xl dark:bg-indigo-400/15"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-2"
      >
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          <Typewriter text="David Antwi" speed={45} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-lg sm:text-xl text-gray-600 dark:text-gray-300"
        >
          I build ML-powered tools, embedded systems, and clean web apps.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.45, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-600 dark:text-gray-400"
        >
          Yale EECS student and Catalyst Mentor working across AI/ML, robotics, and modern frontend.
          Recent work: an academic-lab matcher, a voice-journaling app, and wearable robotics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.45, ease: "easeOut" }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
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
        </motion.div>
      </motion.div>
      <NextSectionButton href="#projects" show={inView} />
    </section>
  );
}
