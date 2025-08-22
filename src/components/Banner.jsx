import React, {useEffect} from 'react';
import bannerImage from '../images/CopyRightHero.webp'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);
  
  return (
    <div className="text-center py-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold font-libre">Your rights are safe in our hands</h1>
      {/* <img src={bannerImage} alt="Banner" className="my-4 mx-auto w-9/12" style={{height:"700px"}}/> */}
      <p className="text-gray-700 mt-2 text-paragraph font-libre">Copyright is a Natural Right in the UK,</p>
      <p className="text-gray-500 text-paragraph font-libre">Copyright law prevents the unscrupulous from taking unfair advantage</p>
    </div>
  );
}
