import Image from "next/image"
import styles from "./index.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  )
}

export default Header