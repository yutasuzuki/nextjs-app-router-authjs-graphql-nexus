import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { prisma } from '@/libs/prisma-client'

export interface SessionUser extends Omit<User, 'id'> {
  id: number
  uid: string
}

export interface Context {
  req: NextApiRequest
  res: NextApiResponse
  prisma: PrismaClient
  session: SessionUser
}

export const context = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getToken({ req })
  return {
    req,
    res,
    prisma,
    session,
  }
}
