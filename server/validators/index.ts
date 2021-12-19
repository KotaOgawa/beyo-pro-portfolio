import { IsBoolean, IsOptional, IsString, Length, MinLength } from 'class-validator'

export class LoginBody {
  @MinLength(2)
  id: string

  @MinLength(4)
  pass: string
}


// class-validator というライブラリとても便利
export class TaskBody {
  @IsString({ message: '文字列で入力してください' })
  @Length(1, 5, { message: '1-5文字でOK' })
  label: string

  @IsOptional()
  @IsBoolean()
  done: boolean

  @IsString()
  body: string
}

// 下のような感じで型指定にも使える！
// post: {
//   reqBody: TaskBody // ← ココ！
//   resBody: Task
// }