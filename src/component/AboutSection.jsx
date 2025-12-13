import React from "react";

export default function AboutSection() {
  return (
    <section className="font-medium">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-semibold text-white">About Me</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Description */}
      <p className="mt-4 text-m text-gray-400 leading-relaxed max-w-2xl">
        I’m a web developer from India, working in web development and building
        clean, user-friendly interfaces. I enjoy turning complex problems into
        simple, beautiful solutions.
      </p>

      <p className="mt-3 text-m text-gray-400 leading-relaxed max-w-2xl">
        Look at my projects in my socials. You will never regret hiring me.
      </p>

      {/* What I'm Doing */}
      <div className="mt-10">
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



<div className="mt-16">
  <h2 className="text-2xl font-semibold text-white mb-6">
    Code Contributions
  </h2>

  <div
    className="
      relative rounded-2xl
      border border-white/10
      bg-[#1b1b1e]
      overflow-hidden
      group
    "
  >
    {/* soft sheen */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/5 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700
      "
    />

    {/* Programs */}
<div className="flex justify-between px-6 py-5 border-b border-white/10">
  {[
    {
      name: "GSoC",
      org: "Google Summer of Code",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9U6Bmi1rYLZjOMmaDjeQsjawxdtIo44Fvg&s",
      link: "https://summerofcode.withgoogle.com/",
    },
    {
      name: "Hacktoberfest",
      org: "DigitalOcean",
      icon: "/assets/images/hacktoberfest.svg",
      link: "https://hacktoberfest.com/",
    },
    {
      name: "SWOC",
      org: "Script Winter of Code",
      icon: "/assets/images/swoc.svg",
      link: "https://swoc.scriptindia.org/",
    },
  ].map((p) => (
    <a
      key={p.name}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group/program flex items-center gap-3
        transition-all duration-500
        hover:-translate-y-1
      "
    >
      {/* icon */}
      <div
        className="
          w-10 h-10 rounded-lg
          flex items-center justify-center
          bg-white/5 border border-white/10
          transition-all duration-500
          group-hover/program:bg-white/10
        "
      >
        <img
          src={p.icon}
          alt={p.name}
          className="w-5 h-5 opacity-80 group-hover/program:opacity-100"
        />
      </div>

      {/* text */}
      <div>
        <div className="text-sm font-medium text-white">
          {p.name}
        </div>
        <div className="text-xs text-gray-400">
          {p.org}
        </div>
      </div>
    </a>
  ))}
</div>

    {/* Stats */}
    <div className="grid grid-cols-3 px-6 py-6">
      {[
        { value: "420+", label: "Commits" },
        { value: "18", label: "Open Source PRs" },
        { value: "25+", label: "Repositories" },
      ].map((s) => (
        <div
          key={s.label}
          className="
            relative text-center
            transition-all duration-500
            hover:text-white
          "
        >
          <div
            className="
              text-4xl font-semibold text-white
              transition-transform duration-500
              hover:scale-105
            "
          >
            {s.value}
          </div>

          <div className="text-sm text-gray-400 mt-1">
            {s.label}
          </div>

          {/* underline */}
          <div
            className="
              mx-auto mt-3 h-[2px] w-10
              bg-white/20
              transition-all duration-500
              hover:w-16 hover:bg-white/40
            "
          />
        </div>
      ))}
    </div>
  </div>
</div>


    </section>
  );
}

/* Small helper, still human-coded */
function ServiceCard({ title, desc, icon }) {
  return (
    <div className="relative group">
      {/* Soft silver aura */}
      <div
        className="
          absolute inset-0 rounded-xl
          bg-gradient-to-br from-white/15 via-transparent to-zinc-300/10
          opacity-0 group-hover:opacity-100
          blur-lg
          transition-opacity duration-500
        "
      />

      {/* Card */}
      <div
        className="
          relative bg-[#1f1f21] rounded-xl p-5
          border border-white/10
          transition-all duration-500 ease-out
          group-hover:-translate-y-2 group-hover:scale-[1.03]
          group-hover:border-white/30
          group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]
        "
      >
        {/* Divine accent line */}
        <span
          className="
            absolute top-0 left-6 h-[2px] w-24
            bg-gradient-to-r from-white/80 via-zinc-200/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />

        {/* Content */}
        <div className="flex items-start gap-4">
          {/* Icon block */}
          <div
            className="
              flex-shrink-0 w-12 h-12 rounded-lg
              flex items-center justify-center
              bg-white/5 border border-white/10
              transition-colors duration-500
              group-hover:bg-white/10
            "
          >
            <img
              src={icon}
              alt={title}
              className="w-10 h-10 opacity-80 group-hover:opacity-100"
            />
          </div>

          {/* Text block */}
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>

            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

