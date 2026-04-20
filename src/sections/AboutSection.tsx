'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Years of Excellence' },
  { value: 40, suffix: '+', label: 'Clients Worldwide' },
  { value: 12, suffix: '', label: 'Countries Reached' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (value / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-6 bg-dark relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/5 blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet/5 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20">
            <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">Why Choose Us</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                {/* Animated divider line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.12 + 0.3 }}
                  className="h-px bg-gradient-to-r from-neon-blue to-violet mb-6 origin-left"
                />
                <div className="text-5xl font-display font-black gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-display font-bold text-white mb-6">
              Built for the{' '}
              <span className="gradient-text">Future of Digital</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                We are GlobalDijital — a collective of strategists, engineers, and designers
                who believe that every brand deserves a world-class digital presence. We blend
                deep technical expertise with creative audacity to build products that don't just
                work, they <em className="text-white/90 not-italic">inspire</em>.
              </p>
              <p>
                From ambitious startups to Fortune 500 enterprises, we've partnered with
                organizations that refuse to be ordinary. Our process is collaborative, our
                execution is relentless, and our results speak for themselves.
              </p>
              <p>
                This isn't just about building websites. It's about building legacies.
              </p>
            </div>

            {/* Feature list */}
            <div className="mt-8 space-y-3">
              {[
                'Agile, iterative delivery model',
                'Dedicated team with full ownership',
                'Post-launch support & optimization',
                'Transparent reporting & communication',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-neon-blue to-violet flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
