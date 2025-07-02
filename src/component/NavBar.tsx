const NavBar = () => {
  <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
    <div className="font-bold text-xl">MyPortfolio</div>
    <ul className="flex list-none gap-6 m-0 p-0">
      <li>
        <a
          href="#home"
          className="text-white no-underline transition-colors duration-200 hover:text-cyan-400"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-white no-underline transition-colors duration-200 hover:text-cyan-400"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="text-white no-underline transition-colors duration-200 hover:text-cyan-400"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-white no-underline transition-colors duration-200 hover:text-cyan-400"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>;
};

export default NavBar;
