import { Archivo, Archivo_Black } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

export const metadata = {
  title: 'Nutri-Win',
  description: 'Nutri-Win is the modern nutrition product helping teams and families eat better with measurable impact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${archivoBlack.variable}`}>{children}</body>
    </html>
  )
}
