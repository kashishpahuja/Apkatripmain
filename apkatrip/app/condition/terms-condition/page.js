'use client';
import React from "react";

function page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[40vh] bg-gradient-to-r from-[#0d233e] to-[#164569] bg-cover bg-center flex justify-center items-center px-5 md:px-16 lg:px-20">
        <div className="text-center space-y-4 lg:space-y-8 max-w-2xl">
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Welcome to ApkaTrip - Privacy Policy
          </h5>
          <p className="text-sm md:text-base lg:text-lg font-medium text-gray-200">
            Your privacy matters to us. At ApkaTrip, we prioritize the security of your personal 
            information and ensure transparency in how we collect, use, and protect your data. 
            Explore with confidence as we safeguard your travel experience.
          </p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="px-5 md:px-16 lg:px-20 py-10 space-y-8 text-gray-700">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
          Privacy Policy
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          At <strong>ApkaTrip</strong>, we value the trust you place in us. This privacy policy outlines 
          how we handle your personal information and data. By using our website or services, you agree to the 
          collection and use of information in accordance with this policy.
        </p>

        {/* Information We Collect */}
        <div className="space-y-4">
          <h3 className="flex items-center text-lg md:text-xl font-semibold text-gray-800">
              Information We Collect
          </h3>
          <p className="text-base">
            We may collect the following types of information:
          </p>
          <ul className="list-none space-y-2 pl-6">
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Personal details like name, email address, phone number, and address.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Travel preferences and booking details.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Payment information (processed securely).</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Technical information such as IP address and browser details.</span>
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="space-y-4">
          <h3 className="flex items-center text-lg md:text-xl font-semibold text-gray-800">
              How We Use Your Information
          </h3>
          <p className="text-base">
            We use your information to:
          </p>
          <ul className="list-none space-y-2 pl-6">
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Process bookings and manage travel-related services.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Enhance user experience and provide personalized recommendations.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Communicate updates about bookings, offers, or services.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Comply with legal obligations and prevent fraud.</span>
            </li>
          </ul>
        </div>

        {/* Sharing Your Information */}
        <div className="space-y-4">
          <h3 className="flex items-center text-lg md:text-xl font-semibold text-gray-800">
              Sharing Your Information
          </h3>
          <p className="text-base">
            We do not sell or share your personal information with third parties except to:
          </p>
          <ul className="list-none space-y-2 pl-6">
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Service providers for processing bookings and payments.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Legal authorities if required by law.</span>
            </li>
            <li className="relative">
              <span className="absolute left-0 text-blue-500">➤</span>
              <span className="ml-5">Third-party platforms for analytics and website optimization.</span>
            </li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="space-y-4">
          <h3 className="flex items-center text-lg md:text-xl font-semibold text-gray-800">
              Data Security
          </h3>
          <p className="text-base">
            We implement robust security measures to protect your data against unauthorized access, alteration, or disclosure. 
            However, please note that no method of transmission over the internet is 100% secure.
          </p>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h3 className="flex items-center text-lg md:text-xl font-semibold text-gray-800">
              Contact Us
          </h3>
          <p className="text-base">
            If you have any questions or concerns about our Privacy Policy, feel free to reach out to us at:
          </p>
          <p className="text-base">
            <strong>Email:</strong> <a href="mailto:support@apkatrip.com" className="text-blue-500 underline">support@apkatrip.com</a>
          </p>
          <p className="text-base">
            <strong>Phone:</strong> +91-XXXXXXXXXX
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
