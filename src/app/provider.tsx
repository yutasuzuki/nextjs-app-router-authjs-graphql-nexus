'use client'

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
import { SessionProvider } from 'next-auth/react'
import { makeClient, makeSuspenseCache } from '@/libs/apollo-client'

interface Props extends React.PropsWithChildren {}

export const Provider = ({ children }: Props) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      <SessionProvider>{children}</SessionProvider>
    </ApolloNextAppProvider>
  )
}
