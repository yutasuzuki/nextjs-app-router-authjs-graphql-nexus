import bcrypt from 'bcrypt'
import {
  objectType,
  extendType,
  stringArg,
  nonNull,
  interfaceType,
} from 'nexus'

const IUser = interfaceType({
  name: 'IUser',
  definition(t) {
    t.nonNull.field('id', {
      type: 'Int',
    })
    t.string('uid')
    t.string('email')
    t.string('name')
  },
  resolveType() {
    return null
  },
})

export const UserObject = objectType({
  name: 'User',
  definition(t) {
    t.implements(IUser)
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: UserObject,
      async resolve(_root, _args, { prisma, session }) {
        try {
          if (!session?.user) return null
          const user = await prisma.user.findUnique({
            where: { id: session.user.id },
          })
          if (!user) return null
          const { cryptedPassword, ...result } = user
          return result
        } catch (error) {
          console.log(error)
          return null
        }
      },
    })
  },
})

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signupUser', {
      type: UserObject,
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(root, args, { prisma }) {
        try {
          const { name, email, password } = args
          const cryptedPassword = await bcrypt.hash(password, 12)
          return prisma.user.create({
            data: { name, email, cryptedPassword },
          })
        } catch (error) {
          console.log(error)
          return null
        }
      },
    })
  },
})
