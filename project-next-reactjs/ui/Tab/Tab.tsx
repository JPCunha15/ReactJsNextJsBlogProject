"use client";

import clsx from "clsx";
import Link from "next/link";
import useGetPathCategory from "@/utils/useGetPathCategory";

export interface TabProps {
  text: string;
  slug: string;
}

export const Tab = ({ slug, text }: TabProps) => {
  const pathCategory = useGetPathCategory();

  const isActive = pathCategory === `/${slug}` || slug === pathCategory;
  const slugLink = slug ? `${slug}/1` : "";

  return (
    <div
      className={clsx(
        "my-2 mx-2 inline-block rounded-lg px-3 py-1 text-sm font-medium",
        {
          "bg-indigo-700 text-indigo-100 hover:bg-indigo-500 hover:text-white":
            !isActive,
          "bg-indigo-900 text-white": isActive,
        }
      )}
    >
      <Link href={slugLink}>{text}</Link>
    </div>
  );
};
