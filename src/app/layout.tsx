import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Facil Soluciones - Zapata Gómez',
  description: 'Transforma tus metas en realidad con nuestra empresa líder en servicios financieros, inmobiliarios y de construcción. Descubre soluciones integrales para el éxito.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white bg-black`}>{children}</body>
    </html>
  )
}
