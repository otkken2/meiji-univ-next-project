import NewsList from "@/app/_components/NewsList";
import Pagenation from "@/app/_components/Pagenation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
    current: string;
  }
}

const Page = async ({ params }: Props) => {
  const current = parseInt(params.current, 10);

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} current={current} basePath={`/news/category/${category.id}`} />
    </>
  )
}

export default Page;