import type { SessionUser } from '@/graphql/context'
import { prisma } from '@/libs/prisma-client'

export const getUser = async (session: SessionUser) => {
  if (!session) return null
  const res = await prisma.user.findUnique({
    where: { id: session.id },
  })
  if (!res) return null
  const { cryptedPassword, ...result } = res
  return result
}
