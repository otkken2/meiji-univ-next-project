import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css"
import { News } from "@/app/_libs/microcms"
import Image from "next/image";

type Props = {
  data: News
};

const Article = ({ data }: Props) => {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      />
    </main>
  )
}

export default Article;