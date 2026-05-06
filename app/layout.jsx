import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Nutri-Win',
  description: 'Nutri-Win is the modern nutrition product helping teams and families eat better with measurable impact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
