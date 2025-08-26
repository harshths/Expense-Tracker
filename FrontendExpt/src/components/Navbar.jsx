import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
    { path: "/", label: "Home" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-black dark:border-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-black dark:text-white">
          Expense Tracker
        </h1>
        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                location.pathname === link.path ? "underline font-semibold" : ""
              } text-black border border-black hover:text-white hover:bg-black px-3 py-1 rounded-md  dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="px-3 py-1 border border-black dark:border-white 
                       bg-black dark:bg-white 
                       text-white dark:text-black 
                       rounded transition"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
