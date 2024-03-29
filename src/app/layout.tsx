import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/organism/navbar/NavBar'
import Footer from '@/components/organism/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-screen-2xl w-screen m-auto px-12 min-h-dvh flex flex-col justify-between'>
          <NavBar />
          {children}
          <Footer />
        </div>
        
        </body>
    </html>
  )
}
