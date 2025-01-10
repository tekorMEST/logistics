import React, { useState } from "react";
import { HiSearch, HiBell, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/images/A.png";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAboutUs, setShowAboutUs] = useState(false);

  const sectionData = [
    { name: "about", id: "about-section" },
    { name: "info", id: "info-section" },
    { name: "services", id: "services-section" },
    { name: "kind of services", id: "services-section" },
    { name: "what kind of services do you offer", id: "services-section" },
  ];

  const fuse = new Fuse(sectionData, {
    keys: ["name"],
    threshold: 0.3,
  });

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    const results = fuse.search(searchQuery.toLowerCase().trim());
    if (results.length > 0) {
      const targetId = results[0].item.id;
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      setSearchQuery("");
    } else {
      alert("Sorry, no matching section found.");
    }
  };

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        <div className="hidden md:flex space-x-8 text-gray-600">
          <a href="#about-section" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#info-section" className="hover:text-blue-500">
            Information
          </a>
          <Link
          to ="services"
          className="hover:text-blue-500">
            Services
          </Link>
          
          <a href="#services-section" className="hover:text-blue-500">
            Tracking
          </a>
          <a href="#info-section" className="hover:text-blue-500">
            Booking
          </a>
          <a href="#info-section" className="hover:text-blue-500">
            Prices
          </a>
        </div>

        <div className="flex items-center space-x-6 text-gray-800">
          <span className="cursor-pointer hover:text-gray-500">EN ▼</span>
          <div className="relative">
            <HiSearch
              onClick={toggleSearch}
              className="text-2xl cursor-pointer hover:text-gray-500"
            />
            {isSearchOpen && (
              <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-lg p-2 shadow-lg z-50">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask a question?"
                  className="border border-gray-300 rounded-lg pl-4 pr-8 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  onClick={handleSearch}
                  className="ml-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Go
                </button>
              </div>
            )}
          </div>

          <HiBell className="text-2xl cursor-pointer hover:text-gray-500" />
          <HiOutlineQuestionMarkCircle
            onClick={toggleAboutUs}
            className="text-2xl cursor-pointer hover:text-gray-500"
          />
          <FaBars className="text-2xl cursor-pointer md:hidden hover:text-gray-500" />
        </div>
      </nav>

      {showAboutUs && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              We are YMALLOUM Logistics, providing world-class logistics solutions to meet
              all your business needs.
            </p>
            <button
              onClick={toggleAboutUs}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
