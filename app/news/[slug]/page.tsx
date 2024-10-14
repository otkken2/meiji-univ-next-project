import styles from "./page.module.css"
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  }
}

const Page = async ({ params }: Props) => {
  const data = await getNewsDetail(params.slug).catch(notFound)
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>

  )
}

export default Page;