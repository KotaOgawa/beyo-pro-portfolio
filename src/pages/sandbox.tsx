import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import { Box, Flex } from '@chakra-ui/react'

/**
 * NOTE: 流れメモ（1, 2が基点）
 * 1. schema.prismaでテーブルのデータモデル定義（Thread） → yarn devするとテーブル＆カラム作成
 * 2. threads/index.tsでHTTPメソッドごとのリクエストとレスポンスの型定義（Threadの型は`@prisma/client`から取ってくる）
 * 3. /servicesにthreads.tsを作成して実際にDBにアクセスする処理を書く
 * 4. threads/controller.tsでルーティングの定義をする
 * 5. フロント側の呼び出したいファイルでuseAspidaSWRを用いて呼び出す
 */
const Sandbox = () => {
  const { data: threads, error, revalidate } = useAspidaSWR(apiClient.threads)
  console.log('🍫 Threadデータ', threads)

  return (
    <Box>
      <Flex justify="center" align="center" margin={50}>
        <div>aiko 結婚 おめでとう! 🎉</div>
      </Flex>

      <ul>
        {threads?.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </Box>
  )
}

export default Sandbox
