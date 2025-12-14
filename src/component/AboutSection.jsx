import React from "react";
import swoc from "../assets/Images/swoc.png";

export default function AboutSection() {
  return (
    <section className="font-medium">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-semibold text-white">About Me</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-2xl">
        I’m a web developer from India, working in web development and building
        clean, user-friendly interfaces. I enjoy turning complex problems into
        simple, beautiful solutions.
      </p>

      <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-2xl">
        Look at my projects in my socials. You will never regret hiring me.
      </p>

      {/* What I'm Doing */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          What I’m Doing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            title="Web Design"
            desc="Modern and clean designs made with attention to detail."
            icon="https://sandicodes.me/assets/images/icon-design.svg"
          />
          <ServiceCard
            title="Web Development"
            desc="High-quality development of sites using modern tech."
            icon="https://sandicodes.me/assets/images/icon-dev.svg"
          />
          <ServiceCard
            title="Open Source"
            desc="Open and collaborative projects built with clean code."
            icon="https://img.icons8.com/?size=100&id=LuXk2sw4rJVF&format=png&color=000000"
          />
          <ServiceCard
            title="Build & Learning"
            desc="Continuously learning and building real-world projects."
            icon="https://img.icons8.com/?size=100&id=74270&format=png&color=000000"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Code Contributions
        </h2>

        <div className="relative rounded-2xl border border-white/10 bg-[#1b1b1e] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="flex justify-between px-6 py-5 border-b border-white/10">
            <a
              href="https://www.liquidgalaxy.eu/2024/11/unique-post-for-gsoc-2025-at-liquid.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group/program flex items-center gap-3 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-500 group-hover/program:bg-white/10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9U6Bmi1rYLZjOMmaDjeQsjawxdtIo44Fvg&s"
                  alt="GSoC"
                  className="w-5 h-5 opacity-80 group-hover/program:opacity-100"
                />
              </div>
              <div>
                <div className="text-sm font-medium text-white">GSoC</div>
                <div className="text-xs text-gray-400">
                  Google Summer of Code
                </div>
              </div>
            </a>

            <a
              href="https://www.holopin.io/hacktoberfest2025/userbadge/cmh713ore0018la04h3gnt5vt"
              target="_blank"
              rel="noopener noreferrer"
              className="group/program flex items-center gap-3 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-500 group-hover/program:bg-white/10">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQHvrW3D7Y8KLg/company-logo_200_200/B4EZgeE0SVGoAI-/0/1752851236403/hacktoberfest_logo?e=2147483647&v=beta&t=GcrwI6JHLEqcZ_wc2YHhb4n2GZx6Z_jJ_8_LQxM8wZY"
                  alt="Hacktoberfest"
                  className="w-5 h-5 opacity-80 group-hover/program:opacity-100"
                />
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  Hacktoberfest
                </div>
                <div className="text-xs text-gray-400">DigitalOcean</div>
              </div>
            </a>

            <a
              href="https://swoc.scriptindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/program flex items-center gap-3 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-500 group-hover/program:bg-white/10">
                <img
                  src={swoc}
                  alt="SWOC"
                  className="w-5 h-5 opacity-80 group-hover/program:opacity-100"
                />
              </div>
              <div>
                <div className="text-sm font-medium text-white">SWOC</div>
                <div className="text-xs text-gray-400">
                  Script Winter of Code
                </div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-3 px-6 py-6">
            <div className="group relative text-center transition-all duration-500">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20 animate-[pulse_4s_ease-in-out_infinite] group-hover:opacity-40" />
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40 animate-[bounce_2.5s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl font-semibold text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                350+
              </div>
              <div className="text-sm text-gray-400 mt-1 transition-all duration-500 group-hover:text-gray-200 group-hover:translate-y-1">
                Commits
              </div>
              <div className="mx-auto mt-3 h-[2px] w-10 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-white/60" />
            </div>

            <div className="group relative text-center transition-all duration-500">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20 animate-[pulse_4s_ease-in-out_infinite] group-hover:opacity-40" />
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40 animate-[bounce_2.5s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl font-semibold text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                18
              </div>
              <div className="text-sm text-gray-400 mt-1 transition-all duration-500 group-hover:text-gray-200 group-hover:translate-y-1">
                Open Source PRs
              </div>
              <div className="mx-auto mt-3 h-[2px] w-10 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-white/60" />
            </div>

            <div className="group relative text-center transition-all duration-500">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20 animate-[pulse_4s_ease-in-out_infinite] group-hover:opacity-40" />
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40 animate-[bounce_2.5s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl font-semibold text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                25+
              </div>
              <div className="text-sm text-gray-400 mt-1 transition-all duration-500 group-hover:text-gray-200 group-hover:translate-y-1">
                Repositories
              </div>
              <div className="mx-auto mt-3 h-[2px] w-10 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/15 via-transparent to-zinc-300/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
      <div className="relative bg-[#1f1f21] rounded-xl p-5 border border-white/10 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:border-white/30 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]">
        <span className="absolute top-0 left-6 h-[2px] w-24 bg-gradient-to-r from-white/80 via-zinc-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 transition-colors duration-500 group-hover:bg-white/10">
            <img
              src={icon}
              alt={title}
              className="w-8 h-8 opacity-80 group-hover:opacity-100"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
