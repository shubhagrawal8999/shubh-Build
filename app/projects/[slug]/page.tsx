import { notFound } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-3xl">
      <StatusBadge status={project.status} />
      <h1 className="mt-5 text-5xl font-black">{project.title}</h1>
      <p className="mt-6 text-xl leading-8 text-slate-600">{project.description}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-600 shadow">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
