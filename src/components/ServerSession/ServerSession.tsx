import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const ServerSession = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
