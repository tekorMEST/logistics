import React from "react";
import AboutImage from "../assets/images/sidepic.jpg"; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At YMALLOUM Logistics, we are committed to providing innovative and 
            reliable logistics solutions tailored to meet the needs of our 
            clients. With a proven track record in freight transport, packaging, 
            warehousing, and global shipping, we deliver unparalleled value 
            across industries.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to connect the world through efficient, seamless, and 
            sustainable logistics services, ensuring the success and satisfaction 
            of our partners and customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
