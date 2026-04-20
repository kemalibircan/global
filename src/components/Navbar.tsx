'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale } from '@/components/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t, locale } = useLocale()
  const nav = t.nav
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const navLinks = [
    { label: nav.services, href: `/${locale}/#services` },
    { label: nav.work, href: `/${locale}/projects` },
    { label: nav.about, href: `/${locale}/about` },
    { label: nav.contact, href: `/${locale}/contact` },
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-dark/80 backdrop-blur-xl border-b border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="relative w-36 h-10 block flex-shrink-0">
          <Image src="/logo.PNG" alt="GlobalDijital" fill className="object-contain object-left" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
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
        </div>

        {/* Right: Language switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300"
            data-cursor-hover
          >
            {nav.cta}
          </a>
        </div>

        {/* Mobile: language switcher + menu icon */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button className="text-white p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
