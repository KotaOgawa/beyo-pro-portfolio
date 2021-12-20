import { prisma } from '$/lib/prismaClient'
import type { Thread } from '$prisma/client'

// DBとの接続、DBアクセスメソッドの定義
export const fetchThreads = async () =>
  await prisma.thread.findMany({ include: { comments: true } })

export const fetchThread = async (id: Thread['id']) =>
  await prisma.thread.findUnique({
    where: { id },
    include: {
      comments: true
    }
  })
