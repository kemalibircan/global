'use client'

import { createContext, useContext } from 'react'
import type { Translations, Locale } from '@/lib/i18n'

interface LocaleContextType {
  locale: Locale
  t: Translations
  dir: 'ltr' | 'rtl'
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'tr',
  t: {} as Translations,
  dir: 'ltr',
})

export function useLocale() {
  return useContext(LocaleContext)
}
