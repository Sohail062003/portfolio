import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  // const token = localStorage.getItem("accessToken");
  // const token = useAuth();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Sohail<span className="text-blue-600">Logo</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-xl px-2 py-1 transition-all duration-300 
                  ${
                    isActive
                      ? "font-bold text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>

              <NavLink to={link.path}>
                {({ isActive }) => (
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 rounded transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                )}
              </NavLink>
            </li>
          ))}
           
           {/* {token ? (
            <li>
              <NavLink
                to="/admin"
                className="px-5 py-2 text-white bg-green-600 rounded-lg text-lg font-medium 
                hover:bg-green-700 transition-all duration-300 shadow-sm"
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="px-5 py-2 text-white bg-blue-600 rounded-lg text-lg font-medium 
                hover:bg-blue-700 transition-all duration-300 shadow-sm"
              >
                Login
              </NavLink>
            </li>
          )} */}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden 
        ${open ? "max-h-[400px] py-5" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col items-start gap-5 px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center w-full px-4 py-3
                rounded-lg transition-all duration-300

                hover:bg-gray-100 hover:shadow-sm 
                hover:pl-5

                ${
                  isActive
                    ? "font-semibold text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700"
                }
                `
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* {token ? (
            <NavLink
              to="/admin"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-white bg-green-600 rounded-lg text-lg font-medium"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg text-lg font-medium"
            >
              Login
            </NavLink>
          )} */}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
