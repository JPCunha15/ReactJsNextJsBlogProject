import { Category, getCategories } from "@/api/getCategories";

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}
