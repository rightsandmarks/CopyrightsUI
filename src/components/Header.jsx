import React, { useState } from "react";
import LOGO from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For the hamburger icon
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation(); // Get the current route

  // Function to determine active link class
  const getNavLinkClass = (path) =>
    location.pathname === path
      ? "text-white font-semibold text-[16px]" // Active link styling
      : "text-white hover:text-white hover:font-semibold text-[16px]"; // Default link styling

  return (
    <header className="bg-royalBlue shadow-md py-4 font-montserrat">
      <div className="container mx-auto flex justify-between items-center text-heading">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="">
            <img src={LOGO} alt="Logo" className="h-12 pl-5" />
          </Link>
        </div>

        {/* Hamburger Menu Icon (visible only on mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white pr-4">
            {isMobileMenuOpen ? (
              <FaTimes
                size={24}
                className="transition-transform duration-300 ease-in-out transform rotate-180"
              />
            ) : (
              <RiMenu3Line
                size={24}
                className="transition-transform duration-300 ease-in-out transform"
              />
            )}
          </button>
        </div>

        {/* Desktop Navigation (Horizontal) */}
        <nav className="lg:flex lg:space-x-4 hidden lg:block font-montserrat justify-evenly w-[88%] text-[16px]">
          <div >
            <ul className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0 text-white hover:text-white">
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

          {/* Buttons (Register/Login) */}
          <div className="flex lg:space-x-4 space-y-2 lg:space-y-0">
            <button className="bg-royalBlue text-white px-4 py-1 rounded-lg border-white border">
              
              <Link to="/register">
                  Register
                </Link>
            </button>
            <button className="bg-white text-primaryBlue px-4 py-1 rounded-lg">
              Login
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Menu (Vertical Navigation) */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`lg:hidden fixed top-0 right-0 w-64 bg-white h-full z-50 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={LOGO} alt="Logo" className="w-20" />
          <button onClick={toggleMobileMenu} className="text-gray-600">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link to="/aboutus" className="text-gray-600 hover:text-gray-800">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/assignment"
              className="text-gray-600 hover:text-gray-800"
            >
              Assignment & Licensing
            </Link>
          </li>
          <li>
            <Link
              to="/advantages"
              className="text-gray-600 hover:text-gray-800"
            >
              Advantages
            </Link>
          </li>
          <li>
            <Link
              to="/internationalreg"
              className="text-gray-600 hover:text-gray-800"
            >
              International Reg.
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="text-blue-500 font-semibold">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Buttons (Register/Login) */}
        <div className="flex flex-col space-y-2 p-4 border-t">
          <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded">
            Register
          </button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import "./styles/Header.css";
// import LOGO from "../images/logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // For the hamburger icon
// import imageBack from "../images/backgroundHeaderImage.png";
// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const dynamicHeader = isScrolled ? `url(${imageBack})` : "#151b2b";
//   const backgroundHeader = {
//     // backgroundImage: `url(${imageBack})`,
//     backgroundImage: `${dynamicHeader}`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const location = useLocation(); // Get the current route

//   // Function to determine active link class
//   const getNavLinkClass = (path) =>
//     location.pathname === path
//       ? `font-semibold border-b-2 border-b-limeAccent nav_menu_link w-nav-link` // Active link styling
//       : "hover:border-b-limeAccent hover:border-b-2 hover:text-limeAccent hover:font-semibold  nav_menu_link w-nav-link"; // Default link styling

//   return (
//     <>
//       {/* <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-900">Brand Logo</h1>
//         <nav className="space-x-4">
//           <a href="/aboutus" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500">About Us</a>
//           <a href="/services" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500">Services</a>
//           <a href="/contactus" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500">Contact Us</a>
//           <a href="/blog" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500">Blog</a>
//         </nav>
//       </div>
//     </header> */}

//       <header
//         className={` py-4 font-schib header sticky top-0 z-50 ${
//           isScrolled
//             ? "bg-darkGrayColor text-white"
//             : "backgroundHeader text-white"
//         }`}
//         style={{
//           background:"#082268"
//         }}
//       >
//         {/* <div className="grid auto-cols-fr justify-between items-center w-full max-w-[90%] ml-auto mr-auto"> */}
//           <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="logo">
//           <Link to="/">
//           <img
//               src={LOGO}
//               alt="Logo"
//               className="h-12  float-left text-[#333333] no-underline relative"
//             />
//                 </Link>

//           </div>

//           {/* Hamburger Menu Icon (visible only on mobile) */}
//           <div className="lg:hidden">
//             <button onClick={toggleMobileMenu} className="text-gray-600 pr-4">
//               {isMobileMenuOpen ? (
//                 <FaTimes
//                   size={24}
//                   className="transition-transform duration-300 ease-in-out transform rotate-180"
//                 />
//               ) : (
//                 <FaBars
//                   size={24}
//                   className="transition-transform duration-300 ease-in-out transform"
//                 />
//               )}
//             </button>
//           </div>

//           {/* Desktop Navigation (Horizontal) */}
//           <nav className="hidden lg:block pl-10 flex justify-between w-full ml-auto pr-0 float-right relative">
//             {/* <ul className=" lg:space-x-4 space-y-4 lg:space-y-0 "> */}
//             {/* <li> */}
//             <div className="flex justify-evenly items-center w-full text-[16px]">
//               <div>
//                 <Link to="/aboutus" className={getNavLinkClass("/aboutus")}>
//                   About Us
//                 </Link>
//                 <Link
//                   to="/assignment"
//                   className={getNavLinkClass("/assignment")}
//                 >
//                   Assignment & Licensing
//                 </Link>
//                 <Link
//                   to="/advantages"
//                   className={getNavLinkClass("/advantages")}
//                 >
//                   Advantages
//                 </Link>
//                 <Link
//                   to="/internationalreg"
//                   className={getNavLinkClass("/internationalreg")}
//                 >
//                   International Reg.
//                 </Link>
//                 <Link to="/contactus" className={getNavLinkClass("/contactus")}>
//                   Contact Us
//                 </Link>
//               </div>

//               {/* Buttons (Register/Login) */}
//               <div className="flex lg:space-x-4 space-y-2 lg:space-y-0">
//                 <Link
//                   to="/register"
//                   className="bg-gray-200 text-gray-800 px-4 py-1 rounded"
//                   style={{ height: "38px" }}
//                 >
//                   Register
//                 </Link>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-1 rounded"
//                   style={{ height: "38px" }}
//                 >
//                   Login
//                 </button>
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* Mobile Sidebar Menu (Vertical Navigation) */}
//         <div
//           className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
//             isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//           onClick={toggleMobileMenu}
//         ></div>

//         <div
//           className={`lg:hidden fixed top-0 right-0 w-64 bg-white h-full z-50 transform transition-all duration-300 ease-in-out ${
//             isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Sidebar Header with Close Button */}
//           <div className="flex justify-between items-center p-4 border-b">
//             <img src={LOGO} alt="Logo" className="w-20" />
//             <button onClick={toggleMobileMenu} className="text-gray-600">
//               <FaTimes size={24} />
//             </button>
//           </div>

//           {/* Menu Items */}
//           <ul className="flex flex-col space-y-4 p-4">
//             <li>
//               <Link to="/" className="text-gray-600 hover:text-gray-800">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="text-gray-600 hover:text-gray-800">
//                 Copyright
//               </Link>
//             </li>
//             <li>
//               <Link to="/aboutus" className="text-gray-600 hover:text-gray-800">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/assignment"
//                 className="text-gray-600 hover:text-gray-800"
//               >
//                 Assignment & Licensing
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/advantages"
//                 className="text-gray-600 hover:text-gray-800"
//               >
//                 Advantages
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/internationalreg"
//                 className="text-gray-600 hover:text-gray-800"
//               >
//                 International Reg.
//               </Link>
//             </li>
//             <li>
//               <Link to="/contactus" className="text-blue-500 font-semibold">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           {/* Buttons (Register/Login) */}
//           <div className="flex flex-col space-y-2 p-4 border-t">
//             <Link
//               to="/register"
//               className="bg-gray-200 text-gray-800 px-4 py-1 rounded"
//             >
//               Register
//             </Link>
//             <button className="bg-blue-500 text-white px-4 py-1 rounded">
//               Login
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
