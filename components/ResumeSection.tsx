import { education, experience, coursework } from "@/lib/data";

export default function ResumeSection() {
  return (
    <section id="resume" className="pb-20 flex scroll-mt-6 flex-col gap-4">
      {/* Education */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Education
        </h2>
        <div className="flex flex-col gap-3">
          {education.map((item) => (
            <div key={item.school}>
              <p className="text-base font-medium text-zinc-900 dark:text-white">
                {item.school}
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {item.degree}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {coursework.map((c) => (
            <span
              key={c}
              className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-0.5 text-sm text-zinc-600 dark:text-zinc-400"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <div key={`${job.org}-${job.role}`}>
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 min-w-0">
                  <p className="text-base font-medium text-zinc-900 dark:text-white">
                    {job.role}
                  </p>
                  <span className="text-zinc-400">·</span>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {job.org}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-600 whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 marker:text-zinc-400 dark:marker:text-zinc-600">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
