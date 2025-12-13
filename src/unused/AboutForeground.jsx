import React, { useState, useEffect, useRef } from "react";
import StarfieldBackground from "./StarfieldBackground";

export default function AboutForeground() {
  const [mobileVisible, setMobileVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const THRESHOLD = 10;

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastY.current = window.scrollY;

    function handleScroll() {
      const y = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const diff = y - lastY.current;
          if (Math.abs(diff) > THRESHOLD) {
            if (diff > 0 && y > 50) setMobileVisible(false);
            else setMobileVisible(true);
            lastY.current = y;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Web Design", desc: "The most modern and high-quality design made at a professional level." },
    { title: "Web Development", desc: "High-quality development of sites at the professional level." },
    { title: "Mobile Apps", desc: "Professional development of applications for iOS and Android." },
    { title: "App Design", desc: "I design high quality apps at a professional level." },
  ];

  return (
    <div className="relative min-h-screen text-gray-100 font-sans lg:scale-[1.20] lg:origin-top">
      <StarfieldBackground baseStars={3000} speed={1.2}/>


      <div className="relative z-10 flex justify-center items-start pt-14 pb-20 px-4 md:px-6">
        <div className="max-w-[980px] w-full grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-8">

          <aside className="bg-[#111111]/70 backdrop-blur rounded-2xl p-5 md:p-6 shadow-lg shadow-black/60 border border-black/40">
            <div className="flex flex-col md:items-center text-left md:text-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden bg-amber-400">
                <img src="/avatar.png" alt="avatar" className="w-full h-full object-cover" />
              </div>

              <h3 className="mt-4 text-white font-semibold text-lg md:text-lg">Sandeepan Nandi</h3>
              <span className="mt-1 text-xs text-gray-300 inline-block bg-black/40 px-3 py-1 rounded-full">Engineer</span>

              <div className="w-full border-t border-black/30 my-5" />

              <ul className="space-y-4 text-xs text-gray-300 w-full">
                <li className="flex items-start gap-3">
                  <span className="w-6 text-amber-300">✉️</span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Email</div>
                    <div className="mt-1">sandeepannandi@...</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 text-amber-300">📞</span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Phone</div>
                    <div className="mt-1">+91 98009-85253</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 text-amber-300">🎂</span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Birthday</div>
                    <div className="mt-1">August 7, 2006</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 text-amber-300">📍</span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Location</div>
                    <div className="mt-1">West Bengal, India</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex gap-3 text-gray-400">
                <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">🐦</button>
                <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">🔗</button>
                <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">💼</button>
              </div>
            </div>
          </aside>

          <main className="bg-[#111111]/70 backdrop-blur rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/60 border border-black/40">
            <header className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>

                <nav className="hidden md:flex gap-4 items-center text-sm text-gray-300">
                  <a className="px-3 py-1 rounded-md bg-amber-400/10 text-amber-300">About</a>
                  <a className="px-3 py-1 rounded-md hover:bg-white/5">Resume</a>
                  <a className="px-3 py-1 rounded-md hover:bg-white/5">Portfolio</a>
                  <a className="px-3 py-1 rounded-md hover:bg-white/5">Products</a>
                  <a className="px-3 py-1 rounded-md hover:bg-white/5">Blog</a>
                  <a className="px-3 py-1 rounded-md hover:bg-white/5">Contact</a>
                </nav>
              </div>
              

              <div className="h-[2px] bg-black/30 rounded-full w-full" />

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                I'm an AI engineer and developer from West Bengal, India, working in web & app
                development with a passion for deep learning. I enjoy turning complex problems into
                simple, beautiful and intuitive products & solutions.
              </p>
            </header>

            <section className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4">What I'm Doing</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <article key={s.title} className="bg-[#0f0f0f] border border-black/30 rounded-xl p-4 shadow-inner">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-black/40 flex items-center justify-center text-amber-300">🧩</div>
                      <div>
                        <div className="font-semibold">{s.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{s.desc}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Testimonials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <blockquote className="bg-[#0f0f0f] rounded-xl p-4 shadow-inner border border-black/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">🙂</div>
                    <div>
                      <div className="font-semibold">Josh Mohrer</div>
                      <p className="text-xs text-gray-400 mt-1">Sandeepan was hired to redesign and rebuild our Wave app...</p>
                    </div>
                  </div>
                </blockquote>

                <blockquote className="bg-[#0f0f0f] rounded-xl p-4 shadow-inner border border-black/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">👨‍💻</div>
                    <div>
                      <div className="font-semibold">Chris</div>
                      <p className="text-xs text-gray-400 mt-1">Sandeepan developed custom Android widgets for our app...</p>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div className="mt-6">
                <div className="h-1 rounded-full bg-gradient-to-r from-amber-400/80 to-transparent w-1/3" />
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Clients</h3>
              <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/20 flex items-center justify-center">🟦</div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/20 flex items-center justify-center">⬜</div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/20 flex items-center justify-center">⭕</div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/20 flex items-center justify-center">🔲</div>
              </div>
            </section>

          </main>
        </div>
      </div>

      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-4 w-[calc(100%_-_40px)] md:hidden 
          transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] z-50
          ${mobileVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="bg-[#0f0f0f]/95 border border-black/40 rounded-3xl p-4 flex items-center justify-between shadow-2xl backdrop-blur-md">
          <button className="flex items-center gap-3 text-base font-semibold text-amber-300 bg-black/60 px-4 py-3 rounded-xl shadow-inner transition-transform duration-300 active:scale-95">
            About
          </button>

          <div className="flex gap-2 text-base text-gray-300">
            {["Resume", "Portfolio", "Products", "Blog", "Contact"].map((t) => (
              <button key={t} className="px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 active:scale-95">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
