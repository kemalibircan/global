'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: "GlobalDijital completely transformed our digital presence. The final product exceeded every expectation — their attention to detail is unmatched.",
    name: "Sarah Mitchell",
    company: "NexCommerce CEO",
    avatar: "SM",
    stars: 5,
  },
  {
    quote: "Working with this team was a pleasure from day one. They delivered our fintech dashboard on time, on budget, and it looks absolutely stunning.",
    name: "James Hargreaves",
    company: "FinFlow CTO",
    avatar: "JH",
    stars: 5,
  },
  {
    quote: "The AI chatbot they built for us has reduced our support load by 60%. Incredible engineering paired with thoughtful UX design.",
    name: "Priya Sharma",
    company: "Aria Technologies",
    avatar: "PS",
    stars: 5,
  },
  {
    quote: "Our patient app went from concept to App Store in under 4 months. The team's communication and professionalism was world-class.",
    name: "Dr. Emre Yıldız",
    company: "MediSync Founder",
    avatar: "EY",
    stars: 5,
  },
  {
    quote: "GlobalDijital's strategic insights alone were worth the investment. Then the execution? Flawless. 10/10 would recommend to any tech leader.",
    name: "Clara Fontaine",
    company: "LaunchPad CPO",
    avatar: "CF",
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-12"
        >
          <span className="text-violet text-xs font-medium tracking-widest uppercase">Client Stories</span>
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="glass rounded-3xl p-10 md:p-14 text-left w-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/85 text-xl md:text-2xl leading-relaxed font-light mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-dark"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
                >
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-neon-blue' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
