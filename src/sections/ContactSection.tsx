'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-dark to-neon-blue/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,190,0.15) 0%, rgba(0,212,255,0.08) 40%, transparent 70%)' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-white mb-4 text-5xl md:text-7xl leading-[1.05]">
            Let&apos;s Build{' '}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Ready to transform your digital presence? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Email Us</p>
              <a href="mailto:hello@globaldijital.com" className="text-neon-blue text-lg hover:text-white transition-colors duration-300 font-medium">
                hello@globaldijital.com
              </a>
            </div>

            <div className="section-divider" />

            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/company/globaldijital' },
                  { label: 'Twitter', href: 'https://twitter.com/globaldijital' },
                  { label: 'Instagram', href: 'https://instagram.com/globaldijital' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full glass border border-dark-border text-white/50 text-sm hover:text-white hover:border-neon-blue/30 transition-all duration-300"
                    data-cursor-hover
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="section-divider" />

            <div className="space-y-3">
              <p className="text-white/30 text-xs tracking-widest uppercase">What to Expect</p>
              {['Response within 24 hours', 'Free 30-minute discovery call', 'Custom project proposal', 'No commitment required'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-12 text-center"
              >
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">Message Sent!</h3>
                <p className="text-white/50">We'll be in touch within 24 hours. Get ready to build something great.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-dark text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
                  data-cursor-hover
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" fill="currentColor" className="opacity-75" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
