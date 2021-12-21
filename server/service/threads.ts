import type { Thread, Prisma } from '$prisma/client'
import { prisma } from '$/lib/prismaClient'

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

export const createThread = async (
  data: Prisma.ThreadCreateWithoutUserInput
) => {
  return await prisma.thread.create({
    data: {
      title: data.title,
      body: data.body,
      user: { connect: { id: 1 } }
    }
  })
}
