import { join, resolve } from 'path'
import { makeSchema, fieldAuthorizePlugin } from 'nexus'
import * as types from './schemas'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), 'src', 'graphql', '_generated', 'nexus-typegen.ts'),
    schema: join(process.cwd(), 'src', 'graphql', '_generated', 'schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), 'src', 'graphql', 'context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  plugins: [fieldAuthorizePlugin()],
})
