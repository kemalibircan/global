'use client'

import { LocaleContext } from './LocaleContext'
import type { Translations, Locale } from '@/lib/i18n'

interface LocaleProviderProps {
  locale: Locale
  t: Translations
  dir: 'ltr' | 'rtl'
  children: React.ReactNode
}

export default function LocaleProvider({ locale, t, dir, children }: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={{ locale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  )
}
