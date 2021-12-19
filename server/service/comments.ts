import { depend } from 'velona'
import { prisma } from '$/lib/prismaClient'
import type { Comment } from '$prisma/client'

// DBとの接続、DBアクセスメソッドの定義
export const fetchComments = depend(
  { prisma: prisma as { comment: { findMany(): Promise<Comment[]> } } },
  async ({ prisma }) => await prisma.comment.findMany()
)
