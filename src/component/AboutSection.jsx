import React from "react";

export default function AboutSection() {
  return (
    <section>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">About Me</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-2xl">
        I’m a web developer from India, working in web development and
        building clean, user-friendly interfaces. I enjoy turning complex
        problems into simple, beautiful solutions.
      </p>

      <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-2xl">
        My focus is React, modern CSS, and creating smooth user experiences.
      </p>

      {/* What I'm Doing */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white mb-4">
          What I’m Doing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            title="Web Design"
            desc="Modern and clean designs made with attention to detail."
          />
          <ServiceCard
            title="Web Development"
            desc="High-quality development of sites using modern tech."
          />
          <ServiceCard
            title="Mobile Apps"
            desc="Professional development of applications."
          />
          <ServiceCard
            title="App Design"
            desc="Simple and intuitive UI/UX for apps."
          />
        </div>
      </div>
    </section>
  );
}

/* Small helper, still human-coded */
function ServiceCard({ title, desc }) {
  return (
    <div className="bg-[#2a2a2b] rounded-xl p-4 border border-white/5">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
