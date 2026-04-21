'use client'

import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'
import { useEffect } from 'react'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: 'easeOut' })
    }
  }, [inView, count, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-display font-black gradient-text">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

export default function AboutSection() {
  const { t } = useLocale()
  const a = t.about
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Badge & Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-6"
          >
            <span className="text-violet text-xs font-medium tracking-widest uppercase">{a.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-white mb-6"
          >
            {a.title1}{' '}
            <span className="gradient-text">{a.title2}</span>
          </motion.h2>
        </div>

        {/* Team Image + Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Global Dijital Team"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['KB', 'LM', 'AH', 'PN'].map((initials, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-dark bg-gradient-to-br ${
                        ['from-neon-blue to-violet', 'from-violet to-pink-500', 'from-emerald-400 to-neon-blue', 'from-orange-400 to-violet'][i]
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">40+ Uzman Ekip</p>
                  <p className="text-white/40 text-xs">12 Ülkede Hizmet</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {a.stats.map((stat, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6 text-center group">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-white/40 text-sm tracking-wide mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Why Choose Us - Trust Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {a.manifesto.map((para, i) => (
              <p key={i} className="text-white/60 leading-relaxed mb-4 text-lg">{para}</p>
            ))}
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="space-y-4"
          >
            {a.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 glass rounded-xl p-4 group hover:border-neon-blue/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/20 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="text-neon-blue">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/70 font-medium">{feature}</span>
              </div>
            ))}

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { icon: '🔒', label: 'Güvenli Altyapı' },
                { icon: '⚡', label: 'Hızlı Teslimat' },
                { icon: '🏆', label: '150+ Başarılı Proje' },
              ].map((badge, i) => (
                <div key={i} className="glass rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <p className="text-white/50 text-xs">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
