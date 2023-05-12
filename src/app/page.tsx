import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { ClientSession } from '@/components/ClientSession/ClientSession'
import { Header } from '@/components/Header/Header'
import { ServerSession } from '@/components/ServerSession/ServerSession'

type Props = {}

export default function Home(props: Props) {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {/* @ts-ignore */}
        <ServerSession />
        <ClientSession />
      </main>
    </div>
  )
}
