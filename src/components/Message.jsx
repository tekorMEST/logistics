import React from "react";

const MessageMe = () => {
  return (
    <div className="bg-white text-blue-900 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-orange-500 mb-6">
          Send a Quick Quote Now
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-blue-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-blue-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-blue-900 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageMe;
