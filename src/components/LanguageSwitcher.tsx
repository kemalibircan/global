'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from './LocaleContext'

const languageOptions = [
  { code: 'tr', label: 'TR', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
  { code: 'ar', label: 'AR', flag: '🇸🇦', name: 'العربية' },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { locale } = useLocale()

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
      {languageOptions.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          title={lang.name}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
            locale === lang.code
              ? 'bg-gradient-to-r from-neon-blue/80 to-violet/80 text-white shadow-md'
              : 'text-white/50 hover:text-white'
          }`}
          data-cursor-hover
        >
          <span>{lang.flag}</span>
          <span className="tracking-wide hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  )
}
