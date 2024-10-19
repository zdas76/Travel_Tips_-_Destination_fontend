/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

import { getCurrentUser } from "@/actions/authActions";
import { getPostById } from "@/actions/UserPostAction";
import Comments from "@/components/shared/Comments";
import { Avatar, Divider  } from "@nextui-org/react";
import { format } from "date-fns";

import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import SiteDorpdown from "@/components/shared/siteDorpdown";

export default async function page({ params }: { params: { postId: string } }) {
  const id = params.postId;

  const user = await getCurrentUser();

  if (!user?.email && !user?.role) {
    redirect("/login");
  }

  const post: any = await getPostById(id);

  if (!post?.success) {
    toast.error("Failed to retived post");
  }

  const viewPost = post?.data;
  
  return (
    <div className="container mx-auto mt-5 min-h-[calc(100vh-64px)] ">
      <div className="bg-[url('/post/postBanner.jpg')] ">
        <Image
          src="/post/postBanner.jpg"
          alt="Post Banner Image"
          width={720}
          height={250}
          className="w-full"
        />
      </div>
      <Divider className="my-16" />
      <div className="w-full md:max-w-4xl p-3 mx-auto">
        <div>
          <p className="text-2xl my-4 font-bold">{viewPost?.title}</p>

          <Image
            src={viewPost.image}
            alt="Images"
            width={500}
            height={300}
            className="w-full mb-3 "
          />
          <div className="flex gap-5 border-b-5 my-2">
            <div className="mb-3">
              <Avatar src={viewPost?.userId?.profileImage} size="lg" />
            </div>
            <div className="flex justify-between">
              <div>
                <p> {viewPost.userId.name}</p>
                {format(
                  new Date(viewPost?.userId?.createdAt),
                  "dd MMMM HH:mm:ss"
                )}
              </div>
              <div>{/* <p>Followers : {viewPost.userId.followers}</p> */}</div>
            </div>
          </div>
        </div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: `${viewPost?.description}`,
          }}
        ></div>

        <div>
          <p>commends</p>
          {viewPost?.comments?.map((comment: any, idx: number) => (
            <div key={idx} className="p-2 border-b-1">
              <div className="flex justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <Avatar src={comment?.userId?.profileImage} size="md" />

                  <div className="bg-slate-100 w-full px-2 rounded-sm">
                    <h3 className="font-semibold text-md">
                      {comment?.userId?.name}
                    </h3>
                    <p className="text-md text-justify">{comment?.comment}</p>
                  </div>
                </div>
                <div>
                  <SiteDorpdown {...comment}  />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-2">
          <Comments id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
