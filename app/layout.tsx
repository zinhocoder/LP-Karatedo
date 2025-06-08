import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcelo Karate-do',
  description: 'Venha evoluir seu Karate com a metodologia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
