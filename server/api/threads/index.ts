import { Thread } from "@prisma/client"

// APIリクエスト＆レスポンスの型定義をするところ
export type Methods = {
  get: {
    resBody: Thread[]
  }
  post: {
    reqBody: Pick<Thread, 'title' | 'body'>
    resBody: Thread
  }
}
