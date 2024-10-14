import { ReactNode } from "react"
import Sheet from "../_components/Sheet"
import Hero from "../_components/Hero"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  )
}

export default RootLayout