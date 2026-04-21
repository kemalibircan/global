'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t, locale } = useLocale()
  const nav = t.nav
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [packagesOpen, setPackagesOpen] = useState(false)

  const navLinks = [
    { label: nav.services, href: `/${locale}/#services` },
    { label: nav.work, href: `/${locale}/projects` },
    { label: nav.about, href: `/${locale}/about` },
    { label: nav.templates || 'Hazır Şablonlar', href: `/${locale}/templates` },
    { label: nav.contact, href: `/${locale}/contact` },
  ]

  const packageLinks = [
    { label: nav.packagesWeb || 'Web Site', href: `/${locale}/packages/web` },
    { label: nav.packagesMobile || 'Mobil Uygulama', href: `/${locale}/packages/mobile` },
    { label: nav.packagesSocial || 'Sosyal Medya', href: `/${locale}/packages/social` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['services', 'portfolio', 'about', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveLink(`#${id}`); break }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* ── Top Contact Bar ───────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-center gap-8 px-6 py-1.5 bg-dark/90 backdrop-blur-md border-b border-white/5 text-xs text-white/50">
        <a href="mailto:infoglobaldijital@gmail.com" className="flex items-center gap-1.5 hover:text-neon-blue transition-colors duration-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          infoglobaldijital@gmail.com
        </a>
        <span className="w-px h-3 bg-white/10" />
        <a href="tel:+905346124642" className="flex items-center gap-1.5 hover:text-neon-blue transition-colors duration-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +90 534 612 46 42
        </a>
        <span className="w-px h-3 bg-white/10" />
        <a href="tel:+905522489971" className="flex items-center gap-1.5 hover:text-neon-blue transition-colors duration-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +90 552 248 99 71
        </a>
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-dark/80 backdrop-blur-xl border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] top-0 md:top-[30px]'
            : 'py-6 bg-transparent top-0 md:top-[30px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="relative w-48 h-14 block flex-shrink-0">
            <Image src="/logo.PNG" alt="GlobalDijital" fill className="object-contain object-left" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href} href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  activeLink === link.href ? 'text-neon-blue' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-neon-blue to-violet transition-all duration-300 ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            {/* Packages Dropdown */}
            <div className="relative group">
              <button
                className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1"
                onMouseEnter={() => setPackagesOpen(true)}
                onMouseLeave={() => setPackagesOpen(false)}
              >
                {nav.packages || 'Paketler'}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${packagesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setPackagesOpen(true)}
                onMouseLeave={() => setPackagesOpen(false)}
              >
                <div className="glass rounded-xl border border-white/10 p-2 min-w-[200px] shadow-xl">
                  {packageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={`/${locale}/contact`}
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300"
              data-cursor-hover
            >
              {nav.cta}
            </a>
          </div>

          {/* Mobile: language switcher + menu icon */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="text-white p-2 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <motion.line
                  x1="3" y1="6" x2="21" y2="6"
                  animate={isOpen ? { rotate: 45, y: 6, x1: 3, y1: 12, x2: 21, y2: 12 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line
                  x1="3" y1="12" x2="21" y2="12"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.line
                  x1="3" y1="18" x2="21" y2="18"
                  animate={isOpen ? { rotate: -45, y: -6, x1: 3, y1: 12, x2: 21, y2: 12 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Panel ──────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />

            {/* Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark-card border-l border-white/10 flex flex-col pt-24 px-8 pb-8 overflow-y-auto"
            >
              {/* Nav Links */}
              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-xl font-display font-semibold text-white/80 hover:text-neon-blue transition-colors duration-300 border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Packages section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <p className="pt-6 pb-2 text-xs font-medium tracking-widest uppercase text-neon-blue/60">
                    {nav.packages || 'Paketler'}
                  </p>
                  {packageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 text-lg text-white/60 hover:text-white transition-colors duration-300 pl-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 rounded-full text-center text-sm font-semibold text-dark"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
                >
                  {nav.cta}
                </Link>

                {/* Contact info */}
                <div className="mt-6 space-y-2">
                  <a href="mailto:infoglobaldijital@gmail.com" className="flex items-center gap-2 text-xs text-white/40 hover:text-neon-blue transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    infoglobaldijital@gmail.com
                  </a>
                  <a href="tel:+905346124642" className="flex items-center gap-2 text-xs text-white/40 hover:text-neon-blue transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +90 534 612 46 42
                  </a>
                  <a href="https://wa.me/905522489971" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/40 hover:text-[#25D366] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.66 4.8 1.8 6.82L2 30l7.38-1.76A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.26 19.46c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.29-.23-.63-.4z"/></svg>
                    +90 552 248 99 71
                  </a>
                </div>

                <p className="text-center text-white/30 text-xs mt-4">
                  © 2025 GlobalDijital
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
