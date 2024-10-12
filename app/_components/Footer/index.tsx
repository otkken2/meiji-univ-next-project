import styles from "./index.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/news">ニュース</a>
          </li>
          <li className={styles.item}>
            <a href="/members">
              メンバー
            </a>
          </li>
          <li className={styles.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>©️ SIMPLE. ALL Rights Reserved 2024</p>
    </footer>
  )
}

export default Footer