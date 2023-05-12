'use client'

import { signOut } from 'next-auth/react'
import styles from './DashboardHeader.module.css'

export const Signout = () => {
  return (
    <nav className={styles.nav}>
      <a onClick={() => signOut()}>Sign out</a>
    </nav>
  )
}
