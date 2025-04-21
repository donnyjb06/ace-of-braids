import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UtilityBar from '@components/UtilityBar/UtilityBar'
import './globals.scss'
import Header from '@components/Header/Header'
import NavBar from '@components/Nav/NavBar/NavBar'
import Ripple from '@components/Ripple/Ripple'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ace of Braids by Kate',
  description: 'Ace of Braids | Your expert for anything braids!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable}`}>
        <Ripple />
        <Header>
          <UtilityBar />
          <NavBar />
        </Header>
        <main className='main'>{children}</main>
      </body>
    </html>
  )
}
