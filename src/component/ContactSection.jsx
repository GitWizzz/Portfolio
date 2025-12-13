import React from "react";

export default function ContactSection() {
  return (
    <section>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Contact</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2" />
      </div>

      <p className="mt-4 text-sm text-gray-400 max-w-xl">
        Feel free to reach out for collaborations, internships, or just a
        friendly chat.
      </p>

      {/* Contact cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ContactCard label="Email" value="shivamtillak@gmail.com" />
        <ContactCard label="Location" value="India" />
      </div>

      {/* Form */}
      <form className="mt-8 bg-[#2a2a2b] rounded-xl p-5 border border-white/5">
        <h2 className="text-sm font-medium text-white mb-4">
          Send me a message
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#1f1f20] text-sm text-gray-200 rounded-lg px-4 py-3 outline-none border border-white/5 focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Your email"
            className="bg-[#1f1f20] text-sm text-gray-200 rounded-lg px-4 py-3 outline-none border border-white/5 focus:border-yellow-400"
            required
          />
        </div>

        <textarea
          placeholder="Your message"
          rows="4"
          className="mt-4 w-full bg-[#1f1f20] text-sm text-gray-200 rounded-lg px-4 py-3 outline-none border border-white/5 focus:border-yellow-400"
        />

        <button
          type="button"
          className="mt-4 bg-yellow-400 text-black text-sm font-medium px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
          submit
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

/* Small info card */
function ContactCard({ label, value }) {
  return (
    <div className="bg-[#2a2a2b] rounded-xl p-4 border border-white/5">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm text-white mt-1">{value}</p>
    </div>
  );
}
