import React from 'react';
import Flag from 'react-world-flags';
import Header from '../components/Header';
import Footer from '../components/Footer';


const InternationalRegistration = () => {
  const countries = [
    { name: 'USA', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
    { name: 'European Union', code: 'EU' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'China', code: 'CN' },
    { name: 'Germany', code: 'DE' }
  ];

  return (
    <><Header/>
    <div className="container mx-auto px-6 lg:px-12 py-12 lg:mb-80 font-montserrat">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-headingBig font-bold text-gray-800 mb-4 font-libre">UK and Global Copyright Protection</h1>
        <p className="text-paragraph text-gray-600">
          Copyright protection is automatic and internationally recognized. In the UK, copyright is governed by the Copyright, Designs, and Patents Act 1988. Globally, copyright is protected under the Berne Convention, which covers 179 countries, including major markets worldwide.
        </p>
      </div>

      {/* Information Section */}
      <div className="mb-12">
        <p className="text-paragraph text-gray-700">
          This means that your creative work is safeguarded not just in the UK, but also across countries such as:
        </p>

        {/* Country List */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-paragraph text-gray-700 mt-6 justify-center items-center">
          {countries.map((country) => (
            <li key={country.code} className="flex items-center space-x-2">
              <Flag code={country.code} alt={country.name} className="w-6 h-6" />
              <span>{country.name}</span>
            </li>
          ))}
        </ul>

        <p className="text-paragraph text-gray-700 mt-6">
          By registering your work with us, you ensure that it benefits from copyright protection in all participating countries, offering you peace of mind wherever your work is shared or distributed.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default InternationalRegistration;
