import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import '@/app/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#12372A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://deforestation.xyz'),
  title: {
    default: 'Forest Risk Vietnam | AI Deforestation Monitoring',
    template: '%s | Forest Risk Vietnam',
  },
  description: 'An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution. Geospatial AI research pilot in Gia Lai Province.',
  keywords: [
    'Vietnam deforestation',
    'deforestation risk prediction',
    'AI forest monitoring',
    'remote sensing Vietnam',
    'Gia Lai deforestation',
    'machine learning forest risk',
    'satellite deforestation detection',
    'climate technology Vietnam',
    'forest conservation AI',
    'deforestation early warning system',
  ],
  authors: [
    { name: 'Pham Duy Long', url: 'https://github.com/pdlong-09' },
    { name: 'Nguyen Vu Huy', url: 'https://github.com/bob-the-guy' },
    { name: 'Nguyen Duc Anh', url: 'https://github.com/nnda29' },
    { name: 'Do Nhat Quang', url: 'https://github.com/quang0214adv-cpu' },
    { name: 'Tran Dang An' },
    { name: 'Dam Anh Thu' },
  ],
  creator: 'Forest Risk Vietnam Research Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deforestation.xyz',
    title: 'Forest Risk Vietnam | Interpretable AI Deforestation Prediction',
    description: 'A proactive monitoring framework using satellite data and machine learning to predict forest loss risk in Vietnam. Explore our interactive risk maps and open-source methodology.',
    siteName: 'Forest Risk Vietnam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forest Risk Vietnam - Interactive Machine Learning Pipeline for Deforestation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forest Risk Vietnam | AI Deforestation Monitoring',
    description: 'Proactive deforestation risk prediction in Vietnam using satellite data and machine learning at 1 km resolution.',
    images: ['/og-image.jpg'],
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
  alternates: {
    canonical: 'https://deforestation.xyz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#FAFAF7] text-[#1F2933] font-sans antialiased selection:bg-[#52B788] selection:text-[#12372A]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

