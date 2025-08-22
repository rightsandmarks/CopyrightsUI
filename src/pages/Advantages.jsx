// src/pages/Advantages.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa"; // You can choose any icon you like.
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Advantages() {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-6 lg:px-12 py-12 font-montserrat">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-headingBig font-bold text-gray-800 mb-4 font-libre">
          Advantages of Copyright
        </h1>
      </div>

      {/* Sectioned Content Blocks */}
      <div className="space-y-12">

        {/* Protection of Creative Work */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-blue-800 mb-4">Protection of Creative Work</h3>
          <p className="text-paragraph text-gray-700">
            Copyright automatically grants creators exclusive rights to their original work, protecting it from unauthorized use, reproduction, or distribution.
          </p>
        </div>

        {/* Control Over Usage */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-green-800 mb-4">Control Over Usage</h3>
          <p className="text-paragraph text-gray-700">
            Creators have the right to decide how, when, and where their work is used, whether by licensing, selling, or granting permission for specific uses.
          </p>
        </div>

        {/* Monetization Opportunities */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-yellow-800 mb-4">Monetization Opportunities</h3>
          <p className="text-paragraph text-gray-700">
            Copyright allows creators to generate income by licensing or selling their work to third parties, whether through direct sales, royalties, or usage fees.
          </p>
        </div>

        {/* Moral Rights */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-purple-800 mb-4">Moral Rights</h3>
          <p className="text-paragraph text-gray-700">
            Copyright includes moral rights, such as the right to attribution (credit for the work) and the right to object to derogatory treatment of the work that could harm the creator’s reputation.
          </p>
        </div>

        {/* Encourages Creativity */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-red-800 mb-4">Encourages Creativity</h3>
          <p className="text-paragraph text-gray-700">
            By ensuring creators are financially rewarded and protected, copyright fosters further creativity and innovation, motivating artists and authors to continue producing new works.
          </p>
        </div>

        {/* Legal Protection */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-teal-800 mb-4">Legal Protection</h3>
          <p className="text-paragraph text-gray-700">
            In cases of infringement, copyright owners can take legal action to prevent unauthorized use and seek damages, offering a strong deterrent to infringement.
          </p>
        </div>

        {/* Global Protection */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-indigo-800 mb-4">Global Protection</h3>
          <p className="text-paragraph text-gray-700">
            Copyright protection extends internationally, covering creators in countries that are signatories to international treaties like the Berne Convention, ensuring widespread protection.
          </p>
        </div>

        {/* Inheritance of Rights */}
        <div className="bg-gradient-to-r from-pink-50 to-pink-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-pink-800 mb-4">Inheritance of Rights</h3>
          <p className="text-paragraph text-gray-700">
            Copyright can be passed on to heirs or sold, allowing creators to provide long-term value to their families or estates even after their death.
          </p>
        </div>

        {/* Exclusive Distribution Rights */}
        <div className="bg-gradient-to-r from-lime-50 to-lime-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-lime-800 mb-4">Exclusive Distribution Rights</h3>
          <p className="text-paragraph text-gray-700">
            Copyright owners control the distribution of their works, whether digitally, in print, or in other media, which can increase their work's value in the marketplace.
          </p>
        </div>

        {/* Prevents Plagiarism */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-heading font-semibold text-gray-800 mb-4">Prevents Plagiarism</h3>
          <p className="text-paragraph text-gray-700">
            Copyright offers a strong deterrent against unauthorized copying and plagiarism, protecting the integrity of the creator's work.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
