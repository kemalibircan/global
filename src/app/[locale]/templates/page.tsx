'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'

// Slug → image mapping for generated mockups
const slugImages: Record<string, string> = {
  'doktor-web-sitesi': '/templates/doctor-web.jpg',
  'kafe-mobil-uygulamasi': '/templates/cafe-mobile.jpg',
  'avukat-web-sitesi': '/templates/lawyer-web.jpg',
  'restoran-mobil-uygulamasi': '/templates/restaurant-mobile.jpg',
  'emlak-web-sitesi': '/templates/realestate-web.jpg',
  'spor-salonu-mobil-uygulamasi': '/templates/gym-mobile.jpg',
}

// Unsplash images per template for beautiful fallback visuals
const slugHeroImages: Record<string, string> = {
  'doktor-web-sitesi': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  'kafe-mobil-uygulamasi': 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80',
  'avukat-web-sitesi': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  'restoran-mobil-uygulamasi': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  'emlak-web-sitesi': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  'spor-salonu-mobil-uygulamasi': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
}

export default function TemplatesPage() {
  const { t, locale } = useLocale()
  const data = t.pages.templates
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile'>('all')

  const filters = [
    { key: 'all', label: data.filterAll },
    { key: 'web', label: data.filterWeb },
    { key: 'mobile', label: data.filterMobile },
  ] as const

  const filtered = data.items.filter(
    (item) => activeFilter === 'all' || item.type === activeFilter
  )

  return (
    <main className="min-h-screen bg-dark pt-32 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-neon-blue/30 text-neon-blue/80 bg-neon-blue/5 mb-6">
            {data.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            {data.title}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-12 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { num: '6', lbl: locale === 'ar' ? 'قالب جاهز' : locale === 'en' ? 'Ready Templates' : 'Hazır Şablon' },
            { num: '5-7', lbl: locale === 'ar' ? 'أيام تسليم' : locale === 'en' ? 'Days Delivery' : 'Gün Teslim' },
            { num: '100%', lbl: locale === 'ar' ? 'ضمان الرضا' : locale === 'en' ? 'Satisfaction' : 'Memnuniyet' },
            { num: '7/24', lbl: locale === 'ar' ? 'دعم فني' : locale === 'en' ? 'Support' : 'Destek' },
          ].map((s) => (
            <div key={s.lbl} className="text-center">
              <p className="text-3xl font-bold text-neon-blue">{s.num}</p>
              <p className="text-white/40 text-sm">{s.lbl}</p>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-neon-blue text-dark shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                  : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Template Cards ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-dark-card rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={slugHeroImages[item.slug]}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                {/* Type badge */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: item.color }}
                >
                  {item.tag}
                </span>
                {/* Sector */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-white/80">
                  {item.sector}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{item.description}</p>

                {/* Features list - first 4 */}
                <ul className="space-y-1.5 mb-5">
                  {item.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/60 text-xs">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}20` }}>
                        <svg className="w-2.5 h-2.5" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                  {item.features.length > 4 && (
                    <li className="text-white/30 text-xs pl-6">
                      +{item.features.length - 4} {locale === 'ar' ? 'ميزة أخرى' : locale === 'en' ? 'more features' : 'daha fazla özellik'}
                    </li>
                  )}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-white/30 text-xs">
                      {locale === 'ar' ? 'ابتداءً من' : locale === 'en' ? 'Starting from' : 'Başlangıç fiyatı'}
                    </p>
                    <p className="text-white font-bold text-lg">₺{item.price}</p>
                  </div>
                  <Link
                    href={`/${locale}/templates/${item.slug}`}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 text-white"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}99)` }}
                  >
                    {locale === 'ar' ? 'التفاصيل ←' : locale === 'en' ? 'Details →' : 'İncele →'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-neon-blue/20 p-10 md:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(123,47,190,0.08) 100%)' }}
        >
          {/* BG blobs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex justify-center gap-3 mb-6">
              {['👨‍💼', '👩‍⚕️', '👨‍🍳', '👩‍💻', '🏋️'].map((e) => (
                <span key={e} className="text-3xl">{e}</span>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.ctaLabel}</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              {locale === 'ar'
                ? 'سنتواصل معك في غضون 24 ساعة لمناقشة احتياجاتك وتقديم عرض مخصص مجانًا.'
                : locale === 'en'
                ? 'We will reach out within 24 hours to discuss your needs and provide a free custom proposal.'
                : 'İhtiyaçlarınızı dinleyip 24 saat içinde ücretsiz özel teklif sunacağız.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-dark font-bold text-base shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
            >
              {data.ctaButton}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
