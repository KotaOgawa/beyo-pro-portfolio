import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// yarn migrate:reset でテーブルリセット後シーディング実行
async function createSampleData() {
  // $transaction内の実行順序制御（同期実行）はまだプレビュー版なので @ts-ignore でtscを鎮める（ついでに@ts-ignore使うなと怒られるのでESLintも鎮める）
  // eslint-disable-next-line
  // @ts-ignore
  return await prisma.$transaction(async (db) => {
    const ADMIN_USER = await db.user.create({
      data: {
        name: 'ADMIN 太郎',
        age: 168,
        role: 'ADMIN'
      }
    })

    const USER = await db.user.create({
      data: {
        name: 'USER 太郎'
      }
    })

    await db.thread.create({
      data: {
        title: 'テストスレッド_1',
        body: '初スレッドです',
        user_id: ADMIN_USER.id,
        comments: {
          createMany: {
            data: [
              { body: '初コメ' },
              { body: '2コメ' },
              { body: '3コメ' },
              { body: '4コメ', user_id: USER.id },
              { body: '5コメ' }
            ]
          }
        }
      }
    })

    await db.thread.create({
      data: {
        title: 'テストスレッド_2',
        body: '2スレッド目です',
        user_id: ADMIN_USER.id,
        comments: {
          createMany: {
            data: [
              { body: '初コメ', user_id: USER.id },
              { body: '2コメ' },
              { body: '3コメ' }
            ]
          }
        }
      }
    })

    await db.thread.create({
      data: {
        title: 'テストスレッド_3',
        body: '3スレッド目です',
        user_id: ADMIN_USER.id,
        comments: {
          createMany: {
            data: [
              { body: '初コメ' },
              { body: '2コメ' },
              { body: '3コメ', user_id: USER.id },
              { body: '4コメ', user_id: USER.id },
              { body: '5コメ', user_id: USER.id },
              { body: '6コメ' },
              { body: '7コメ' },
              { body: '8コメ' },
              { body: '9コメ' }
            ]
          }
        }
      }
    })
  })
}

async function main() {
  await createSampleData()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
