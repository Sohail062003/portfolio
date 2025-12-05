import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("accessToken");
  return (
    <>
      <nav className="max-w-[1200px] mx-auto px-6 pt-[23px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Sohail<span className="text-blue-600">Logo</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {/* home */}
          <li className="relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl px-2 py-1 rounded transition-all duration-300 
                ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            {/* underline animation */}
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-blue-600 rounded transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
                ></span>
              )}
            </NavLink>
          </li>

          {/* about     */}
          <li className="relative group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl px-2 py-1 rounded transition-all duration-300 
                ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              About
            </NavLink>

            {/* underline animation */}
            <NavLink to="/about">
              {({ isActive }) => (
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-blue-600 rounded transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
                ></span>
              )}
            </NavLink>
          </li>

          {/* projects */}
          <li className="relative group">
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `text-xl px-2 py-1 rounded transition-all duration-300 
                ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Projects
            </NavLink>

            {/* underline animation */}
            <NavLink to="/project">
              {({ isActive }) => (
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-blue-600 rounded transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
                ></span>
              )}
            </NavLink>
          </li>

          {/* contact  */}
          <li className="relative group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl px-2 py-1 rounded transition-all duration-300 
                ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Contact
            </NavLink>

            {/* underline animation */}
            <NavLink to="/contact">
              {({ isActive }) => (
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-blue-600 rounded transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
                ></span>
              )}
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/login"
              className="px-5 py-2 text-white bg-blue-600 rounded-lg text-lg font-medium 
               hover:bg-blue-700 transition-all duration-300 shadow-sm"
            >
              Login
            </NavLink>
          </li> */}

          {token ? (
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
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer">
          <span className="text-2xl">☰</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
