import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Projects</p>
      <h1 className="mt-3 text-5xl font-black">Things I am building</h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600">
        A curated collection of products, prototypes, and operational systems.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
