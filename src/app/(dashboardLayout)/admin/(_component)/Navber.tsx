import { List, MessageSquarePlus, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navber() {
  const navberItem = [
    {
      path: "category",
      label: "Mange Category",
      icon: <List size={20} />,
    },
    {
      path: "user",
      label: "Mange User",
      icon: <User size={20} />,
    },

    {
      path: "post",
      label: "Mange Post",
      icon: <MessageSquarePlus size={20} />,
    },
  ];
  return (
    <div>
      {navberItem.map((item, index) => (
        <div key={index} className="flex gap-2 justify-start items-center my-2">
          <span className="text-sm">{item.icon}</span>
          <Link href={`${item.path}`} key={item.path}>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
