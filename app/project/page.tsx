
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <p className="font-mono text-sm text-accent mb-4">shubh.build</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-workshop-100 mb-6 leading-tight">
          I build AI automations<br className="hidden md:block" /> and products that solve real problems.
        </h1>
        <p className="text-lg text-workshop-400 max-w-2xl leading-relaxed mb-8">
          19, solo founder, Maharashtra. I make n8n workflows, AI agents, and EdTech tools. 
          This site is my workshop log — not a resume, not a trophy case. 
          If you want to know why I built something, how it failed, and what I changed my mind about, it&apos;s all here.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 rounded-lg bg-workshop-100 px-5 py-2.5 text-sm font-medium text-workshop-950 hover:bg-accent transition-colors"
          >
            See what I&apos;ve built <ArrowRight size={16} />
          </Link>
          <Link
            href="/writing/"
            className="inline-flex items-center gap-2 rounded-lg border border-workshop-700 px-5 py-2.5 text-sm font-medium text-workshop-300 hover:border-workshop-500 hover:text-workshop-100 transition-colors"
          >
            Read my writing
          </Link>
        </div>
      </section>

      {/* 3D Floating Element */}
      <section className="py-12 flex justify-center">
        <div className="perspective-1000">
          <div className="preserve-3d relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl border border-workshop-800 bg-workshop-900/30 preserve-3d rotate-y-12 rotate-x-12 shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-5xl font-bold text-workshop-700 mb-2">47</div>
                <div className="text-xs text-workshop-500 uppercase tracking-widest">Workflows Running</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-accent/20 bg-accent/5 preserve-3d -rotate-y-6 -rotate-x-6 translate-z-20" />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-workshop-100">Latest Builds</h2>
          <Link href="/projects/" className="text-sm text-workshop-400 hover:text-accent transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Writing Teaser */}
      <section className="py-20 border-t border-workshop-800/60">
        <h2 className="text-2xl font-bold text-workshop-100 mb-8">Recent Writing</h2>
        <div className="space-y-6">
          <Link href="/writing/why-i-build-in-public/" className="group block">
            <article className="rounded-xl border border-workshop-800 bg-workshop-900/30 p-6 hover:border-workshop-700 transition-colors">
              <p className="font-mono text-xs text-workshop-500 mb-2">2026-07-15</p>
              <h3 className="text-lg font-semibold text-workshop-100 group-hover:text-accent transition-colors mb-2">
                Why I Build in Public (Even When It&apos;s Embarrassing)
              </h3>
              <p className="text-sm text-workshop-400">Shipping half-baked projects feels vulnerable. That&apos;s exactly why it works.</p>
            </article>
          </Link>
        </div>
      </section>
    </div>
  )
}
