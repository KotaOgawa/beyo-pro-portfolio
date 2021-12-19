import { defineController } from './$relay'
import { getThreads } from '$/service/threads'

// ルーティングの役割（HTTPメソッドと返り値の定義）
export default defineController({ getThreads }, ({ getThreads }) => ({
  get: async () => {
    return { status: 200, body: await getThreads() }
  }
}))