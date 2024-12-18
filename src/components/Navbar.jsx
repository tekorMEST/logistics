import React from "react";
import { HiSearch, HiBell, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaUserCircle, FaBars } from "react-icons/fa";
import Logo from "../assets/images/A.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-16 object-contain" // Increased logo size
        />
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-600">
        <a href="#" className="hover:text-blue-500">
          Prices
        </a>
        <a href="#" className="hover:text-blue-500">
          Book
        </a>
        <a href="#" className="hover:text-blue-500">
          Tracking
        </a>
        <a href="#" className="hover:text-blue-500">
          Schedules
        </a>
        <a href="#" className="hover:text-blue-500">
          Logistics Solutions
        </a>
      </div>

      {/* Right Side: React Icons */}
      <div className="flex items-center space-x-6 text-gray-800">
        <span className="cursor-pointer hover:text-gray-500">EN ▼</span>
        <HiSearch className="text-2xl cursor-pointer hover:text-gray-500" />
        <HiBell className="text-2xl cursor-pointer hover:text-gray-500" />
        <HiOutlineQuestionMarkCircle className="text-2xl cursor-pointer hover:text-gray-500" />
        <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-500" />
        <FaBars className="text-2xl cursor-pointer md:hidden hover:text-gray-500" />
      </div>
    </nav>
  );
};

export default Navbar;



