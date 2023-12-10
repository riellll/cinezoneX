import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/shared/Navbar'
import { NextUIProviders } from '@/lib/NextUIProviders'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Cinizone Collection',
  description: 'https://cinezone-x.vercel.app/',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#141412]'>
      <body className='bg-[#141412]'>
        <NextUIProviders>
        <Navbar/>
        {children}
        <Footer/>
        </NextUIProviders>
      </body>
    </html>
  )
}
