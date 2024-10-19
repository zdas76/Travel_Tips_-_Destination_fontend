import { SignpostBig, UserRoundPen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navber() {
  const navberItem = [
    {
      path: "user/profile",
      label: "My Profile",
      icon: <UserRoundPen size={20} />,
    },
    {
      path: "user/create-post",
      label: "Create Post",
      icon: <SignpostBig size={20} />,
    },
  ];
  return (
    <div>
      {navberItem.map((item, index) => (
        <div key={index} className="flex gap-2 justify-start items-center my-2">
          <span className="text-sm">{item.icon}</span>
          <Link key={item.path} href={`/${item.path}`}>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
