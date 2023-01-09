import { fetchPostsPagination } from "@/lib/getPosts";
import Blog from "@/ui/Blog/Blog";
import BlogPagination from "@/ui/Blog/BlogPagination";

export default async function Page({
  params,
}: {
  params: { category: string; page: string };
}) {
  const nextPage = params?.page ? +params.page : 1;
  const postsResponse = await fetchPostsPagination(nextPage, params?.category);
  return (
    <>
      <Blog {...postsResponse} />
      <BlogPagination
        page={postsResponse.page}
        totalPages={postsResponse.totalPages}
      />
    </>
  );
}
