import type { FC } from "react"
import Head from "next/head"
import { Header } from "~/components/Header"

export const Layout: FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <Head>
        <title>FROURIO NYUMON</title>
      </Head>

      <main>
        {props.children}
      </main>
    </div>
  )
}

Header
