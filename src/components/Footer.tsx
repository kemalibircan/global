'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/LocaleContext'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/globaldijital',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/globaldijital',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/globaldijital',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const { t, locale } = useLocale()
  const nav = t.nav

  const footerLinks = [
    { label: nav.services, href: '#services' },
    { label: nav.work, href: '#portfolio' },
    { label: nav.about, href: '#about' },
    { label: nav.contact, href: '#contact' },
  ]

  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href={`/${locale}`} className="relative w-36 h-10 block">
            <Image src="/logo.PNG" alt="GlobalDijital" fill className="object-contain object-left" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-neon-blue border border-white/10 hover:border-neon-blue/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="section-divider my-8" />
        <p className="text-center text-white/30 text-sm">{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
