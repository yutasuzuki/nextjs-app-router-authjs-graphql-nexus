import Link from 'next/link'
import styles from './DashboardHeader.module.css'
import { Signout } from './Signout'

export const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href='/dashboard'>Dashboard</Link>
      </h1>
      <Signout />
    </header>
  )
}
