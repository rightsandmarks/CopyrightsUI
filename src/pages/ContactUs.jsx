import React, { useState } from "react";
import Header from "../components/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., API call to submit form data)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
    <Header/>
    <div className="container mx-auto px-6 lg:px-12 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with us for any inquiries. We’re here to help!
        </p>
      </div>

      {/* Contact Details */}
      <div className="lg:flex justify-between mb-12">
        <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
          <ul className="text-lg text-gray-700 space-y-4">
            <li className="flex items-center">
              <span className="mr-3 font-semibold text-gray-800">Email:</span>
              <a href="mailto:contact@example.com" className="text-blue-500">
                contact@example.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-3 font-semibold text-gray-800">Phone:</span>
              <a href="tel:+1234567890" className="text-blue-500">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-3 font-semibold text-gray-800">Address:</span>
              <span className="text-gray-700">123 Business Street, City, Country</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
