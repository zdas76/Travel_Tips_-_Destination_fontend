import React from "react";
import CreatePostModal from "../(_component)/post/PostModal";

export default function PostManagementPage() {
  return (
    <div>
      <div className="bg-slate-500 p-5 rounded-md text-white flex justify-between">
        <div className="uppercase text-2xl font-bold "> Post List</div>
        <div>
          <CreatePostModal />
        </div>
      </div>
      <div></div>
    </div>
  );
}
