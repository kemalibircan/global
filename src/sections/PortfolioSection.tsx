'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

const projectImages = [
  'https://picsum.photos/seed/ecommerce/800/600',
  'https://picsum.photos/seed/fintech/800/600',
  'https://picsum.photos/seed/aibot/800/600',
  'https://picsum.photos/seed/health/800/600',
  'https://picsum.photos/seed/saas/800/600',
  'https://picsum.photos/seed/logistics/800/600',
]
const projectColors = ['#00D4FF', '#7B2FBE', '#00D4FF', '#7B2FBE', '#00D4FF', '#7B2FBE']
const projectSlugs = ['nexcommerce', 'finflow', 'aria-ai', 'medisync', 'launchpad', 'trackroute']

export default function PortfolioSection() {
  const { t, locale } = useLocale()
  const p = t.portfolio
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-6">
            <span className="text-violet text-xs font-medium tracking-widest uppercase">{p.badge}</span>
          </div>
          <h2 className="font-display font-bold text-white mb-4">
            {p.title1} <span className="gradient-text">{p.title2}</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">{p.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
            >
              <Link
                href={`/${locale}/projects/${projectSlugs[i]}`}
                className="group relative rounded-2xl overflow-hidden cursor-pointer block"
                style={{ aspectRatio: '4/3' }}
                data-cursor-hover
              >
                <img src={projectImages[i]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${projectColors[i]}20`, color: projectColors[i], border: `1px solid ${projectColors[i]}30` }}
                  >
                    {project.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white/40 text-xs tracking-widest uppercase">{project.category}</span>
                  <h3 className="font-display font-bold text-white text-xl mt-1">{project.title}</h3>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: `linear-gradient(135deg, ${projectColors[i]}CC, rgba(123,47,190,0.85))` }}
                >
                  <p className="text-white/90 text-sm text-center px-8 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-white/50 pb-1">
                    {p.viewProject}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-neon-blue/40 text-sm font-medium transition-all duration-300 group"
            data-cursor-hover>
            {t.pages.projects.title}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
