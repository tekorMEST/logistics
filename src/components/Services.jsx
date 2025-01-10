import React, { useState } from 'react';
import { FaShip, FaWarehouse, FaShieldAlt, FaTasks, FaIndustry, FaUser, FaLock } from 'react-icons/fa';
import BackgroundImage from "../assets/images/awake.jpg";
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');

  const tabs = [
    { id: 'Bookings', label: 'Bookings' },
    { id: 'tracking', label: 'Tracking' },
    { id: 'schedules', label: 'Schedules' },
    { id: 'offices', label: 'Offices' },
  ];

  const trackShipment = () => {
    if (!trackingNumber) {
      setStatus('Please enter a tracking number.');
      return;
    }

    // Simulate tracking logic (replace this with a real API call)
    const simulatedStatus = `Tracking number: ${trackingNumber} - Status: In Transit`;
    setStatus(simulatedStatus);
  };

  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-[600px] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Hero Section */}
      <header className="relative h-[600px] flex flex-col items-center justify-center text-white z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Logistics Services</h1>
          <p className="text-lg">Eliminate complexity from your supply chain</p>
        </div>

        {/* Icon Section */}
        <section className="absolute bottom-0 translate-y-1/2 container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-center bg-white bg-opacity-80 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <FaShip size={50} className="text-blue-600 mb-2" />
            <p className="font-semibold text-blue-800">Transport</p>
          </div>
          <div className="flex flex-col items-center">
            <FaWarehouse size={50} className="text-blue-600 mb-2" />
            <p className="font-semibold text-blue-800">Store</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt size={50} className="text-blue-600 mb-2" />
            <p className="font-semibold text-blue-800">Clear & Protect</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTasks size={50} className="text-blue-600 mb-2" />
            <p className="font-semibold text-blue-800">Logistics Management</p>
          </div>
          <div className="flex flex-col items-center">
            <FaIndustry size={50} className="text-blue-600 mb-2" />
            <p className="font-semibold text-blue-800">By Industry</p>
          </div>
        </section>
      </header>

      {/* Tabs Section */}
      <section className="relative container mx-auto px-4 mt-20">
        <div className="flex justify-around border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 font-semibold ${
                activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'Bookings' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Bookings</h2>
              {/* Login Form */}
              <div className="flex flex-row items-center w-full max-w-3xl p-6 rounded-3xl mx-auto bg-white shadow-lg">
                <div className="flex-shrink-0 mr-8">
                  <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaUser size={64} className="text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <FaUser className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <FaLock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>

                    <button className="w-full py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                      Sign In
                    </button>
                    
                    <p className="text-center text-sm text-gray-600">
                      Don't have an account?{' '}
                      <Link to="/services/register" className="text-blue-600 hover:underline"> 
                        Register here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'tracking' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Tracking</h2>
              <p className="text-gray-700 mb-4">
                Track your shipments in real-time and get updates on their location and delivery status.
              </p>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="mb-4 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-full"
                />
                <button
                  onClick={trackShipment}
                  className="w-full max-w-xs py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Track
                </button>
                {status && <div className="mt-4 font-bold text-gray-800">{status}</div>}
              </div>
            </div>
          )}
          {activeTab === 'schedules' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Schedules</h2>
              <p className="text-gray-700">
                View detailed schedules for shipment departures and arrivals to plan efficiently.
              </p>
            </div>
          )}
          {activeTab === 'offices' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Offices</h2>
              <p className="text-gray-700">
                Locate our offices and get in touch with our representatives for assistance.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;