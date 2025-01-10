import React from "react";
import {Link } from 'react-router-dom'
import {
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
  FaBox,
  FaGlobe,
  FaWarehouse,
  FaTwitter,
  
  FaInstagram
} from "react-icons/fa";
import BackgroundImage from "../assets/images/port.jpg"; // Replace with the correct path to your image

const InfoSection = () => {
  return (
    <div className="relative w-full font-sans">
      {/* Top Section with Background Image */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-orange-500 animate-typing">
  Welcome to AYMALLOUM Logistics
</h1>

<p className="text-xl font-semibold w-3/4 drop-shadow-lg animate-scroll">
  Delivering world-class logistics solutions for your business needs.
</p>

        </div>
      </div>

      {/* Middle Blue Section */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12 bg-blue-900 text-white flex flex-col md:flex-row justify-around items-center p-6 md:p-8 shadow-xl z-10 rounded-lg">
        {/* First Column */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <FaClock className="text-3xl md:text-4xl text-orange-500" />
          <div>
            <h3  id= "#opening"className="font-bold text-sm md:text-lg font-poppins">
              OPENING HOURS
            </h3>
            <p className="text-xs md:text-sm">Monday - Friday</p>
            <p className="text-xs md:text-sm">9AM - 5PM</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <FaPhoneAlt className="text-3xl md:text-4xl text-orange-500" />
          <div>
            <h3  id= "#call"className="font-bold text-sm md:text-lg font-poppins">
              CALL US
            </h3>
            <p className="text-xs md:text-sm">+359 899 97 75 40</p>
          </div>
        </div>

        {/* Third Column */}
<div className="flex items-center space-x-3 mb-4 md:mb-0">
  <FaEnvelope className="text-3xl md:text-4xl text-orange-500" />
  <div>
    <h3 id="#email" className="font-bold text-sm md:text-lg font-poppins">
      EMAIL US
    </h3>
    <p className="text-xs md:text-sm">office@chs-bg.com</p>
  </div>
  <div>
    <h3 id="#social-media" className="font-bold text-sm md:text-lg font-poppins">
      REACH US ON SOCIAL MEDIA
    </h3>
    <div className="flex items-center space-x-2">
      <FaTwitter className="text-2xl text-blue-500" />
      <p className="text-xs md:text-sm"> @Aymalloum_L</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaInstagram className="text-2xl text-pink-500" />
      <p className="text-xs md:text-sm"> @aymalloumlogistics</p>
    </div>
  </div>
</div>


        {/* Button */}
        <Link to="me" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:px-6 rounded text-sm md:text-base">
          GET A QUOTE
        </Link>
      </div>

      {/* Bottom White Section with Cards */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 mt-12">
        <h2 id= 'info-section'className="text-center text-3xl sm:text-4xl font-extrabold text-blue-900 mb-8 sm:mb-12 font-poppins">
          Our Services
        </h2>

        {/* Service Cards */}
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-blue-50 transition">
            <FaTruck className="text-5xl sm:text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-blue-900 font-poppins">
              Freight Transport
            </h3>
            <p className="text-sm text-gray-600">
              We provide efficient transportation solutions for goods of all
              sizes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-blue-50 transition">
            <FaBox className="text-5xl sm:text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-blue-900 font-poppins">
              Customs brokerage
            </h3>
            <p className="text-sm text-gray-600">
               Seamless customs  clearance  services without delays .
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-blue-50 transition">
            <FaGlobe className="text-5xl sm:text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-blue-900 font-poppins">
              Global Shipping
            </h3>
            <p className="text-sm text-gray-600">
              Worldwide logistics solutions for timely delivery across borders.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-blue-50 transition">
            <FaWarehouse className="text-5xl sm:text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-blue-900 font-poppins">
              Warehousing
            </h3>
            <p className="text-sm text-gray-600">
              State-of-the-art warehouses to store and manage your goods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
