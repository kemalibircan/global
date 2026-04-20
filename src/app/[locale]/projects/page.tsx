'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

const projectImages = [
  'https://picsum.photos/seed/ecommerce/600/400',
  'https://picsum.photos/seed/fintech/600/400',
  'https://picsum.photos/seed/aibot/600/400',
  'https://picsum.photos/seed/health/600/400',
  'https://picsum.photos/seed/saas/600/400',
  'https://picsum.photos/seed/logistics/600/400',
]

const projectColors = ['#00D4FF', '#7B2FBE', '#00D4FF', '#7B2FBE', '#00D4FF', '#7B2FBE']

const allCategories = {
  tr: ['Tümü', 'E-Ticaret', 'Fintech', 'Yapay Zeka', 'Sağlık', 'SaaS', 'Lojistik'],
  ar: ['الكل', 'التجارة الإلكترونية', 'التكنولوجيا المالية', 'الذكاء الاصطناعي', 'الرعاية الصحية', 'البرمجيات كخدمة', 'اللوجستيات'],
  en: ['All', 'E-Commerce', 'Fintech', 'AI Integration', 'Healthcare', 'SaaS', 'Logistics'],
}

export default function ProjectsPage() {
  const { t, locale } = useLocale()
  const p = t.pages.projects
  const projects = p.projectItems

  return (
    <main className="min-h-screen bg-dark pt-32 pb-24 px-6">
      {/* Glow orbs */}
      <div className="absolute top-40 left-1/4 w-96 h-96 rounded-full bg-neon-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-80 h-80 rounded-full bg-violet/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-white/40 hover:text-neon-blue text-sm mb-12 transition-colors duration-300 group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {p.backToHome}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">Portfolio</span>
          </div>
          <h1 className="font-display font-black text-white mb-4 text-5xl md:text-7xl">
            {p.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{p.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">{p.subtitle}</p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link href={`/${locale}/projects/${project.slug}`} className="group block" data-cursor-hover>
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={projectImages[i]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${projectColors[i]}20`, color: projectColors[i], border: `1px solid ${projectColors[i]}30` }}>
                      {project.tag}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                    style={{ background: `linear-gradient(135deg, ${projectColors[i]}CC, rgba(123,47,190,0.85))` }}>
                    <span className="text-white font-semibold flex items-center gap-2 border-b border-white/50 pb-1">
                      {p.viewDetail}
                    </span>
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <span className="text-white/30 text-xs tracking-widest uppercase">{project.category}</span>
                  <h3 className="font-display font-bold text-white text-xl mt-1 group-hover:text-neon-blue transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
