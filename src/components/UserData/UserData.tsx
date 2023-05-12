'use client'

import { gql, useQuery } from '@apollo/client'
import { User } from '@prisma/client'

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

export const UserData = () => {
  const { data } = useQuery<{ user: Pick<User, 'id' | 'uid' | 'name' | 'email'> }>(QUERY)

  return (
    <div>
      <h2>DB User</h2>
      <pre>{JSON.stringify(data?.user)}</pre>
    </div>
  )
}
