import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Independent builder</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-ink md:text-7xl">
            Designing useful software with care and momentum.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            shubh.build is a home for experiments, product notes, and the practical systems behind better launches.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-ink px-5 py-3 font-semibold text-white" href="/projects">
              Explore projects
            </Link>
            <Link className="rounded-full border border-slate-300 px-5 py-3 font-semibold" href="/writing">
              Read notes
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-soft">
          <p className="text-sm font-semibold text-slate-500">Current focus</p>
          <h2 className="mt-3 text-3xl font-black">Turning raw ideas into shipped artifacts.</h2>
          <p className="mt-4 text-slate-600">
            I care about fast feedback loops, calm interfaces, and clear writing that helps teams move.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Featured work</p>
            <h2 className="mt-2 text-3xl font-black">Projects</h2>
          </div>
          <Link className="font-semibold text-accent" href="/projects">All projects →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Latest writing</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link className="rounded-3xl bg-white/70 p-6 shadow-soft transition hover:-translate-y-1" href={`/writing/${post.slug}`} key={post.slug}>
              <p className="text-sm text-slate-500">{formatDate(post.date)} · {post.readingTime}</p>
              <h3 className="mt-3 text-2xl font-bold">{post.title}</h3>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
