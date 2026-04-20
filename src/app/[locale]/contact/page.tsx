'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

export default function ContactPage() {
  const { t } = useLocale()
  const c = t.pages.contact
  const cf = t.contact.form
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-dark pt-32 pb-24 px-6">
      {/* Background glows */}
      <div className="absolute top-40 left-1/4 w-96 h-96 rounded-full bg-neon-blue/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-80 h-80 rounded-full bg-violet/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-6">
            <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">{c.badge}</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl md:text-7xl mb-4 leading-tight">
            {c.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{c.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl">{c.subtitle}</p>
        </motion.div>

        {/* Main grid: form + info */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24" ref={ref}>
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="font-display font-bold text-white text-2xl mb-3">{cf.successTitle}</h3>
                  <p className="text-white/50">{cf.successText}</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                  {[
                    { label: cf.nameLabel, placeholder: cf.namePlaceholder, key: 'name', type: 'text' },
                    { label: cf.emailLabel, placeholder: cf.emailPlaceholder, key: 'email', type: 'email' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">{field.label}</label>
                      <input type={field.type} required
                        value={formState[field.key as keyof typeof formState]}
                        onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                        className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20"
                        placeholder={field.placeholder} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">{cf.messageLabel}</label>
                    <textarea required rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue/50 transition-colors duration-300 placeholder:text-white/20 resize-none"
                      placeholder={cf.messagePlaceholder} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-xl font-semibold text-dark text-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }} data-cursor-hover>
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" fill="currentColor" className="opacity-75" />
                        </svg>
                        {cf.sending}
                      </span>
                    ) : cf.submit}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8">
            {/* Email */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{t.contact.emailLabel}</p>
              <a href="mailto:hello@globaldijital.com" className="text-neon-blue text-lg font-medium hover:text-white transition-colors duration-300">hello@globaldijital.com</a>
            </div>
            {/* Office */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{c.officeLabel}</p>
              <p className="text-white/70 text-sm leading-relaxed">{c.officeAddress}</p>
            </div>
            {/* Phone */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{c.phoneLabel}</p>
              <a href="tel:+902121234567" className="text-white/70 hover:text-neon-blue transition-colors duration-300 text-sm">+90 212 123 45 67</a>
            </div>
            {/* What to expect */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-3">{t.contact.expectLabel}</p>
              <div className="space-y-2">
                {t.contact.expects.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet/20 mb-6">
              <span className="text-violet text-xs font-medium tracking-widest uppercase">{c.faqBadge}</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl">{c.faqTitle}</h2>
          </div>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-cursor-hover>
                  <span className="font-semibold text-white text-sm">{faq.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`text-neon-blue flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                      transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                      <div className="px-6 pb-5">
                        <div className="h-px bg-white/5 mb-4" />
                        <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
