import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { context } from '@/graphql/context'
import { schema } from '@/graphql/schema'

const server = new ApolloServer({ schema })

export default startServerAndCreateNextHandler(server, {
  context,
})
