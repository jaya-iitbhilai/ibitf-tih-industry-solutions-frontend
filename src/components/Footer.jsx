import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          Quick Links
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/submit-problem"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Submit a Problem Statement
              </Link>
              <Link
                to="/solutions"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Solutions Hub
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          Connect With Us
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
        <div className="space-x-4 flex justify-center">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#submit" className="hover:underline">
            Submit a Problem
          </a>
          <a href="#solutions" className="hover:underline">
            Solutions Hub
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-sm">
            © 2024 IIT Bhilai Innovation Technologies and Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
