import { Thread } from '@prisma/client'

export type Methods = {
  get: {
    resBody: Thread | null
  }
}
