
import Link from 'next/link'
import TiltCard from './TiltCard'
import StatusBadge from './StatusBadge'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}/`}>
      <TiltCard className="group relative h-full rounded-xl border border-workshop-800 bg-workshop-900/50 p-6 transition-colors hover:border-workshop-700 hover:bg-workshop-900">
        <div className="flex items-start justify-between mb-4">
          <StatusBadge status={project.status} />
          <ArrowUpRight size={16} className="text-workshop-600 group-hover:text-accent transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-workshop-100 mb-2">{project.name}</h3>
        <p className="text-sm text-workshop-400 leading-relaxed">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="text-xs font-mono text-workshop-500 bg-workshop-950/50 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </TiltCard>
    </Link>
  )
}
