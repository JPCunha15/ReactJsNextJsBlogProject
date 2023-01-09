import { cache } from "react";
import blogData from "./data/blog.json";

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export const getCategories = cache(async () => {
  return blogData.categories as Category[];
});

export const getCategoryNames = (ids: number[]) => {
  const postByCategory = blogData.categories.filter((c) =>
    ids.some((id) => id === c.id)
  );
  return postByCategory.map((p) => p.name);
};

export const getCategoryId = cache(async (slug: string) => {
  return blogData.categories.find((c) => c.slug === slug)?.id;
});
