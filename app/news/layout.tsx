import { ReactNode } from "react"
import Hero from "../_components/Hero"
import Sheet from "../_components/Sheet"

type Props = {
  children: ReactNode
}

const NewsLayout = ({ children }: Props) => {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  )
}

export default NewsLayout;