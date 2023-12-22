import { Inter } from 'next/font/google'
import '../app/globals.css'
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" height={['100%']}>
      <body className={inter.className} height={['100%']}>{children}</body>
    </html>
  )
}
