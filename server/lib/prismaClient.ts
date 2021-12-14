import { PrismaClient } from '@prisma/client'

// 各serviceファイルで new PrismaClient() をするのはあまりよくないらしいのでここから import して使うようにする
// 参考：https://zenn.dev/kanasugi/articles/368d0b39c94daf
export const prisma = new PrismaClient()