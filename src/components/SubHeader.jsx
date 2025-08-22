import React from "react";

export default function SubHeader() {
  return (
    // <div className="bg-black py-2">
    //   <div className="container mx-auto flex items-center justify-center space-x-4">
    //     <span className="text-red-500 font-bold">HOT!</span>
    //     <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
    //   </div>
    // </div>
    <div className="bg-black py-2 overflow-hidden">
      <div className="container mx-auto flex items-center space-x-4">
        <span className="text-red-500 font-bold whitespace-nowrap">HOT!</span>
        <div className="relative overflow-hidden w-full">
          <div className="text-white whitespace-nowrap animate-marquee">
            🌟 Great news! We’re thrilled to offer you an exclusive deal on
            subscriptions: 🌟 Save [X%] on [Plan Name] subscriptions 🌟 Get [X
            months] free with an annual plan 🌟 Unlock premium features at a
            fraction of the price.
          </div>
        </div>
      </div>
    </div>
  );
}
