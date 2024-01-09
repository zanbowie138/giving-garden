import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/core/Header'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Giving Garden'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header></Header>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  )
}
