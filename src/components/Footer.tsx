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
    href: 'https://www.instagram.com/globaldijitalsoft?igsh=ZTB2b3FkZHJlYzE2',
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
    { label: nav.services, href: `/${locale}/#services` },
    { label: nav.work, href: `/${locale}/projects` },
    { label: nav.about, href: `/${locale}/about` },
    { label: nav.templates || 'Hazır Şablonlar', href: `/${locale}/templates` },
    { label: nav.contact, href: `/${locale}/contact` },
  ]

  const packageLinks = [
    { label: nav.packagesWeb, href: `/${locale}/packages/web` },
    { label: nav.packagesMobile, href: `/${locale}/packages/mobile` },
    { label: nav.packagesSocial, href: `/${locale}/packages/social` },
  ]

  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="relative w-52 h-14 block mb-4">
              <Image src="/logo.PNG" alt="GlobalDijital" fill className="object-contain object-left" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              GlobalDijital — Dijital gelecekler inşa ediyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{nav.services}</h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Package Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{nav.packages}</h4>
            <nav className="flex flex-col gap-2.5">
              {packageLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{nav.contact}</h4>
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:infoglobaldijital@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-neon-blue transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-blue/30 transition-all duration-300 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30">{t.footer.emailLabel}</p>
                  <p className="text-sm font-medium">infoglobaldijital@gmail.com</p>
                </div>
              </a>

              {/* Phone 1 */}
              <a
                href="tel:+905346124642"
                className="flex items-center gap-3 text-white/60 hover:text-neon-blue transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-blue/30 transition-all duration-300 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30">{t.footer.phoneLabel}</p>
                  <p className="text-sm font-medium">+90 534 612 46 42</p>
                </div>
              </a>

              {/* Phone 2 (WhatsApp) */}
              <a
                href="https://wa.me/905522489971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-[#25D366] transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#25D366]/30 transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.66 4.8 1.8 6.82L2 30l7.38-1.76A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.26 19.46c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.29-.23-.63-.4z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30">WhatsApp</p>
                  <p className="text-sm font-medium">+90 552 248 99 71</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Social + Divider */}
        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm">{t.footer.copyright}</p>

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

        {/* Bottom Phone Bar */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905346124642"
              className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/20 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neon-blue">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span className="text-neon-blue font-semibold text-sm tracking-wide">+90 534 612 46 42</span>
            </a>
            <a
              href="https://wa.me/905522489971"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" fill="#25D366">
                  <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.66 4.8 1.8 6.82L2 30l7.38-1.76A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.26 19.46c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.29-.23-.63-.4z"/>
                </svg>
              </div>
              <span className="text-[#25D366] font-semibold text-sm tracking-wide">+90 552 248 99 71</span>
            </a>
            <a
              href="mailto:infoglobaldijital@gmail.com"
              className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span className="text-white/60 font-medium text-sm tracking-wide">infoglobaldijital@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
