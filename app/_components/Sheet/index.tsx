import { ReactNode } from "react"
import styles from "./index.module.css"

type Props = {
  children: ReactNode
}

const Sheet = ({ children }: Props) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  )
}

export default Sheet