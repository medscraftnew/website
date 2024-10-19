import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/Logo/Logo.png";
import BookATestButton from "@/components/ui/BookaTestButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 ${
          scrolling ? "bg-white" : "bg-transparent"
        } border-gray-200 dark:bg-gray-900 lg:py-3 md:py-2 py-3 px-4 pr-6`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <NavLink
            to="/"
            className="flex flex-col items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="lg:h-12 md:h-12 h-8"
              alt="MedsCraft Logo"
            />
            <span className="self-center lg:text-2xl md:text-2xl font-semibold whitespace-nowrap text-[#13A7E7] dark:text-white">
              Meds<span className="text-[#DD6F8C]">Craft</span>
            </span>
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            } ${isMenuOpen ? "bg-white" : ""} md:bg-transparent`}
            id="navbar-cta"
          >
            <ul className="flex flex-col items-center text-md font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 font-bold md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 font-bold md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/OurServices"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 font-bold md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Our Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/CreateAbha"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 font-bold md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Create ABHA Card
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 font-bold md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <div>
                <BookATestButton />
            </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
