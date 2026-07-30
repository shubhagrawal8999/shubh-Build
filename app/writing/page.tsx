import Link from "next/link";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export default function WritingPage() {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Writing</p>
      <h1 className="mt-3 text-5xl font-black">Notes from the build log</h1>
      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link className="block rounded-3xl bg-white/75 p-6 shadow-soft transition hover:-translate-y-1" href={`/writing/${post.slug}`} key={post.slug}>
            <p className="text-sm text-slate-500">{formatDate(post.date)} · {post.readingTime}</p>
            <h2 className="mt-3 text-2xl font-bold">{post.title}</h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
