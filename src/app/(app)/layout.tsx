import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import '@/app/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Forest Risk Vietnam',
  description: 'Interpretable AI for Deforestation Risk Prediction in Vietnam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-[#FAFAF7] text-[#1F2933] font-sans">
        <Navbar />
        <main min-h-screen>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
