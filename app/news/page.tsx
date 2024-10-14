import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";

const Page = async () => {
  const { contents: news } = await getNewsList();
  return (
    <NewsList news={news} />
  )
}

export default Page;