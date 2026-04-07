import { Project } from "@/lib/data";
import ImageCarousel from "./ImageCarousel";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLink = project.links.length > 0;
  const primaryLink = project.links[0];

  const cardContent = (
    <div className="group flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden transition hover:border-zinc-400 hover:bg-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60 h-full">
      {project.images && project.images.length > 0 && (
        <ImageCarousel images={project.images} alt={project.name} layout={project.layout} />
      )}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-zinc-500 mt-0.5">
              {project.org} · {project.period}
            </p>
          </div>
          {project.links.length > 1 && (
            <div className="flex gap-2 shrink-0">
              {project.links.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-zinc-500 underline hover:text-zinc-900 dark:hover:text-white"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={primaryLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}
