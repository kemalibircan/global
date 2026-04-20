import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../globals.css'
import { getTranslations, type Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'ar' }, { locale: 'en' }]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const titles: Record<Locale, string> = {
    tr: 'GlobalDijıtal — Dijital Gelecekler İnşa Ediyoruz',
    ar: 'GlobalDijital — نبني مستقبلاً رقمياً',
    en: 'GlobalDijital — We Build Digital Futures',
  }
  const descriptions: Record<Locale, string> = {
    tr: 'GlobalDijital; web geliştirme, mobil uygulamalar, UI/UX tasarım, yapay zeka entegrasyonu ve dijital strateji alanlarında uzmanlaşmış dünya standartlarında bir yaratıcı teknoloji ajansıdır.',
    ar: 'GlobalDijital وكالة تقنية إبداعية عالمية المستوى متخصصة في تطوير الويب وتطبيقات الجوال وتصميم UI/UX ودمج الذكاء الاصطناعي والاستراتيجية الرقمية.',
    en: 'GlobalDijital is a world-class creative tech agency specializing in web development, mobile apps, UI/UX design, AI integration, and digital strategy.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: 'web development, mobile apps, UI/UX design, AI integration, digital strategy',
    authors: [{ name: 'GlobalDijital', url: 'https://globaldijital.com' }],
    openGraph: {
      type: 'website',
      url: `https://globaldijital.com/${locale}`,
      title: titles[locale],
      description: descriptions[locale],
      siteName: 'GlobalDijital',
    },
    metadataBase: new URL('https://globaldijital.com'),
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-dark text-white antialiased">
        <LocaleProvider locale={locale} t={t} dir={dir}>
          <LoadingScreen />
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  )
}
