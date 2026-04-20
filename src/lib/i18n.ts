import type { Translations } from './types'
import tr from './translations/tr'
import ar from './translations/ar'
import en from './translations/en'

export type { Translations }
export type Locale = 'tr' | 'ar' | 'en'
export const locales: Locale[] = ['tr', 'ar', 'en']
export const defaultLocale: Locale = 'tr'

const translations: Record<Locale, Translations> = { tr, ar, en }

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale]
}
