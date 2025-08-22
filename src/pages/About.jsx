import React from "react";
import Header from "../components/Header";
import FounderImage from "../images/founderImage.png";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-12 font-montserrat">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center  lg:space-x-8 mb-12 justify-center ">
            {/* Founder Image */}
            <div className="lg:w-1/3 mb-6 lg:mb-0">
              <img
                src={FounderImage}
                alt="Founder"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            {/* Founder Message */}
            <div className="lg:w-2/3 text-gray-800 flex-col h-full justify-center ">
              <h1 className="text-headingBig font-bold mb-4 font-libre">Founder’s Message</h1>
              <p className="text-paragraph leading-relaxed mb-4">
                Bala is a true expert in matters relating to international Brand
                Protection (from registrations of Trademarks, Patent, Copyright,
                and Design Act to enforcement of IP rights), IP Investigation,
                IP Litigation, and IP Valuation.
              </p>
              <p className="text-paragraph leading-relaxed mb-4">
                Bala has been honoured with a series of awards through her IP
                practice Rights & Marks headquartered in Chennai. She was
                conferred the{" "}
                <strong>‘IP World Leaders (Asia Pacific) Award’</strong> by
                World IP Leaders in 2008. Recently, she is a two-time winner of
                the <strong>‘Client Choice Award’</strong> (2015 for superiority
                in client service and 2016 for overall brilliance in
                performance).
              </p>
              <p className="text-paragraph leading-relaxed mb-4">
                In 2016, she was also conferred the{" "}
                <strong>ACQ Global Award</strong>, which recognises professional
                distinction globally. In contentious matters, Bala’s execution
                of client objectives stands alongside market leaders
                internationally, including Magic Circle firms. She is revered
                and respected by opponents and peers alike.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
