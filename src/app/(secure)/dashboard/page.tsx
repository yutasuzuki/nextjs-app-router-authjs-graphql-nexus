import { ClientSession } from '@/components/ClientSession/ClientSession'
import { ServerSession } from '@/components/ServerSession/ServerSession'
import { UserData } from '@/components/UserData/UserData'

export default function Page() {
  return (
    <main>
      {/* @ts-ignore */}
      <ServerSession />
      <ClientSession />
      <UserData />
    </main>
  )
}
