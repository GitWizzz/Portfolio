import React from "react";
import StarfieldBackground from "./StarfieldBackground";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen text-gray-200">
      <StarfieldBackground />
      <div className="relative z-10 flex justify-center px-4 py-8">
        <div className="flex w-full max-w-6xl gap-6">
          <Sidebar />
          <div className="flex-1 bg-[#1e1e1f] rounded-2xl shadow-xl p-6">
            <TopNavbar />
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
