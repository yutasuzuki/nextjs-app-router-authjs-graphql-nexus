import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Header } from '@/components/Header/Header'

export const metadata = {
  title: 'auth',
}

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const res = await getServerSession(authOptions)

  if (res?.user) {
    redirect('/dashboard')
  }

  return (
    <div>
      <Header />
      <main style={{ maxWidth: '60vw', margin: 'auto' }}>{children}</main>
    </div>
  )
}
