import { fetchPosts } from "@/lib/getPosts";
import BlogWithSearch from "@/ui/Blog/BlogWithSearch";

export default async function Page() {
  const postsResponse = await fetchPosts();
  return <BlogWithSearch posts={postsResponse} />;
}
