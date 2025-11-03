// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.5 }}
      className="group relative rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-sm
                 backdrop-blur-sm transition-all duration-300
                 hover:shadow-lg hover:shadow-indigo-500/10
                 dark:border-neutral-700 dark:bg-neutral-900/60"
    >
      {/* soft ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-indigo-500/0
                      transition-all duration-300 group-hover:ring-8 group-hover:ring-indigo-500/10" />

      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mt-1 text-gray-700 dark:text-gray-300">{description}</p>

      {tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-700
                         dark:border-neutral-700 dark:text-gray-300"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {link && (
        <p className="mt-3">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            View project
          </a>
        </p>
      )}
    </motion.article>
  );
}
