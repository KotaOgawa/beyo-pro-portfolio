import { defineController } from './$relay'
import { fetchThread } from '$/service/threads'

export default defineController({ fetchThread }, ({ fetchThread }) => ({
  get: async ({ params }) => {
    return { status: 200, body: await fetchThread(params.threadId) }
  }
}))
