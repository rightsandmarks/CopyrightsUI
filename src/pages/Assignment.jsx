import React, { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Assignment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If clicked again, close the accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion section
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 lg:px-12 py-12 font-montserrat">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-headingBig font-bold text-gray-800 mb-4 font-libre">
            Copyright Assignment and Licensing
          </h1>
          <p className="text-paragraph text-gray-600 font-montserrat">
          <span className="font-bold">Copyright Assignment and Licensing</span> refer to the transfer or granting of rights over a copyrighted work. Here's an overview:
          </p>
        </div>

        {/* Section for Copyright Assignment */}
        <div className="mb-12">
          <h2 className="text-heading font-semibold text-gray-800 mb-4">
            1. Copyright Assignment
          </h2>
          <p className="text-paragraph text-gray-700 mb-6">
            Copyright assignment is the <span className="font-bold">transfer of ownership</span> of a copyrighted
            work from the original creator (assignor) to another party
            (assignee).
          </p>

          {/* Accordion for Key Features */}
          <div className="space-y-4">
            <div>
              <button
                className="w-full text-paragraph font-medium text-gray-800 text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => handleAccordionToggle(1)}
              >
                <div className="flex justify-between">
                  <p>Key Features </p>{" "}
                  <p className="text-headingBig font-bold">
                    {activeIndex === 1 ? "-" : "+"}
                  </p>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 1 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul className="list-disc pl-6 py-4 text-paragraph text-gray-700 space-y-2">
                  <li>
                  <span className="font-bold">Permanent Transfer:</span> The assignee gains full ownership and
                    control over the work.
                  </li>
                  <li>
                    <span className="font-bold">Transfer of All Rights:</span> Includes exclusive rights such as
                    reproduction, distribution, and adaptation.
                  </li>
                  <li>
                    <span className="font-bold">Written Agreement:</span> A contract must be in place for the
                    assignment to be valid. It must be clear about which rights
                    are being transferred.
                  </li>
                  <li>
                    <span className="font-bold">Irrevocable:</span> Once an assignment is made, it cannot be undone
                    unless specified in the agreement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Copyright Licensing */}
        <div className="mb-12">
          <h2 className="text-heading font-semibold text-gray-800 mb-4">
            2. Copyright Licensing
          </h2>
          <p className="text-paragraph text-gray-700 mb-6">
            Copyright licensing is the process where the copyright holder{" "}
            <span className="font-bold">grants permission</span> to another
            party to use their work, but the copyright owner <span className="font-bold">retains ownership</span>.
          </p>

          {/* Accordion for Key Features */}
          <div className="space-y-4">
            <div>
              <button
                className="w-full text-paragraph font-medium text-gray-800 text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => handleAccordionToggle(2)}
              >
                <div className="flex justify-between">
                  <p>Key Features </p>{" "}
                  <p className="text-headingBig font-bold">
                    {activeIndex === 2 ? "-" : "+"}
                  </p>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 2 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul className="list-disc pl-6 py-4 text-paragraph text-gray-700 space-y-2">
                  <li>
                    <span className="font-bold">Exclusive License:</span> The licensee is given the exclusive right
                    to use the work within specific parameters (e.g., location,
                    time, or medium). No one else, including the copyright
                    holder, can use the work in the agreed-upon way.
                  </li>
                  <li>
                    <span className="font-bold">Non-Exclusive License:</span> The licensee gets permission to use
                    the work, but the copyright holder can also grant similar
                    rights to others.
                  </li>
                  <li>
                    <span className="font-bold">License Duration:</span> The terms of the license can specify the
                    period for which the work may be used.
                  </li>
                  <li>
                    <span className="font-bold">Territory and Scope:</span> The license can specify geographical
                    regions or specific media platforms where the work can be
                    used.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Differences Between Assignment and Licensing */}
        <div className="mb-12">
          <h2 className="text-heading font-semibold text-gray-800 mb-4">
            3. Differences Between Assignment and Licensing
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-separate border-spacing-0.5 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-6 py-3 text-paragraph font-semibold text-left">
                    Aspect
                  </th>
                  <th className="px-6 py-3 text-paragraph font-semibold text-left">
                    Copyright Assignment
                  </th>
                  <th className="px-6 py-3 text-paragraph font-semibold text-left">
                    Copyright Licensing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-paragraph text-gray-700">Ownership</td>
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    Transfers ownership to the assignee
                  </td>
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    Copyright owner retains ownership
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100">
                  <td className="px-6 py-4 text-paragraph text-gray-700">Control</td>
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    New owner controls the work
                  </td>
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    Original owner retains control
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    Revocability
                  </td>
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    Irreversible
                  </td>
                  <td className="px-6 py-4 text-paragraph text-gray-700">
                    Can have set terms or be revoked
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section for Why You Need These Agreements */}
        <div className="mb-12">
          <h2 className="text-heading font-semibold text-gray-800 mb-4">
            4. Why You Need These Agreements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-paragraph font-medium text-gray-800">
                Legal Protection
              </h3>
              <p className="text-paragraph text-gray-700">
                Ensures that both parties understand the terms of use and
                ownership, protecting against future disputes.
              </p>
            </div>
            <div>
              <h3 className="text-paragraph font-medium text-gray-800">
                Revenue Generation
              </h3>
              <p className="text-paragraph text-gray-700">
                Copyright holders can monetize their work through licensing
                while retaining ownership.
              </p>
            </div>
            <div>
              <h3 className="text-paragraph font-medium text-gray-800">
                Clarity in Use
              </h3>
              <p className="text-paragraph text-gray-700">
                Clearly defines how and where a work can be used, protecting
                both the creator and licensee.
              </p>
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default Assignment;

// // src/pages/Assignment.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

// export default function Assignment() {
//   return (
//     <div>
//         <Header />
//       <section className="container mx-auto my-8 p-8 bg-white shadow rounded">
//         <h2 className="text-heading font-semibold mb-4">Assignment and Licensing</h2>
//         <p className="mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <p className="mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <p className="mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//       </section>

//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           &nbsp;
//         </div>
//       </footer>
//     </div>
//   );
// }
