import { depend } from 'velona'
import { prisma } from '$/lib/prismaClient'
import type { Thread } from '$prisma/client'

// DBとの接続、DBアクセスメソッドの定義
export const fetchThreads = depend(
  { prisma: prisma as { thread: { findMany(): Promise<Thread[]> } } },
  async ({ prisma }) => await prisma.thread.findMany()
)