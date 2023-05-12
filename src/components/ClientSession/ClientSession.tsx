'use client'

import { useSession } from 'next-auth/react'

export const ClientSession = () => {
  const { data: session } = useSession()

  return (
    <div>
      <h2>Client Session</h2>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
