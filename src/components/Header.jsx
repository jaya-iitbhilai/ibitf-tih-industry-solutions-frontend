import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Logo } from "../assets"

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Submit a Problem Statement", path: "/submit-problem" },
  { name: "Solutions Hub", path: "/solutions" },
  { name: "Contact Us", path: "/contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md  sticky top-0 z-50">
      <div className="max-w-screen-2xl px-20 mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 ">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <span className="text-2xl font-semibold whitespace-nowrap text-(--dark-blue-color) dark:text-white ">
            IBITF
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          id="navbar-menu"
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-green-500"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
