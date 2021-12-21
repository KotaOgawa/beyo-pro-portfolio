import { defineController } from './$relay'
import { createThread, fetchThreads } from '$/service/threads'

// ルーティングの役割（HTTPメソッドと返り値の定義）
export default defineController({ fetchThreads }, ({ fetchThreads }) => ({
  get: async () => {
    return { status: 200, body: await fetchThreads() }
  },
  post: async ({ body }) => ({
    status: 201,
    body: await createThread(body)
  })
}))
