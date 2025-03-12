"use client"
import { useState } from "react";
import localFont from "next/font/local";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";

const zaptron = localFont({ src: "../../public/Zaptron-Regular.otf" })

const footballLinks = [
  { title: "Local & Global Leagues", href: "#" },
  { title: "Match Analysis", href: "#" },
  { title: "Player Spotlight", href: "#" },
  { title: "Exclusive Interviews", href: "#" },
  { title: "Stats Hub", href: "#" },
  { title: "Discussion Topics", href: "#" },
];

const esportsLinks = [
  { title: "Game News", href: "#" },
  { title: "Tournaments", href: "#" },
  { title: "Teams & Players", href: "#" },
  { title: "Pro Interviews", href: "#" },
  { title: "Tips & Guides", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string>("");

  return (
    <header
      className="bg-teal-800 text-white"
      onClick={() => setActiveDropdown("")}
    >
      {/* Top header with logo and branding */}
      <div className={`${zaptron.className} container mx-auto px-4 py-4`}>
        <div className="flex items-center justify-between">
          {/* Logo and branding */}
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="h-fit text-2xl text-primary">Esport<span className="text-secondary">egy</span></h1>
              <p className="text-sm text-gray-100">
                Your Gateway to Sports & Esports
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FaBars size={24} />
          </button>

          {/* Social media icons - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-400" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-400" />
            <FaYoutube className="w-5 h-5 cursor-pointer hover:text-orange-400" />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className={`bg-teal-900 ${isOpen ? "block" : "hidden"} md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">
            {/* Navigation links */}
            <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Home
                </a>
              </li>

              {/* Football Dropdown */}
              <li className="relative">
                <button
                  className="flex items-center hover:text-orange-400"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "football" ? "" : "football"
                    )
                  }
                >
                  Football <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === "football" && (
                  <div className="absolute z-50 mt-2 w-64 bg-teal-800 rounded-md shadow-lg">
                    <div className="py-1">
                      {footballLinks.map((link) => (
                        <a
                          key={link.title}
                          href={link.href}
                          className="block px-4 py-2 text-sm hover:bg-teal-700 hover:text-orange-400"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Esports Dropdown */}
              <li className="relative">
                <button
                  className="flex items-center hover:text-orange-400"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "esports" ? "" : "esports"
                    )
                  }
                >
                  Esports <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === "esports" && (
                  <div className="absolute z-50 mt-2 w-64 bg-teal-800 rounded-md shadow-lg">
                    <div className="py-1">
                      {esportsLinks.map((link) => (
                        <a
                          key={link.title}
                          href={link.href}
                          className="block px-4 py-2 text-sm hover:bg-teal-700 hover:text-orange-400"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <a href="#" className="hover:text-orange-400">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Photos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  About
                </a>
              </li>
            </ul>

            {/* Search bar */}
            <div className="relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-64 px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <FaSearch className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
