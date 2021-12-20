import useAspidaSWR from '@aspida/swr'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { apiClient } from '~/utils/apiClient'

const ThreadDetail = () => {
  const router = useRouter()
  const { threadId } = router.query

  const {
    data: thread,
    error,
    revalidate
  } = useAspidaSWR(apiClient.threads._threadId(Number(threadId)))

  return (
    <Box>
      <Text fontSize="3xl">Thread</Text>
      <Text fontSize="3xl">id:{thread?.id}</Text>
      <Text fontSize="3xl">title: {thread?.title}</Text>
      <Text fontSize="3xl">body: {thread?.body}</Text>
      <Text fontSize="3xl">created_at: {thread?.created_at}</Text>
      <Text fontSize="3xl">updated_at: {thread?.updated_at}</Text>

      <br />

      <Text fontSize="large">Comment</Text>
      <ul>
        {thread &&
          thread.comments.map((comment) => {
            return <li key={comment.id}>{comment.body}</li>
          })}
      </ul>
    </Box>
  )
}

export default ThreadDetail
