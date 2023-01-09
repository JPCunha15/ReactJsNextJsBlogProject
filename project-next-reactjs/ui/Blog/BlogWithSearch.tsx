"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Post } from "../../api/getPost";
import Blog from "./Blog";
import BlogPagination from "./BlogPagination";

export type BlogWithSearchProps = {
  posts: Post[];
};

const BlogWithSearch = ({ posts }: BlogWithSearchProps) => {
  const [postsList, setPosts] = useState(posts.slice(0, 3));
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const filterPosts = useCallback(() => {
    const itemsPerPage = 3;
    const offset = (page - 1) * itemsPerPage;
    const items = posts.filter((p) => p.title.toLowerCase().includes(search));
    setPosts(items.slice(offset, offset + 3));
    setTotalPages(Math.ceil(items.length / itemsPerPage));
  }, [page, posts, search]);

  useEffect(() => {
    filterPosts();
  }, [search, page, filterPosts]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const PostsSection = () => (
    <>
      <Blog posts={postsList} />
      <BlogPagination
        page={page}
        onNext={() => setPage((prev) => prev + 1)}
        onPrevious={() => setPage((prev) => prev - 1)}
        totalPages={totalPages}
      />
    </>
  );

  return (
    <>
      <div className="flex justify-center mt-4 mb-6">
        <div className="xl:w-96">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
      </div>
      {postsList.length > 0 ? (
        <PostsSection />
      ) : (
        <div className="border-dashed text-gray-600 rounded-lg items-center justify-center p-4 flex border-2 border-indigo-600">
          No Posts Found
        </div>
      )}
    </>
  );
};

export default BlogWithSearch;
