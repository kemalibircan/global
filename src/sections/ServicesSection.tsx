'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: '⚡',
    title: 'Web Development',
    description: 'Blazing-fast, pixel-perfect web experiences built with Next.js, React, and modern tooling.',
    color: '#00D4FF',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that users love to engage with daily.',
    color: '#7B2FBE',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Human-centered design systems that balance aesthetics with frictionless usability.',
    color: '#00D4FF',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Embed intelligent automation, NLP, and ML models directly into your product workflows.',
    color: '#7B2FBE',
  },
  {
    icon: '🚀',
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps, market positioning, and go-to-market strategies that convert.',
    color: '#00D4FF',
  },
  {
    icon: '✦',
    title: 'Brand Identity',
    description: 'Cohesive visual identities, logos, and brand systems that command premium positioning.',
    color: '#7B2FBE',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-32 px-6 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-6"
          >
            <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-white mb-4"
          >
            Services That{' '}
            <span className="gradient-text">Move Brands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            We offer a full spectrum of digital services — from strategy to execution — 
            designed to transform your vision into a competitive advantage.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 + 0.3 }}
              className="group relative glass glass-hover rounded-2xl p-8 cursor-pointer overflow-hidden"
              data-cursor-hover
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}10 0%, transparent 60%)` }}
              />

              {/* Top border glow */}
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
              />

              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-white mb-3 text-lg group-hover:text-neon-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-neon-blue text-sm transition-colors duration-300">
                <span>Learn more</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
