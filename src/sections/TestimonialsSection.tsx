'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

export default function TestimonialsSection() {
  const { t } = useLocale()
  const testimonials = t.testimonials.items
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => setCurrent((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-12"
        >
          <span className="text-violet text-xs font-medium tracking-widest uppercase">{t.testimonials.badge}</span>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="glass rounded-3xl p-10 md:p-14 text-left w-full"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-white/85 text-xl md:text-2xl leading-relaxed font-light mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-dark"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonials[current].name}</p>
                  <p className="text-white/40 text-sm">{testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i} onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-neon-blue' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
