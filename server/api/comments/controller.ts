import { defineController } from './$relay'
import { fetchComments } from '$/service/comments'

export default defineController({ fetchComments }, ({ fetchComments }) => ({
  get: async () => {
    return { status: 200, body: await fetchComments() }
  }
}))
