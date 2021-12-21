import type { Thread } from '@prisma/client'
import { apiClient } from '~/utils/apiClient'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

type ThreadCreateInput = Pick<Thread, 'title' | 'body'>

const CreateThread = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ThreadCreateInput>()
  const router = useRouter()

  const onSubmit: SubmitHandler<ThreadCreateInput> = async (data) => {
    console.log(data)
    await apiClient.threads.post({ body: data })
    router.push('/')
  }

  return (
    <div>
      <h1>CREATE THREAD</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title', { required: true })}
          style={{ background: 'pink' }}
          placeholder="title"
        />
        <input
          {...register('body', { required: true })}
          style={{ background: 'orange' }}
          placeholder="body"
        />
        {errors.title && <p>Title入力して</p>}
        {errors.body && <p>Body入力して</p>}
        <input type="submit" defaultValue="送信" />
      </form>
    </div>
  )
}

export default CreateThread
