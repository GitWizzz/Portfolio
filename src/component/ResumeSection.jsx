import React from "react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Resume</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      {/* Education */}
      <div className="mt-8 mb-4">
        <h2 className="text-2xl font-semibold text-white mb-2">Education</h2>

        <div className="relative border-l border-white/10 pl-6 space-y-8">
          <TimelineItem
            title="B.Tech, Computer Science & Engineering (Cyber Security)"
            place="Aryabhatta Knowledge University"
            year="2022 — 2026"
            desc="Focused on full-stack web development, REST APIs, databases, and core computer science fundamentals. Actively involved in internships, projects, and open-source contributions."
          />
        </div>
      </div>
          <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="mt-3 mb-4">
        <h2 className="text-2xl font-semibold text-white mb-2">Experience</h2>

        <div className="relative border-l border-white/10 pl-6 space-y-4">
          <TimelineItem
            title="MERN Stack Developer Intern"
            place="Devstreak"
            year="Present"
            desc="Working with the core team to build scalable web applications using React.js, Node.js, Express, and PostgreSQL. Managing tasks with Jira, improving UI components, and contributing to production-ready features."
          />


          <TimelineItem
            title="Application Developer Intern"
            place="Startup"
            year="Jan 2025 — Feb 2025"
            desc="Worked on web application development, API integration, and testing using Postman. Collaborated with senior developers to implement features, fix bugs, and participate in team discussions."
          />
        </div>
      </div>
          <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Technical Stack */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white mb-6 ">Technical Stack</h2>

        <div className="flex flex-wrap gap-4">
          <TechStackTag
            name="React"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
          />
          <TechStackTag
            name="JavaScript"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg"
          />
          <TechStackTag
            name="Node.js"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg"
          />
          <TechStackTag
            name="Express.js"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg"
          />
          <TechStackTag
            name="PostgreSQL"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg"
          />
          <TechStackTag
            name="Tailwind CSS"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg"
          />
          <TechStackTag
            name="Firebase"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg"
          />
          <TechStackTag
            name="Git"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg"
          />
          <TechStackTag
            name="GitHub"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
          />
          <TechStackTag
            name="REST API"
            icon="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg"
          />
        </div>
      </div>
    </section>
  );
}

/* Resume card */

function TimelineItem({ title, place, year, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline dot */}
      <span className="absolute -left-[29px] top-2 w-2.5 h-2.5 bg-yellow-400 rounded-full" />

      <div className="space-y-2">
        <div className="flex flex-wrap justify-between text-sm text-gray-400">
          <span>{place}</span>
          <span>{year}</span>
        </div>

        <h3 className="text-base font-medium text-white leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* Tech stack tag */
function TechStackTag({ name, icon }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-[#2a2a2b] border border-white/10 rounded-xl hover:scale-105 hover:border-yellow-400/40 transition">
      <img
        src={icon}
        alt={name}
        className="w-6 h-6 invert opacity-90"
        draggable="false"
      />
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  );
}
