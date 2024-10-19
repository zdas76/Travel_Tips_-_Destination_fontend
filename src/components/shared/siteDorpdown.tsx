'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import CommentUpdate from "../modal/CommentUpdate";


export default function SiteDorpdown(comment: any) {
  
  return (
    <Dropdown>
      <DropdownTrigger>
      <EllipsisVertical className="cursor-pointer" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example">
        <DropdownItem key="edit" closeOnSelect={false}  >
          <CommentUpdate {...comment} />
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
