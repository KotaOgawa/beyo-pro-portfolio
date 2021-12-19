import type { User } from '@prisma/client'
import { depend } from 'velona'
import { prisma } from '$/lib/prismaClient'

export const fetchUsers = depend(
  { prisma: prisma as { user: { findMany(): Promise<User[]> } } },
  async ({ prisma }) => {
    return await prisma.user.findMany()
  }
)
