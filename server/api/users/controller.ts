import { defineController } from './$relay'
import { fetchUsers } from '$/service/users'

export default defineController({ fetchUsers }, ({ fetchUsers }) => ({
  get: async () => ({ status: 200, body: await fetchUsers() })
}))
