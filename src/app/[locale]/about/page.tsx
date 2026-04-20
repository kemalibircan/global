'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

const avatarGradients = [
  'from-neon-blue to-violet',
  'from-violet to-pink-500',
  'from-emerald-400 to-neon-blue',
  'from-orange-400 to-violet',
  'from-neon-blue to-emerald-400',
  'from-pink-500 to-neon-blue',
]

export default function AboutPage() {
  const { t, locale } = useLocale()
  const ab = t.pages.about
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-violet/10 blur-[160px] pointer-events-none" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(123,47,190,0.12) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-8">
            <span className="text-violet text-xs font-medium tracking-widest uppercase">{ab.badge}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-black text-white text-5xl md:text-7xl mb-6 leading-[1.05]">
            {ab.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{ab.title.split(' ').slice(-1)}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 text-xl max-w-2xl mx-auto">{ab.subtitle}</motion.p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="py-24 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-6">
                <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">{ab.storyBadge}</span>
              </div>
              <h2 className="font-display font-bold text-white text-4xl mb-6">{ab.storyTitle}</h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                {ab.storyText.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </motion.div>
            {/* Visual */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-display font-black gradient-text mb-1">{stat.value}{stat.suffix}</div>
                  <div className="text-white/40 text-xs tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-6">
              <span className="text-violet text-xs font-medium tracking-widest uppercase">{ab.valuesBadge}</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
              {ab.valuesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ab.values.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 + 0.2 }}
                className="glass glass-hover rounded-2xl p-6 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{val.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-6">
              <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">{ab.teamBadge}</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">{ab.teamTitle}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ab.team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 text-center group hover:border-neon-blue/20 transition-all duration-300"
                data-cursor-hover>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mx-auto mb-3 bg-gradient-to-br ${avatarGradients[i]}`}>
                  {member.avatar}
                </div>
                <p className="font-semibold text-white text-sm">{member.name}</p>
                <p className="text-white/40 text-xs mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-6">
              <span className="text-violet text-xs font-medium tracking-widest uppercase">{ab.timelineBadge}</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">{ab.timelineTitle}</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-violet to-transparent" />
            <div className="space-y-12">
              {ab.timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 text-right rtl:text-left">
                    {i % 2 === 0 ? (
                      <div className="glass rounded-xl p-4 text-right">
                        <p className="text-neon-blue font-display font-bold text-lg">{item.year}</p>
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-white/50 text-sm mt-1">{item.text}</p>
                      </div>
                    ) : <div />}
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-blue to-violet flex-shrink-0 z-10 border-2 border-dark" />
                  <div className="flex-1">
                    {i % 2 !== 0 ? (
                      <div className="glass rounded-xl p-4">
                        <p className="text-neon-blue font-display font-bold text-lg">{item.year}</p>
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-white/50 text-sm mt-1">{item.text}</p>
                      </div>
                    ) : <div />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-violet/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-black text-white text-3xl md:text-5xl mb-4">{ab.ctaTitle}</h2>
            <p className="text-white/50 mb-8 text-lg">{ab.ctaText}</p>
            <Link href={`/${locale}/contact`}
              className="inline-block px-10 py-4 rounded-full font-semibold text-dark text-sm hover:opacity-90 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
              data-cursor-hover>
              {ab.ctaButton}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
