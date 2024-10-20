import NewsList from "@/app/_components/NewsList";
import Pagenation from "@/app/_components/Pagenation";
import { NEWS_LIST_LIMIT } from "../_constants";
import { getNewsList } from "../_libs/microcms";
import SearchField from "../_components/SearchField";

export const revalidate = 0;

const Page = async () => {


  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} />
    </>
  )
}

export default Page;