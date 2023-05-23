import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { context } from '@/graphql/context'
import { schema } from '@/graphql/schema'

const server = new ApolloServer({ schema })

const handler = startServerAndCreateNextHandler(server, {
  context,
})

export { handler as GET, handler as POST }
