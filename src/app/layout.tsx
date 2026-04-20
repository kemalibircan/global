import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'GlobalDijital — We Build Digital Futures',
  description: 'GlobalDijital is a world-class creative tech agency specializing in web development, mobile apps, UI/UX design, AI integration, and digital strategy. We transform brands into digital experiences.',
  keywords: 'web development, mobile apps, UI/UX design, AI integration, digital strategy, brand identity, creative tech agency',
  authors: [{ name: 'GlobalDijital', url: 'https://globaldijital.com' }],
  creator: 'GlobalDijital',
  openGraph: {
    type: 'website',
    url: 'https://globaldijital.com',
    title: 'GlobalDijital — We Build Digital Futures',
    description: 'World-class creative tech agency transforming brands into digital experiences.',
    siteName: 'GlobalDijital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlobalDijital — We Build Digital Futures',
    description: 'World-class creative tech agency transforming brands into digital experiences.',
    creator: '@globaldijital',
  },
  metadataBase: new URL('https://globaldijital.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
