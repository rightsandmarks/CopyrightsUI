import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerImage from "../images/CopyrightImage.jpg";
import protectImage from "../images/protectImage.jpg";
import section3Image from "../images/section3Image.jpg";
import sectionFourImage from "../images/SectionFourImage.jpg";
import protectionUK from "../images/protectioninUKandWorldwide.jpg";
import whyChooseImage from "../images/whyChooseProtect.jpg";
import literacyImage from "../images/Literacywork.jpg";
import broadcastImage from "../images/Broadcasts.jpg";
import recordingImage from "../images/SoundRecording.jpg";
import artisticImage from "../images/art.jpg";
import dramaticImage from "../images/Drama.jpg";
import ArchitectureImage from "../images/Architectural.jpg";
import filmsImage from "../images/Flimsandvidoes.jpg";
import otherworkImage from "../images/Othercreativework.jpg";
import softwareImage from "../images/computerSoftware.jpg";
import musicImage from "../images/music.jpg";
import Slider from "react-slick";
import imageBack from "../images/backgroundHeaderImage.png";
import {
  FaAddressCard,
  FaArrowRight,
  FaCircleChevronRight,
  FaCircleRight,
  FaFileContract,
  FaGavel,
  FaGlobe,
  FaShield,
} from "react-icons/fa6";
import "./Content.css";
import { FaArrowLeft, FaLock } from "react-icons/fa";

const ContentSection = () => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with desired options
  }, []);

  const slides = [
    {
      title: "Literary Works",
      description: "Books, articles, poems, scripts and software.",
      image: literacyImage,
    },
    {
      title: "Dramatic Works",
      description: "Plays, choreography and mime performances",
      image: dramaticImage,
    },
    {
      title: "Artistic Works",
      description: "Paintings, sculptures, photographs and designs",
      image: artisticImage,
    },
    {
      title: "Musical Works",
      description: "Compositions, songs, and sheet music.",
      image: musicImage,
    },
    {
      title: "Dramatic Works",
      description: "Plays, choreography and mime performances",
      image: dramaticImage,
    },
    {
      title: "Artistic Works",
      description: "Paintings, sculptures, photographs and designs",
      image: artisticImage,
    },
  ];

  const benefits = [
    {
      title: "Global Copyright Protection",
      description:
        "Your work is protected under copyright laws in 179 countries, ensuring international security and peace of mind.",
    },
    {
      title: "Legal Proof of Ownership",
      description:
        "We provide you with a digital certificate featuring a unique reference number and registration date, offering credible, independent proof of your copyright.",
    },
    {
      title: "Easy Registration Process",
      description:
        "Our user-friendly platform allows you to register your work quickly and securely, without hassle.",
    },
    {
      title: "Protection Before Publication",
      description:
        "Register your work before it’s released to the public or shared on social media to maximize protection, though you can also register previously published works.",
    },
    {
      title: "Ongoing Copyright Monitoring",
      description:
        "We continuously monitor and help protect your work against unauthorized use, ensuring you retain full control over your creations.",
    },
    {
      title: "Affordable and Transparent Pricing",
      description:
        "For a flat annual fee, you can safeguard all your creative works in one account, with no hidden costs or surprise charges.",
    },
    {
      title: "Trusted by Creators Worldwide",
      description:
        "With over 429,000 original works protected and a 5-star rating from over 800 reviews, our service is trusted by creators globally.",
    },
    {
      title: "Comprehensive Support",
      description:
        "Our team is available to assist you throughout the process, providing expert guidance and support when needed.",
    },
  ];

  // Display the first three items by default or all if "showAll" is true
  const displayedBenefits = showAll ? benefits : benefits.slice(0, 3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
    <section className="flex justify-center md:flex-row flex-col items-center px-4 gap-6 bg-royalBlue md:rounded-bl-[104px] rounded-bl-[80px] py-16">
        <div className="md:w-1/4 ">
          <img
            src={sectionFourImage}
            alt="Creative Work"
            className="md:w-[480px] md:h-[456px]  w-[320px] h-[304px] rounded-2xl shadow-lg"
          />
        </div>

        <div
          className="bg-gradient-to-tl from-[#082268] via-[#082268] to-[#3358A6] 
                      text-white rounded-2xl shadow-lg p-8 md:p-12
                      w-full max-w-[820px] h-[456px] flex flex-col items-center text-center justify-center"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Copyright Protection in the UK and Worldwide
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base opacity-90 mb-6">
            We proudly serve subscribers from around the globe. Copyright
            protection is recognized internationally under the Berne Convention,
            covering 179 countries.
          </p>

          {/* Button */}
          <button
            className="mt-4 flex items-center gap-2 border-2 border-white px-6 py-2 
                          rounded-full text-white hover:bg-white hover:text-[#082268] transition"
          >
            Register Now <FaCircleRight />
          </button>
        </div>
      </section>
     
      <section className="mt-14 border-b-2 border-t-2">
        <div className="container md:mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:px-6">
          {/* Left Content */}
          <div className="md:w-1/2 ">
            <img
              src={protectImage}
              alt="Creative Work"
              className="md:w-[480px] md:h-[544px]  w-[320px] h-[304px] md:rounded-tl-[104px] rounded-tl-[80px] shadow-lg"
            />
          </div>
          <div className="lg:w-3/4 text-white md:p-14 p-5">
            {/* <h5 className="text-green-400 text-sm uppercase font-semibold tracking-wide">
          Protect Your Creative Work with Ease
          </h5> */}
            <ul className="homePageBullets">
              <li>
                <h2 className="text-3xl lg:text-6xl font-semibold mt-4 leading-tight mb-4 text-darkText">
                  Protect Your Creative Work with Ease
                </h2>
                <p
                  className=" mt-4 text-lg leading-relaxed text-normalBlackText flex w-fit"
                  style={{ alignItems: "flex-start" }}
                >
                  <span className="">
                    <FaLock className="w-8 h-8 text-limeAccent pr-5 pt-2 " />
                  </span>
                  <span>
                    Copyright is an automatic legal right under international
                    law and the Copyright, Designs and Patents Act 1988 in the
                    UK. It can last up to 70 years after the creator's death. To
                    enforce your copyright, you may need to demonstrate that you
                    are the original creator and provide evidence of the
                    creation date.
                  </span>{" "}
                </p>
              </li>
              <li>
                <p
                  className="text-normalBlackText mt-4 text-lg leading-relaxed flex w-fit "
                  style={{ alignItems: "flex-start" }}
                >
                  <span className="">
                    <FaLock className="w-8 h-8 text-limeAccent pr-5 pt-2 " />
                  </span>
                  <span>
                    At Protect My Work, we provide a service that verifies and
                    records ownership of your work, simplifying this process for
                    you.
                  </span>
                </p>
              </li>
            </ul>
            <button className="bg-white text-primaryBlue px-6 py-2 mt-6 rounded-3xl border-primaryBlue border-2 font-medium hover:text-limeAccent hover:border-limeAccent hover:border-2 transition duration-300">
              <div className="flex items-center">
                <p className="pr-4">Register Now</p>{" "}
                <FaCircleRight className="size-7" />
              </div>
            </button>
          </div>

          {/* Right Image */}
        </div>
      </section>
      <section className="mt-14 border-b-2 border-t-2">
        <div className="container md:mx-auto flex md:flex-col lg:flex-row items-center justify-between gap-8 md:px-6 flex-col-reverse">
          {/* Left Content */}

          <div className="lg:w-3/4 text-white md:p-14 p-8">
            {/* <h5 className="text-green-400 text-sm uppercase font-semibold tracking-wide">
          Protect Your Creative Work with Ease
          </h5> */}
            <h2 className="text-3xl lg:text-6xl font-semibold mt-4 leading-tight mb-4 text-darkText">
              Why Choose Protect My Work?
            </h2>
            <p
              className=" mt-4 text-lg leading-relaxed text-normalBlackText flex w-fit mb-3"
              style={{ alignItems: "flex-start" }}
            >
              When you register your work with us, we immediately generate a
              digital certificate with
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <button className="bg-button1Color p-4 text-normalBlackText font-semibold w-[300px] rounded-l-2xl">
                {" "}
                A unique reference number
              </button>
              <button className="bg-button2Color p-4 text-normalBlackText font-semibold w-[300px] rounded-r-2xl">
                The registration date
              </button>
            </div>

            <p
              className=" mt-4 text-lg leading-relaxed text-normalBlackText flex w-fit mb-3"
              style={{ alignItems: "flex-start" }}
            >
              This serves as independent and credible proof of your copyright
              ownership.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 ">
            <img
              src={section3Image}
              alt="Creative Work"
              className="md:w-[480px] md:h-[544px]  w-[320px] h-[304px] md:rounded-tl-[104px] rounded-tl-[80px] shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-14 border-b-2 border-t-2">
        <div className="text-center">
          {/* Left Content */}

          <div className=" text-white md:p-14 p-8 py-12 bg-bgSection">
            {/* <h5 className="text-green-400 text-sm uppercase font-semibold tracking-wide">
          Protect Your Creative Work with Ease
          </h5> */}
            <h2 className="text-3xl lg:text-5xl font-semibold mt-4 leading-tight mb-4 text-darkText">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left max-w-[583px]">
                <div className="w-12 h-12 flex items-center justify-center bg-limeAccent rounded-lg mb-4">
                  <FaGavel className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Compliance with UK Copyright Law
                </h3>
                <p className="text-gray-600 mt-2">
                  Your work is legally protected under the Copyright, Designs,
                  and Patents Act 1988, ensuring that you have exclusive rights
                  to its use, distribution, and reproduction.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left max-w-[583px]">
                <div className="w-12 h-12 flex items-center justify-center bg-limeAccent rounded-lg mb-4">
                  <FaShield className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Protection Before Release
                </h3>
                <p className="text-gray-600 mt-2">
                  Registration is most effective before publishing or sharing
                  your work, including on social media. However, previously
                  published works can also be registered for protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-royalBlue  md:pb-32 pb-16 font-schib  border-b-2 border-t-2">
      {/* <section className="bg-royalBlue md:rounded-bl-[104px] rounded-bl-[80px] md:pb-32 pb-16 font-schib  border-b-2 border-t-2"> */}
        {/* <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16"> */}
        <div className="container mx-auto flex md:flex-col lg:flex-row items-center justify-between gap-8 md:px-6 flex-col-reverse ">
          {/* Left Content */}
          <div className="lg:w-3/4 text-white md:p-14 p-5">
            {/* <h5 className="text-green-400 text-sm uppercase font-semibold tracking-wide">
          Protect Your Creative Work with Ease
          </h5> */}
            <h2 className="text-3xl lg:text-6xl font-semibold mt-4 leading-tight mb-4">
              Protect Your Creative Work with Ease
            </h2>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              Copyright is an automatic legal right under international law and
              the{" "}
              <span className="text-limeAccent font-semibold tracking-wide">
                Copyright, Designs and Patents Act 1988
              </span>{" "}
              in the UK. It can last up to{" "}
              <span>70 years after the creator's death.</span> To enforce your
              copyright, you may need to demonstrate that you are the original
              creator and provide evidence of the creation date.
            </p>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              At Protect My Work, we provide a service that verifies and records
              ownership of your work, simplifying this process for you.
            </p>
            <button className="bg-royalBlue text-white px-6 py-2 mt-6 rounded-3xl border-white border-2 font-medium hover:text-limeAccent hover:border-limeAccent hover:border-2 transition duration-300">
              <div className="flex items-center">
                <p className="pr-4">Contact Us</p>{" "}
                <FaCircleRight className="size-7" />
              </div>
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 ">
            <img
              src={bannerImage}
              alt="Creative Work"
              className="md:w-[530px] md:h-[580px] rounded-tr-[104px] w-[360px] h-[371px] rounded-bl-[104px] shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="p-8 bg-bgSection">
        {/* Section Title and Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">What Can Be Protected by Copyright?</h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          // 3 fully visible, 4th partially visible

          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="bg-white rounded-tr-3xl
             shadow-lg overflow-hidden"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="md:px-10 py-20">
        <div className="w-full md:h-[500px] bg-certiOutBGColor md:p-10 p-5">
          <div className="bg-certiInBGColor w-full h-[100%] border-certiBorderColor border-2 border-spacing-5 inner-shadow text-center text-certiText py-10 flex flex-col items-center text-center justify-center">
            <h2 className="text-3xl font-semibold mb-2 p-2">
              Our Digital Certificate
            </h2>
            <p className="text-certiText mt-2 md:text-2xl text-[14px] p-5 md:mx-44">
              When you register your work with us, you’ll receive a Digital
              Certificate with all the necessary details of your copyright
              registration.
            </p>
            <button
              className="mt-4 flex items-center gap-2 border-2 border-primaryBlue px-6 py-2 
                          rounded-full text-primaryBlue hover:bg-white hover:text-[#082268] transition"
            >
              Register Now <FaCircleRight />
            </button>
          </div>
        </div>
      </section>
      <section className="mt-14 border-b-2 border-t-2">
        <div className="text-center">
          {/* Left Content */}

          <div className=" text-white md:p-14 p-8 py-12 bg-bgSection">
            {/* <h5 className="text-green-400 text-sm uppercase font-semibold tracking-wide">
          Protect Your Creative Work with Ease
          </h5> */}
            <h2 className="text-3xl lg:text-5xl font-semibold mt-4 leading-tight mb-4 text-darkText md:mb-14">
              Benefits of Our Certificate
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left max-w-[583px]">
                <div className="w-12 h-12 flex items-center justify-center bg-limeAccent rounded-lg mb-4">
                  <FaGlobe className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Global Copyright Protection
                </h3>
                <p className="text-gray-600 mt-2">
                  Your work is protected under copyright laws in 179 countries,
                  ensuring international security and peace of mind.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left max-w-[583px]">
                <div className="w-12 h-12 flex items-center justify-center bg-limeAccent rounded-lg mb-4">
                  <FaFileContract className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Legal Proof of Ownership
                </h3>
                <p className="text-gray-600 mt-2">
                  We provide you with a digital certificate featuring a unique
                  reference number and registration date, offering credible,
                  independent proof of your copyright.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left max-w-[583px]">
                <div className="w-12 h-12 flex items-center justify-center bg-limeAccent rounded-lg mb-4">
                  <FaAddressCard className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Easy Registration Process
                </h3>
                <p className="text-gray-600 mt-2">
                  Our user-friendly platform allows you to register your work
                  quickly and securely, without hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 border-b-2 border-t-2">
        <div className="text-center">
          {/* Left Content */}

          <div className=" text-white md:p-14 p-8 py-12 bg-bgSection">
            {/* <h5 className="text-green-400 text-sm uppercase font-semibold tracking-wide">
          Protect Your Creative Work with Ease
          </h5> */}
            <h2 className="text-3xl lg:text-5xl font-semibold mt-4 leading-tight mb-5 md:mb-14 text-darkText">
              Our Clients Say About David Walls
            </h2>
            <div
              className="bg-gradient-to-tl from-[#082268] via-[#082268] to-[#3358A6] 
                      text-white shadow-lg p-8 md:p-14
                      w-full  h-[100%] flex flex-col items-center text-center justify-center ticket border-0 "
            >
              <p className="md:text-3xl text-xl font-schib italic font-normal leading-8">
                Protect My Work has made copyright registration incredibly
                simple and fast. I feel much more secure knowing my creative
                work is protected!
              </p>
              <div className="mt-8 flex justify-center items-center w-full mb-3">
                <div className="md:w-1/2 w-1/4 border-t border-borderClient"></div>
                <p className="md:w-1/4 w-1/2 font-semibold">David Walls</p>
                <div className="md:w-1/2 w-1/4 border-t border-borderClient"></div>
              </div>
              <div className="bottom-circles absolute bottom-0 left-0 w-full h-1"></div>
              <div className="bottom-circles absolute bottom-0 right-0 w-full h-1"></div>
            </div>
          </div>
        </div>
      </section>
          </>
  );
};

export default ContentSection;
