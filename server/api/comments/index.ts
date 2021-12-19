import type { Comment } from '$prisma/client'

export type Methods = {
  get: {
    resBody: Comment[]
  }
}
