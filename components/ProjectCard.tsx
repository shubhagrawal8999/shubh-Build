import Link from "next/link";
import type { Project } from "@/data/projects";
import StatusBadge from "./StatusBadge";
import TiltCard from "./TiltCard";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-4 text-slate-600">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {item}
          </span>
        ))}
      </div>
      <Link className="mt-6 inline-flex font-semibold text-accent" href={`/projects/${project.slug}`}>
        View project →
      </Link>
    </TiltCard>
  );
}
