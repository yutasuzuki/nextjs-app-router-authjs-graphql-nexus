import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js(App Router) + Auth.js + Nexus + Prisma',
  description: 'Generated by create next app',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
