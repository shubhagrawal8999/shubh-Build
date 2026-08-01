
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-workshop-100 mb-8">About</h1>
      
      <div className="space-y-6 text-workshop-300 leading-relaxed">
        <p>
          I&apos;m Shubh Agrawal, 19, based in Maharashtra, India. I&apos;m a solo founder and AI automation developer 
          building tools with n8n, Make.com, and LLM APIs.
        </p>
        <p>
          I&apos;m currently studying while building Zubhai and a few other experiments. Most of my work sits at the 
          intersection of AI agents, no-code automation, and education — because I believe the best way to learn 
          is to ship something that breaks in production.
        </p>
        <p>
          This site exists so I can remember what I built and why. If you want the polished version, I don&apos;t have one. 
          If you want the real reasoning, the failures, and the decisions I changed my mind about — it&apos;s all here.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-widest text-workshop-500">Contact</h2>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:shubh@zubhai.in" className="inline-flex items-center gap-2 rounded-lg border border-workshop-700 px-4 py-2 text-sm text-workshop-300 hover:border-workshop-500 hover:text-workshop-100 transition-colors">
            <Mail size={16} /> shubh@zubhai.in
          </a>
          <a href="https://linkedin.com/in/shubhagrawal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-workshop-700 px-4 py-2 text-sm text-workshop-300 hover:border-workshop-500 hover:text-workshop-100 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/shubhagrawal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-workshop-700 px-4 py-2 text-sm text-workshop-300 hover:border-workshop-500 hover:text-workshop-100 transition-colors">
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-xl border border-workshop-800 bg-workshop-900/30">
        <p className="text-sm text-workshop-500 font-mono">
          Currently: Building Zubhai v2, exploring voice AI, and trying to automate myself out of repetitive work.
        </p>
      </div>
    </div>
  )
}
