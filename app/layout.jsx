import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'

const hanken = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Tailwind Card',
  description: 'Card responsive with tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hanken.className} bg-gray-100 py-8`}>{children}</body>
    </html>
  )
}
