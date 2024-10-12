import type { Category } from "@/app/_libs/microcms"
import styles from "./index.module.css"

type Props = {
  category: Category;
}

const Category = ({ category }: Props) => {
  return <span className={styles.tag}>{category.name}</span>
}

export default Category;