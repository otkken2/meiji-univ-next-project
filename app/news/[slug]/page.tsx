import styles from "./page.module.css"
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { //プレビュー用としてPageを使う時にdraftKeyが自動的にCMSから渡される
    dk?: string;
  }
}

const Page = async ({ params, searchParams }: Props) => {
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk }).catch(notFound)
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