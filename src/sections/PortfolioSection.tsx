'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'NexCommerce',
    category: 'E-Commerce',
    description: 'Full-stack e-commerce redesign with AI-powered product recommendations and lightning-fast checkout.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    tag: 'Web Development',
    color: '#00D4FF',
  },
  {
    id: 2,
    title: 'FinFlow Dashboard',
    category: 'Fintech',
    description: 'Real-time financial analytics dashboard with live market data, portfolio tracking, and predictive modeling.',
    image: 'https://picsum.photos/seed/fintech/800/600',
    tag: 'UI/UX + Dev',
    color: '#7B2FBE',
  },
  {
    id: 3,
    title: 'Aria AI Assistant',
    category: 'AI Integration',
    description: 'Context-aware enterprise chatbot with GPT-4 backbone, multilingual support, and CRM integration.',
    image: 'https://picsum.photos/seed/aibot/800/600',
    tag: 'AI Integration',
    color: '#00D4FF',
  },
  {
    id: 4,
    title: 'MediSync',
    category: 'Healthcare',
    description: 'Patient-centric mobile health app with appointment scheduling, telemedicine, and health record management.',
    image: 'https://picsum.photos/seed/health/800/600',
    tag: 'Mobile App',
    color: '#7B2FBE',
  },
  {
    id: 5,
    title: 'LaunchPad SaaS',
    category: 'SaaS',
    description: 'Conversion-optimized landing page with A/B testing, dynamic pricing, and seamless onboarding flow.',
    image: 'https://picsum.photos/seed/saas/800/600',
    tag: 'Brand + Web',
    color: '#00D4FF',
  },
  {
    id: 6,
    title: 'TrackRoute',
    category: 'Logistics',
    description: 'Real-time logistics tracking platform with route optimization, fleet management, and driver analytics.',
    image: 'https://picsum.photos/seed/logistics/800/600',
    tag: 'Digital Strategy',
    color: '#7B2FBE',
  },
]

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-6">
            <span className="text-violet text-xs font-medium tracking-widest uppercase">Our Work</span>
          </div>
          <h2 className="font-display font-bold text-white mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A curated showcase of digital experiences we've crafted for ambitious brands worldwide.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 || i === 3 ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
              style={{ aspectRatio: i === 1 || i === 4 ? '4/3' : '4/3' }}
              data-cursor-hover
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Bottom content always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white/40 text-xs tracking-widest uppercase">{project.category}</span>
                <h3 className="font-display font-bold text-white text-xl mt-1">{project.title}</h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: `linear-gradient(135deg, ${project.color}CC, rgba(123,47,190,0.85))` }}
              >
                <p className="text-white/90 text-sm text-center px-8 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-white/50 pb-1">
                  View Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
