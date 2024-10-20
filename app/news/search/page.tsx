import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
  searchParams: {
    q: string;
  }
}

const Page = async ({ searchParams }: Props) => {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  )
}

export default Page;