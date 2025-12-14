import React from "react";
import profilePic from "../assets/Images/minecraft.jpg";

export default function Sidebar() {
  return (
    <aside className="w-[290px] bg-[#1e1e1f] rounded-2xl shadow-xl p-6 hidden lg:block self-start sticky top-8">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-36 h-36 rounded-2xl bg-[#2a2a2b] mb-4 flex items-center justify-center overflow-hidden">
          <img className="w-15 h-15" src={profilePic} alt="profile" />
        </div>
        <div />
        <h2 className="text-lg font-semibold">SHIVAM KUMAR</h2>
        <p className="mt-2 inline-block px-4 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20">
          Developer
        </p>
      </div>

      <hr className="border border-gray-700 mb-8" />

      <div className="mt-6 space-y-8 text-sm">
        {/* EMAIL */}
        <div className="flex items-center gap-4">
          <div className=" w-12 h-12 rounded-xl bg-gradient-to-br from-[#2f2f30] to-[#1f1f20] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_8px_18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),_0_12px_24px_rgba(0,0,0,0.6)]">
            <img
              src="https://img.icons8.com/?size=100&id=RJ6ahOM0ISgh&format=png&color=FFDB6E"
              alt="email"
              className="w-6 h-6"
            />
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Email
            </p>
            <p className="text-gray-200 truncate max-w-[180px]">
              shivamtillak@gmail.com
            </p>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-4">
          <div className=" w-12 h-12 rounded-xl bg-gradient-to-br from-[#2f2f30] to-[#1f1f20] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_8px_18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),_0_12px_24px_rgba(0,0,0,0.6)]">
            <img
              src="https://img.icons8.com/?size=100&id=2olGSGqpqGWD&format=png&color=FFDB6E"
              alt="email"
              className="w-6 h-6"
            />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Phone{" "}
            </p>
            <p className="text-gray-200">+91 6205965749</p>
          </div>
        </div>

        {/* BIRTHDAY */}
        <div className="flex items-center gap-4">
          <div className=" w-12 h-12 rounded-xl bg-gradient-to-br from-[#2f2f30] to-[#1f1f20] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_8px_18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),_0_12px_24px_rgba(0,0,0,0.6)]">
            <img
              src="https://img.icons8.com/?size=100&id=8yG2a6v2mm3S&format=png&color=FFDB6E"
              alt="email"
              className="w-6 h-6"
            />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Birthday
            </p>
            <p className="text-gray-200">April 1, 2004</p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-4">
          <div className=" w-12 h-12 rounded-xl bg-gradient-to-br from-[#2f2f30] to-[#1f1f20] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_8px_18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),_0_12px_24px_rgba(0,0,0,0.6)]">
            <img
              src="https://img.icons8.com/?size=100&id=17016&format=png&color=FFDB6E"
              alt="email"
              className="w-6 h-6"
            />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Location
            </p>
            <p className="text-gray-200">Bihar, India</p>
          </div>
        </div>
      </div>
      
       
    <div className="mb-3 mt-2 pt-6 border-t border-white/5">
  <div className="flex items-center justify-center gap-7">
    <a href="https://github.com/GitWizzz" target="_blank" rel="noreferrer" className="group transition-transform duration-300 hover:-translate-y-1 hover:scale-125"><img src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF" alt="GitHub" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-all duration-300" /></a>
    <a href="https://x.com/shivamtillak" target="_blank" rel="noreferrer" className="group transition-transform duration-300 hover:-translate-y-1 hover:scale-125"><img src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=FFFFFF" alt="Twitter" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-all duration-300" /></a>
    <a href="https://www.linkedin.com/in/shivam-kumarn/" target="_blank" rel="noreferrer" className="group transition-transform duration-300 hover:-translate-y-1 hover:scale-125"><img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-all duration-300" /></a>
    <a href="#" className="group transition-transform duration-300 hover:-translate-y-1 hover:scale-125"><img src="https://img.icons8.com/?size=100&id=5RKOijedhIGw&format=png&color=FFFFFF" alt="Discord" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-all duration-300" /></a>
    <a href="#" className="group transition-transform duration-300 hover:-translate-y-1 hover:scale-125"><img src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF" alt="YouTube" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-all duration-300" /></a>
  </div>
</div>


    </aside>
  );
}
