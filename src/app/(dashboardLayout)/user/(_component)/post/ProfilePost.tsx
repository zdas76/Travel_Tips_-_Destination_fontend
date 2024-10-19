/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLoginUserPost } from "@/actions/UserPostAction";
import { TUser } from "@/types/auth";

import { Button } from "@nextui-org/react";
import { format } from "date-fns";
import { ThumbsDown, ThumbsUp } from "lucide-react";

import Image from "next/image";

export default async function ProfilePost() {
  const data:any = await getLoginUserPost();
  return (
    <div className="">
      {data?.data?.map((post:any, idx: number) => (
        <div className="flex flex-col shadow-xl mb-4 border" key={idx}>
          <div className="p-2 flex gap-4">
            <Image
              src={post?.userId?.profileImage}
              width={50}
              height={50}
              alt="Auth Image"
            />
            <div>
              <p className="font-bold">{post?.userId?.name}</p>
              <p>
                {format(new Date(post?.userId?.createdAt), "dd MMMM HH:mm:ss")}
              </p>
            </div>
          </div>
          <div>
            <Image
              alt="Post Iamge"
              src={post?.image}
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="p-3 h-full">
            <p className="text-xl font-bold">{post.title}</p>
            <div
              className="text-justify line-clamp-5"
              dangerouslySetInnerHTML={{
                __html: `${post.description}`,
              }}
            ></div>
          </div>
          <div className="p-3 ">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold md:text-xl">
                <span className="underline mr-3">comments</span>
                <span className="text-sm">({post.comments.length})</span>
              </h2>
              <div className="flex gap-3">
                <p>
                  <span>{post.totalUpVotes}</span>
                  <ThumbsUp size={30} color="blue" />
                </p>
                <p>
                  <span>{post.totalDownVotes}</span>
                  <ThumbsDown size={30} />
                </p>
                <Button variant="light">Vidw </Button>
              </div>
            </div>
            {post.comments
              .slice(0, 3)
              .map(
                (comment: { userId: TUser; comment: string }, idx: number) => (
                  <div key={idx} className="p-2 md:p-4">
                    <div>
                      <div className="flex items-start gap-3">
                        <Image
                          src={`${comment?.userId?.profileImage}`}
                          className="size-12 rounded-full"
                          width={100}
                          height={100}
                          alt={comment?.userId?.name}
                        />
                        <div>
                          <h3 className="font-semibold md:text-lg">
                            {comment?.userId?.name}
                          </h3>
                          <p className="md:text-lg">{comment?.comment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      ))}
    </div>
  );
}
