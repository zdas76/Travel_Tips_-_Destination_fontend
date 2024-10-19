/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

import { Button, Divider } from "@nextui-org/react";
import { Edit2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getLoginUser } from "@/actions/userAction";
import ProfilePost from "../(_component)/post/ProfilePost";

export default async function page() {
  const User:any = await getLoginUser();
  const LUser = User?.data;

  return (
    <section className="">
      <div className="container mx-auto px-3">
        <div className="flex sticky top-[-200px] z-50 bg-white">
          <div className="p-5">
            <Image
              src={LUser?.profileImage}
              alt="User Image"
              width={250}
              height={250}
            />
          </div>
          <div className="ps-14 mb-0 flex-1 self-end">
            <p className="font-bold text-2xl my-5">{LUser?.name}</p>
            <div className="flex justify-between">
              <p className="space-x-7">
                <span>{LUser?.follower?.totalFollow} followers</span>
                <span>{LUser?.following?.totalFollowing} following</span>
              </p>
              <Button>
                <Edit2Icon />
                Edite Profile
              </Button>
            </div>
          </div>
        </div>
        <Divider className="my-5" />
        <div className="">
          <div className="flex max-h-screen md:min-w-fit gap-5 overflow-auto relative">
            <div>
              <div className="bg-white shadow-xl max-w-auto p-3 border">
                <div className="">
                  <p className="text-xl font-bold mb-3">Persona Info</p>
                  <p>Addrss: {LUser?.address}</p>
                  <p>Email: {LUser?.email}</p>
                  <p>Contact No.: {LUser?.phone}</p>
                  <p>User Status.: {LUser?.status}</p>
                </div>
                <div className="my-10">
                  <p>Photos</p>
                </div>
                <div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="h-full overflow-y-auto">
                <ProfilePost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
//
