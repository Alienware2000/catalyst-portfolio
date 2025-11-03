export default function Section({ id, title, children, ambient = false, full = false, className = "" }) {
  return (
    <section
      id={id}
      className={`relative ${full ? "min-h-[85vh] grid content-start" : "mt-14"} scroll-mt-24 ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      {ambient && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="mx-auto h-[520px] max-w-5xl rounded-[2rem] bg-gradient-to-b
                          from-transparent via-black/5 to-transparent dark:via-white/5 blur-xl opacity-60" />
        </div>
      )}

      {title && (
        <h2 id={id ? `${id}-title` : undefined} className="mt-14 text-lg font-semibold tracking-tight">
          {title}
        </h2>
      )}

      <div className={title ? "mt-5" : ""}>{children}</div>
    </section>
  );
}
