import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'

export const metadata = {
  title: 'Dashboard',
}

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.06)' }}>
      <DashboardHeader />
      {children}
    </div>
  )
}
