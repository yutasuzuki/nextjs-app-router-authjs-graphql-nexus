import { compare } from 'bcrypt'
import NextAuth from 'next-auth'
import type { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/libs/prisma-client'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user) return null
        const isValid = await compare(credentials.password, user.cryptedPassword)
        if (!isValid) return null
        const { id, uid, name, email } = user
        return { id: String(id), uid, name, email }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (!session?.user) return session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          uid: token.uid,
        },
      }
    },
    jwt: async ({ user, token }) => {
      if (user) {
        const u = user as User & { uid: string }
        token.id = Number(u.id)
        token.uid = u.uid
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
