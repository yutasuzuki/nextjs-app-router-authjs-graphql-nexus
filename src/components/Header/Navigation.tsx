'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import styles from './Header.module.css'

export const Navigation = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return null

  return (
    <nav className={styles.nav}>
      <ul>
        {session ? (
          <li>
            <a onClick={() => signOut()}>Sign out</a>
          </li>
        ) : (
          <>
            <li>
              <Link href='/auth/signup'>Sign up</Link>
            </li>
            <li>
              <Link href='/auth/signin'>Sign in</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
