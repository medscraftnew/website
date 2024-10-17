import React from "react";

const ContactUsForm = () => {
  return (
    <div className="">
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200"
            required
          />

          {/* Subject Field */}
          <input
            type="text"
            placeholder="Subject"
            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200"
            required
          />

          {/* Phone Field */}
          <input
            type="tel"
            placeholder="Phone"
            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200"
            required
          />
        </div>

        {/* Message Field (spanning both columns) */}
        <textarea
          placeholder="Type Your Message"
          className="block w-full mt-4 px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200"
          rows="5"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="block mt-4 w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 font-bold text-white bg-cyan-600 rounded-xl shadow-sm focus:outline-none hover:bg-cyan-700 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
