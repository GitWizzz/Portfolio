import React from "react";

export default function BlogSection() {
  return (
    <section>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Blog</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Blog list */}
      <div className="mt-8 space-y-4">
        <BlogCard
          title="How I Built My Portfolio with React"
          date="Jan 2025"
          tag="React"
          desc="A simple breakdown of how I structured and built my personal portfolio using React and Tailwind CSS."
        />

        <BlogCard
          title="Understanding useEffect Like a Human"
          date="Dec 2024"
          tag="JavaScript"
          desc="Explaining useEffect in a practical way, without confusing lifecycle jargon."
        />

        <BlogCard
          title="Why Clean Code Matters More Than Fancy Code"
          date="Nov 2024"
          tag="Career"
          desc="Thoughts on writing readable, maintainable code instead of over-complicated solutions."
        />
      </div>
    </section>
  );
}

/* Blog card */
function BlogCard({ title, date, tag, desc }) {
  return (
    <div className="bg-[#2a2a2b] rounded-xl p-5 border border-white/5 hover:border-yellow-400/40 transition">
      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
        <span>{date}</span>
        <span className="w-1 h-1 bg-gray-500 rounded-full" />
        <span className="text-yellow-400">{tag}</span>
      </div>

      <h3 className="text-sm font-medium text-white">{title}</h3>

      <p className="text-xs text-gray-400 mt-2 leading-relaxed max-w-2xl">
        {desc}
      </p>
    </div>
  );
}
