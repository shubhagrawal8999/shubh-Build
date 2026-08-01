
import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link href="/writing/" className="inline-flex items-center gap-2 text-sm text-workshop-500 hover:text-workshop-300 mb-8 transition-colors">
        <ArrowLeft size={16} /> All writing
      </Link>

      <article>
        <header className="mb-10">
          <p className="font-mono text-xs text-workshop-500 mb-3">{post.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-workshop-100 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-workshop-400">{post.excerpt}</p>
        </header>

        <div className="prose prose-invert prose-workshop max-w-none">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-workshop-300 leading-relaxed mb-6 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
