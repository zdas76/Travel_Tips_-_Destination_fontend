/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import LoadingBlur from "@/components/shared/loading";
import { useGetPost } from "@/hooks/userPost/UserPost";
import { TPost } from "@/types/post";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsfeedPage() {
  const { data: Post, isLoading }: any = useGetPost();

  const AllPost = Post?.data;

  if (isLoading) {
    <LoadingBlur />;
  }
  return (
    <div className="container mx-auto">
      <h1>All Post</h1>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {AllPost?.map((post: TPost, index: number) => (
          <div key={index} className="border rounded-md shadow-2xl">
            <div className="rounded-b-xl pb-5">
              <div className="h-fit ">
                <Image
                  src={post.image}
                  alt="Sundarban Image"
                  sizes="w-full h-auto"
                  width={400}
                  height={400}
                  className="w-full h-[300px]"
                />
                <p className="p-5">{post.title}</p>
              </div>
              <div className="flex justify-between px-4 items-center self-end">
                <p>
                  Post Type:
                  {post.premium ? (
                    <span className="text-red-500 font-bold ml-4">Premium</span>
                  ) : (
                    <span className="text-green-500 font-bold ml-4">
                      Public
                    </span>
                  )}
                </p>
                <Button>
                  <Link href={`/news-feed/${post._id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
