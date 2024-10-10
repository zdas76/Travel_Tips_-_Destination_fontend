import React from "react";
import Navber from "./(_component)/Navber";

export default function AdminDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-[250px] bg-slate-600 pt-5 text-white ps-3">
        <Navber />
      </div>
      <div className="flex-1 min-w-fit p-5 border">{children}</div>
    </div>
  );
}
