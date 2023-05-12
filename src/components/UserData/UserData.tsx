'use client'

import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query {
    user {
      id
      uid
      name
      email
    }
  }
`

type User = { id: number; name: string; email: string }

export const UserData = () => {
  const { data } = useQuery<{ user: User }>(QUERY)

  return (
    <div>
      <h2>DB User</h2>
      <pre>{JSON.stringify(data?.user)}</pre>
    </div>
  )
}
