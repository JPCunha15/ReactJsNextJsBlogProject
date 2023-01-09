import { cache } from "react";
import blogData from "./data/blog.json";
import { getCategoryNames } from "./getCategories";

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
  categoriesNames?: string[];
};

export async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export const getPosts = cache(async () => {
  await delay(2000); // Simulate Delay in the service
  return blogData.posts.map((post: Post) => ({
    ...post,
    categoriesNames: getCategoryNames(post.categories),
  }));
});
