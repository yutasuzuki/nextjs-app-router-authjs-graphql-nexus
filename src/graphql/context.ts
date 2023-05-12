import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import type { Session, User } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/libs/prisma-client'

interface CustomUser extends Omit<User, 'id'> {
  id: number
  uid: string
}

interface CustomSession extends Session {
  user: CustomUser
}

export interface Context {
  req: NextApiRequest
  res: NextApiResponse
  prisma: PrismaClient
  session: CustomSession
}

export const context = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  return {
    req,
    res,
    prisma,
    session,
  }
}
