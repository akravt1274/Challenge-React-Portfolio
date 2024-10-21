import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const isActiveClass = ({ isActive }) =>
    isActive
      ? "text-white bg-[#818cf8] hover:bg-[#a5b4fc] hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-[#a5b4fc] hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-500 border-b border-indigo-500">
      <div className="flex items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex-wrap h-20 content-center flex-1 md:items-stretch md:justify-start">
          <NavLink to="/">
            <span className="hidden md:block text-white text-4xl font-bold ml-2">
              Anastasia
            </span>
          </NavLink>
        </div>
        <div className="flex flex-end  md:items-stretch md:justify-start">
          <NavLink to="/about" className={isActiveClass}>
            About Me
          </NavLink>
          <NavLink to="/portfolio" className={isActiveClass}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={isActiveClass}>
            Contact
          </NavLink>
          <NavLink to="/resume" className={isActiveClass}>
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
