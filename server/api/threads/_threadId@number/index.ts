import type { Comment, Thread } from '@prisma/client'

export type Methods = {
  get: {
    resBody: (Thread & { comments: Comment[] }) | null
  }
}
