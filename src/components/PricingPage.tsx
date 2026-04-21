'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

interface PricingPageProps {
  type: 'web' | 'mobile' | 'social'
}

export default function PricingPage({ type }: PricingPageProps) {
  const { t, locale } = useLocale()
  const pkg = t.pages.packages[type]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-violet/10 blur-[160px] pointer-events-none" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-8">
            <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">{pkg.badge}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-black text-white text-4xl md:text-6xl mb-6 leading-[1.05]">
            {pkg.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">{pkg.subtitle}</motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pkg.plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-neon-blue/10 to-violet/10 border-2 border-neon-blue/30 shadow-[0_0_40px_rgba(0,212,255,0.1)]'
                    : 'glass border border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold text-dark bg-gradient-to-r from-neon-blue to-violet">
                      {pkg.popular}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-display font-black gradient-text">
                      {pkg.currency}{plan.price}
                    </span>
                  </div>
                  <span className="text-white/40 text-sm mt-1 block">/ {plan.period}</span>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium tracking-widest uppercase text-white/30 mb-4">{pkg.features}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-white/70">
                        <svg className="w-5 h-5 flex-shrink-0 text-neon-blue mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${locale}/contact`}
                  className={`mt-8 block w-full py-4 rounded-full text-center text-sm font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'text-dark hover:opacity-90 hover:scale-[1.02]'
                      : 'text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/10 hover:border-neon-blue'
                  }`}
                  style={plan.highlighted ? { background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' } : {}}
                  data-cursor-hover
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-violet/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-black text-white text-2xl md:text-4xl mb-4">
              {t.pages.about.ctaTitle}
            </h2>
            <p className="text-white/50 mb-8 text-lg">{t.pages.about.ctaText}</p>
            <Link href={`/${locale}/contact`}
              className="inline-block px-10 py-4 rounded-full font-semibold text-dark text-sm hover:opacity-90 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
              data-cursor-hover>
              {t.pages.about.ctaButton}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
