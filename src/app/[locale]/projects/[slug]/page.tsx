'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

const projectImages = [
  'https://picsum.photos/seed/ecommerce/1200/700',
  'https://picsum.photos/seed/fintech/1200/700',
  'https://picsum.photos/seed/aibot/1200/700',
  'https://picsum.photos/seed/health/1200/700',
  'https://picsum.photos/seed/saas/1200/700',
  'https://picsum.photos/seed/logistics/1200/700',
]
const slugOrder = ['nexcommerce', 'finflow', 'aria-ai', 'medisync', 'launchpad', 'trackroute']

interface PageProps {
  params: { locale: string; slug: string }
}

// This is a client page that reads its slug from the URL
export default function ProjectDetailPage({ params }: PageProps) {
  const { t, locale } = useLocale()
  const projects = t.pages.projects.projectItems
  const backLabel = t.pages.projects.backToHome
  const projectsLabel = t.nav.work

  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  const idx = slugOrder.indexOf(project.slug)
  const color = idx % 2 === 0 ? '#00D4FF' : '#7B2FBE'
  const imgSrc = idx >= 0 ? projectImages[idx] : projectImages[0]

  return (
    <main className="min-h-screen bg-dark pt-28 pb-24">
      {/* Hero image */}
      <div className="relative h-[55vh] overflow-hidden">
        <img src={imgSrc} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-transparent" />
        {/* Category pill */}
        <div className="absolute top-8 left-8">
          <span className="px-4 py-2 rounded-full text-sm font-semibold glass"
            style={{ color, border: `1px solid ${color}40` }}>
            {project.tag}
          </span>
        </div>
        <div className="absolute bottom-12 left-0 right-0 px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display font-black text-white text-5xl md:text-7xl mb-3"
          >
            {project.title}
          </motion.h1>
          <p className="text-white/50 text-lg">{project.category}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        {/* Back link */}
        <Link href={`/${locale}/projects`} className="inline-flex items-center gap-2 text-white/40 hover:text-neon-blue text-sm mb-12 transition-colors group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform duration-300">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          {projectsLabel}
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-display font-bold text-white text-2xl mb-4 flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: color }} />
                Overview
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">{project.fullDescription}</p>
            </motion.section>

            {/* Challenge */}
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-display font-bold text-white text-2xl mb-4 flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: color }} />
                Challenge
              </h2>
              <div className="glass rounded-xl p-6 border-l-2" style={{ borderColor: color }}>
                <p className="text-white/70 leading-relaxed">{project.challenge}</p>
              </div>
            </motion.section>

            {/* Solution */}
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h2 className="font-display font-bold text-white text-2xl mb-4 flex items-center gap-3">
                <span className="w-8 h-px" style={{ background: color }} />
                Solution
              </h2>
              <div className="glass rounded-xl p-6 border-l-2" style={{ borderColor: '#7B2FBE' }}>
                <p className="text-white/70 leading-relaxed">{project.solution}</p>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Results */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white mb-4 text-lg">Results</h3>
              <div className="space-y-3">
                {project.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, #00D4FF, #7B2FBE)` }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white mb-4 text-lg">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
              <Link href={`/${locale}/contact`}
                className="block text-center py-3.5 rounded-xl font-semibold text-dark text-sm transition-all hover:opacity-90 hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
                data-cursor-hover>
                {t.contact.form.submit.replace(' →', '')} →
              </Link>
            </motion.div>
          </aside>
        </div>
      </div>
    </main>
  )
}
