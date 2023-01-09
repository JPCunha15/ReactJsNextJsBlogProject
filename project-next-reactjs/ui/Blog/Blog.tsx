"use client";
import React from "react";
import { Post } from "@/api/getPost";
import Image from "next/image";

export type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <div className="grid lg:grid-cols-3 max-w-lg mx-auto lg:max-w-none gap-5">
      {posts?.map((post) => {
        return (
          <div
            className="rounded-lg flex flex-col shadow-lg overflow-hidden"
            key={post.id}
          >
            <div className="h-48 w-full relative overflow-hidden">
              <Image
                className="object-cover hover:scale-125 ease-in duration-500"
                src={post.imageUrl}
                alt={post.title}
                sizes="100vw, 100vh"
                fill
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  {post.categoriesNames?.join(", ")}
                </p>
                <h3 className="text-xl my-2 font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-500">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full">
                  <svg
                    className="absolute -left-1 w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium mb-1 text-gray-900">
                    @Joao Cunha
                  </p>
                  <div className="text-sm text-gray-500">
                    <time dateTime="2022-01-09">Jan 9, 2022</time>
                    <span className="mx-1">&middot;</span>
                    <span>1 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
