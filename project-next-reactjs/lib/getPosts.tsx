import { getCategoryId } from "@/api/getCategories";
import { getPosts, Post } from "@/api/getPost";

export async function fetchPostsByCategory(
  categorySlug?: string
): Promise<Post[]> {
  if (categorySlug) {
    const categoryId = await getCategoryId(categorySlug);
    if (categoryId) {
      return (await getPosts()).filter((post) =>
        post.categories.includes(categoryId)
      );
    }
    throw new Error("Missing Posts");
  }
  return fetchPosts();
}

export async function fetchPostsBySearch(search?: string): Promise<Post[]> {
  if (search) {
    return (await getPosts()).filter((post) => post.title.concat(search));
  }
  return fetchPosts();
}

export async function fetchPosts(): Promise<Post[]> {
  return await getPosts();
}

export async function fetchPostsPagination(
  page: number,
  categorySlug?: string
): Promise<{
  posts: Post[];
  totalPages: number;
  page: number;
}> {
  try {
    if (Number.isNaN(page)) {
      throw new Error("Page is not a Number");
    }
    const itemsPerPage = 3;
    const offset = (page - 1) * itemsPerPage;
    const items = await fetchPostsByCategory(categorySlug);

    if (!items) {
      throw new Error("Missing Categories");
    }

    const posts = items.slice(offset, offset + 3);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (page > totalPages || page < 1) {
      throw new Error("Out of Range Number");
    }
    return { posts, totalPages, page };
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
