import CursorSpotlight from '@/components/layout/CursorSpotlight'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScrollProgressBar from '@/components/layout/ScrollProgressBar'
import ChatWidget from '@/components/ui/ChatWidget'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'IMPACKTA AI — AI Automation Consultancy',
  description:
    'We design AI automation systems that remove manual admin, reduce operational costs and allow businesses to scale without increasing headcount.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className={fontSans.className}>
        <ScrollProgressBar />
        <CursorSpotlight />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
