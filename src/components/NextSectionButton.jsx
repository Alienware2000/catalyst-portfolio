import { AnimatePresence, motion } from "framer-motion";

export default function NextSectionButton({ href, label = "Next section", show = true }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={href}
          aria-label={label}
          className="group absolute inset-x-0 bottom-10 mx-auto flex h-10 w-10 items-center justify-center
                     rounded-full ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-sm
                     text-gray-700 dark:text-gray-300 hover:text-white"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-y-0.5">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
