import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Project not found
        </h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          The project you’re looking for doesn’t exist or its page hasn’t been created yet.
        </p>
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Hero */}
      <header className="mb-12">
        <h1 className="mb-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {project.title}
        </h1>
        <p className="mb-6 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        {/* Primary actions */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-white/20 dark:border-white/10
                       text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100
                       hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-200"
          >
            View on GitHub
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-lg border border-white/20 dark:border-white/10
                       text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100
                       hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-200"
          >
            Live demo (coming soon)
          </a>
        </div>
        {/* Tech tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Sections (visual hierarchy & spacing) */}
      {projectDetails[slug] ? (
        <div className="space-y-12">
          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Project Overview</h2>
            <p className="text-slate-600 dark:text-slate-400">{projectDetails[slug].overview}</p>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-slate-100">Challenge</h3>
              <p className="text-slate-600 dark:text-slate-400">{projectDetails[slug].challenge}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-slate-100">Solution</h3>
              <p className="text-slate-600 dark:text-slate-400">{projectDetails[slug].solution}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Method & Implementation</h2>
            <p className="text-slate-600 dark:text-slate-400">{projectDetails[slug].method}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Results & Performance</h2>
            <p className="text-slate-600 dark:text-slate-400">{projectDetails[slug].results}</p>
            {/* Inline stat chips to highlight key results */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300">
                50 Hz streaming
              </span>
              <span className="rounded-full bg-white/5 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300">
                Low drift
              </span>
              <span className="rounded-full bg-white/5 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300">
                Multi‑node
              </span>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Ongoing Work</h2>
            <p className="text-slate-600 dark:text-slate-400">{projectDetails[slug].ongoing}</p>
          </section>
        </div>
      ) : (
        <div className="space-y-12">
          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Project Overview</h2>
            <p className="text-slate-600 dark:text-slate-400">
              High‑level summary of the project’s purpose, scope, and audience.
            </p>
          </section>
          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-slate-100">Challenge</h3>
              <p className="text-slate-600 dark:text-slate-400">What problem were we solving?</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-slate-100">Solution</h3>
              <p className="text-slate-600 dark:text-slate-400">A concise look at the core idea and approach.</p>
            </div>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Method & Implementation</h2>
            <p className="text-slate-600 dark:text-slate-400">Stack, frameworks, and how it fits together.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-medium text-slate-900 dark:text-slate-100">Results & Performance</h2>
            <p className="text-slate-600 dark:text-slate-400">Outcomes, metrics, and performance notes.</p>
          </section>
        </div>
      )}

      {/* Footer nav with divider for clearer separation */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}


