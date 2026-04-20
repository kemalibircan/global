'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

export default function ContactSection() {
  const { t } = useLocale()
  const c = t.contact
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
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-dark to-neon-blue/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,190,0.15) 0%, rgba(0,212,255,0.08) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      <div className="max-w-5xl mx-auto w-full relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-white mb-4 text-5xl md:text-7xl leading-[1.05]">
            {c.headline1}{' '}<span className="gradient-text">{c.headline2}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{c.emailLabel}</p>
              <a href="mailto:infoglobaldijital@gmail.com" className="text-neon-blue text-lg hover:text-white transition-colors duration-300 font-medium">
                infoglobaldijital@gmail.com
              </a>
            </div>
            <div className="section-divider" />
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">{c.followLabel}</p>
              <div className="flex gap-4 flex-wrap">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href={`https://${social.toLowerCase()}.com/globaldijital`} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full glass border border-dark-border text-white/50 text-sm hover:text-white hover:border-neon-blue/30 transition-all duration-300" data-cursor-hover>
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div className="section-divider" />
            <div className="space-y-3">
              <p className="text-white/30 text-xs tracking-widest uppercase">{c.expectLabel}</p>
              {c.expects.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl p-12 text-center">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">{c.form.successTitle}</h3>
                <p className="text-white/50">{c.form.successText}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                {[
                  { label: c.form.nameLabel, placeholder: c.form.namePlaceholder, key: 'name', type: 'text' },
                  { label: c.form.emailLabel, placeholder: c.form.emailPlaceholder, key: 'email', type: 'email' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">{field.label}</label>
                    <input
                      type={field.type} required
                      value={formState[field.key as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                      className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">{c.form.messageLabel}</label>
                  <textarea
                    required rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20 resize-none"
                    placeholder={c.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-dark text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }} data-cursor-hover
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" fill="currentColor" className="opacity-75" />
                      </svg>
                      {c.form.sending}
                    </span>
                  ) : c.form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
