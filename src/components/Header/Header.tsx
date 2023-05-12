import Link from 'next/link'
import styles from './Header.module.css'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href='/'>Next.js(App Router) + Auth.js + Nexus + Prisma</Link>
      </h1>
      <Navigation />
    </header>
  )
}
