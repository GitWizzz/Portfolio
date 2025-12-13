import React from "react";

export default function PortfolioSection() {
  return (
    <section>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Portfolio</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard
          title="Personal Portfolio"
          category="Web Development"
        />
        <ProjectCard
          title="Landing Page"
          category="Frontend"
        />
        <ProjectCard
          title="Dashboard UI"
          category="UI Design"
        />
        <ProjectCard
          title="E-commerce App"
          category="React App"
        />
        <ProjectCard
          title="Blog Platform"
          category="Full Stack"
        />
        <ProjectCard
          title="Mini Tools"
          category="JavaScript"
        />
      </div>
    </section>
  );
}

/* Single project card */
function ProjectCard({ title, category }) {
  return (
    <div className="group bg-[#2a2a2b] rounded-xl overflow-hidden border border-white/5 hover:border-yellow-400/40 transition">
      {/* Image placeholder */}
      <div className="h-40 bg-[#1f1f20] flex items-center justify-center text-xs text-gray-500">
        Project Preview
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-white group-hover:text-yellow-400 transition">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">{category}</p>
      </div>
    </div>
  );
}
