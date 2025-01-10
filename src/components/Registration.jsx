import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBox, FaShip, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const ShippingRegistration = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className={`flex-1 text-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>1</div>
            <p className="mt-2">Account Details</p>
          </div>
          <div className={`flex-1 text-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>2</div>
            <p className="mt-2">Shipping Details</p>
          </div>
          <div className={`flex-1 text-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>3</div>
            <p className="mt-2">Confirmation</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Account Registration */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h2>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>
          )}

          {/* Step 2: Shipping Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h2>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cargo Description"
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <FaBox className="absolute left-3 top-3.5 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Origin Port"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Destination Port"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <FaCalendar className="absolute left-3 top-3.5 text-gray-400" />
                </div>

                <div className="relative">
                  <select className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                    <option value="">Select Container Type</option>
                    <option value="20ft">20ft Container</option>
                    <option value="40ft">40ft Container</option>
                    <option value="reefer">Reefer Container</option>
                  </select>
                  <FaShip className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Additional Notes"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="3"
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Review and Confirm</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                {/* Add summary details here */}
                <p className="text-gray-600">Please review your information before submitting.</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-600">I agree to the terms and conditions</label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Back
              </button>
            )}
            <button
              onClick={() => step < 3 ? setStep(step + 1) : alert('Form Submitted!')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
            >
              {step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingRegistration;