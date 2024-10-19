import React from "react";
import Navber from "./(_component)/shared/Navber";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full overflow-x-hidden h-[calc(100vh-64px)]">
      <div className="w-[250px] bg-slate-600 pt-5 text-white ps-3">
        <Navber />
      </div>
      <div className="flex-1 p-5 border max-h-[100vh] overflow-y-auto userdashboardscrollbar">
        {children}
      </div>
    </div>
  );
}
