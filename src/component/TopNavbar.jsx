import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function TopNavbar() {
  return (
    <nav className="flex gap-6 text-sm border-b border-white/10 pb-3">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          end
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
