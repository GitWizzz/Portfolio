import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-[#1e1e1f] rounded-2xl shadow-xl p-6 hidden lg:block">
      <div className="flex flex-col items-center text-center">
        {/* Avatar placeholder */}
        <div className="w-28 h-28 rounded-2xl bg-[#2a2a2b] mb-4" />

        <h2 className="text-lg font-semibold">Your Name</h2>
        <p className="text-sm text-gray-400 mt-1">Developer</p>
      </div>

      <div className="mt-8 space-y-4 text-sm">
        <div className="h-3 bg-[#2a2a2b] rounded w-full" />
        <div className="h-3 bg-[#2a2a2b] rounded w-4/5" />
        <div className="h-3 bg-[#2a2a2b] rounded w-3/5" />
      </div>
    </aside>
  );
}
