import { defineController } from './$relay'
import { fetchThreads } from '$/service/threads'

// ルーティングの役割（HTTPメソッドと返り値の定義）
export default defineController({ fetchThreads }, ({ fetchThreads }) => ({
  get: async () => {
    return { status: 200, body: await fetchThreads() }
  }
}))