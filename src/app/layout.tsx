import type { Metadata, Viewport } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-roof-replacement.com'),
  title: {
    default: 'Roof Replacement Boise | New Roof Installation Idaho',
    template: '%s | Boise Roof Replacement Pros',
  },
  description: 'Professional roof replacement in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. New roof installation, shingle replacement, metal roofing. Licensed & insured. Free estimates. Call (208) 505-9352.',
  keywords: [
    'roof replacement Boise',
    'new roof installation Idaho',
    'Boise roofing contractor',
    'shingle replacement Meridian',
    'metal roof installation Nampa',
    'roof replacement cost Boise',
    'residential roof replacement',
    'commercial roof replacement Idaho',
    'asphalt shingle roof Boise',
    'roof replacement near me',
    'Treasure Valley roofers',
    'emergency roof replacement',
  ],
  authors: [{ name: 'Boise Roof Replacement Pros' }],
  openGraph: {
    title: 'Roof Replacement | Boise, Meridian, Nampa Idaho',
    description: 'Professional roof replacement services in the Treasure Valley. Licensed, insured, and ready to protect your home with a quality new roof.',
    url: 'https://boise-roof-replacement.com',
    siteName: 'Boise Roof Replacement Pros',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
