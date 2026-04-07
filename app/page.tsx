import { projects } from "@/lib/data";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <div className="min-h-full font-sans">
      <main className="mx-auto max-w-4xl px-6">
        <Header />
        <ResumeSection />

        <section className="pb-24">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[...projects].sort((a, b) => a.order - b.order).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
