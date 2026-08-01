
import { posts } from '@/data/posts'
import Link from 'next/link'

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-workshop-100 mb-4">Writing</h1>
      <p className="text-workshop-400 mb-12 max-w-xl">
        Long-form pieces on building, psychology, persuasion, and self-understanding. 
        A public journal with structure.
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/writing/${post.slug}/`} className="group block">
            <article className="rounded-xl border border-workshop-800 bg-workshop-900/30 p-6 hover:border-workshop-700 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-workshop-500">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-workshop-100 group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-workshop-400 leading-relaxed">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
