import React from "react";

export default function ResumeSection() {
  return (
    <section>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Resume</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Education */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white mb-4">Education</h2>

        <ResumeCard
          title="Bachelor of Computer Science"
          place="Your College Name"
          year="2021 — 2025"
          desc="Focused on web development, data structures, and core computer science subjects."
        />

        <ResumeCard
          title="ICSE – Class 10"
          place="St John's High School"
          year="2019"
          desc="Completed secondary education under ICSE board."
        />
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white mb-4">My Skills</h2>

        <SkillBar label="React" value="80%" />
        <SkillBar label="JavaScript" value="75%" />
        <SkillBar label="Tailwind CSS" value="70%" />
        <SkillBar label="Node.js" value="65%" />
      </div>
    </section>
  );
}

/* Resume card */
function ResumeCard({ title, place, year, desc }) {
  return (
    <div className="bg-[#2a2a2b] rounded-xl p-4 mb-4 border border-white/5">
      <div className="flex justify-between text-sm text-gray-400">
        <span>{place}</span>
        <span>{year}</span>
      </div>

      <h3 className="text-sm font-medium text-white mt-1">{title}</h3>
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

/* Skill bar */
function SkillBar({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-[#2a2a2b] rounded">
        <div
          className="h-2 bg-yellow-400 rounded"
          style={{ width: value }}
        />
      </div>
    </div>
  );
}
