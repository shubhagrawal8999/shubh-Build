
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'shubh.build — AI automations & products',
  description: 'Personal engineering log and product workshop of Shubh Agrawal.',
  metadataBase: new URL('https://shubh.build'),
  openGraph: {
    title: 'shubh.build',
    description: 'AI automations, agents, and products built in the open.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-workshop-950 text-workshop-100 font-sans antialiased selection:bg-accent/30 selection:text-workshop-50">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
