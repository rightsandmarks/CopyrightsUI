import React, { useState } from "react";
import LOGO from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const location = useLocation(); // Get the current route
  
    // Function to determine active link class
    const getNavLinkClass = (path) =>
      location.pathname === path
        ? "text-normalBlackText font-semibold text-[16px]" // Active link styling
        : "text-normalBlackText hover:text-normalBlackText hover:font-semibold text-[16px]"; // Default link styling
  return (
    <footer className="bg-bgSection text-normalBlackText py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-start text-heading text-center gap-8">
              {/* Logo */}
              <div className="logo">
                <Link to="/" className="">
                  <img src={LOGO} alt="Logo" className="h-12 md:pl-5 p-0" />
                </Link>
              </div>
      
      
              {/* Desktop Navigation (Horizontal) */}
              <nav className="flex flex-col md:flex-row lg:space-x-4 font-schib justify-start w-[88%] text-[16px] gap-8 text-normalBlackText">
                <div >
                  <ul className="md:flex md:space-x-4 space-y-4 md:space-y-0 ">
                    <li>
                      <Link to="/aboutus" className={getNavLinkClass("/aboutus")}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/assignment"
                        className={getNavLinkClass("/assignment")}
                      >
                        Assignment & Licensing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/advantages"
                        className={getNavLinkClass("/advantages")}
                      >
                        Advantages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/internationalreg"
                        className={getNavLinkClass("/internationalreg")}
                      >
                        International Reg.
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactus" className={getNavLinkClass("/contactus")}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              
            </div>
            <div className="text-[14px] flex flex-col md:flex-row md:justify-between px-10 md:mt-10 md:mb-5 text-center">
                <p> <span className=" underline">Conditions & Disclaimer</span>  <span>{"    "} | {"    "}</span> <span className=" underline">Privacy Statement</span></p>
                <div className="text-[14px]"> <p>© 2025 Copyright Example. All rights reserved.</p></div>
              </div>
              
    </footer>
  );
}
