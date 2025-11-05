/**
 * Section Component
 * Simple section wrapper with title and content
 * Handles scroll animations and spacing
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ id, title, children, ambient = false, full = false, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${full ? "min-h-[85vh] flex flex-col" : "mt-20"} scroll-mt-24 ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      {/* Subtle ambient glow for certain sections */}
      {ambient && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="mx-auto h-[520px] max-w-5xl rounded-[2rem]
                          bg-gradient-to-b from-transparent via-slate-100/2 to-transparent
                          dark:via-slate-900/4 blur-3xl" />
        </div>
      )}

      {/* Section title - enhanced formatting */}
      {title && (
        <motion.h2
          id={id ? `${id}-title` : undefined}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-2xl sm:text-3xl font-medium tracking-tight
                     text-slate-900 dark:text-slate-100
                     relative inline-block
                     after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0
                     after:w-12 after:h-[1px] after:bg-slate-900/20 dark:after:bg-slate-100/20"
        >
          {title}
        </motion.h2>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className={full ? "flex-1 flex flex-col" : ""}
      >
        {children}
      </motion.div>
    </section>
  );
}
