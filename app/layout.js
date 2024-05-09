import { Inter } from 'next/font/google'
import './ui/globals.css'
import './global.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cake Ordering',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
