import { ClientSession } from '@/components/ClientSession/ClientSession'
import { ServerSession } from '@/components/ServerSession/ServerSession'

export default function Page() {
  return (
    <main>
      {/* @ts-ignore */}
      <ServerSession />
      <ClientSession />
    </main>
  )
}
