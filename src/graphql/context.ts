import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import type { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/libs/prisma-client'

export interface Context {
  req: NextApiRequest
  res: NextApiResponse
  prisma: PrismaClient
  session: Session
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
