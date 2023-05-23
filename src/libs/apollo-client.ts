import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { NextSSRInMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr'
import { getSession } from 'next-auth/react'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_DOMAIN}/api/graphql`,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL エラー]: Message:`, message)
      console.log(`[GraphQL エラー]: Location:`, locations)
      console.log(`[GraphQL エラー]: Path:`, path)
    })
  }
  if (networkError) {
    console.log(`[ネットワークエラー]: ${networkError}`)
  }
})

const link = errorLink.concat(httpLink)

export const makeClient = () => {
  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            link,
          ])
        : link,
  })
}

export const makeSuspenseCache = () => {
  return new SuspenseCache()
}
