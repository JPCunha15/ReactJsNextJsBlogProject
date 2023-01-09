import { BlogsLoading } from "@/ui/Loading/BlogsLoading";

export default function Loading() {
  return (
    <div>
      <div className="relative mt-4 mb-6 w-full animate-pulse flex justify-center">
        <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-48"></div>
      </div>
      <BlogsLoading />
    </div>
  );
}
