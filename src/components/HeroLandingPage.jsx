import React from "react";
import ContentWrapper from "./ContentWrapper";

const HeroLandingPage = () => {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[80vh]">
        {/* Left side */}
        <div className="p-6 flex flex-col items-start justify-center h-[70vh] md:h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Stay Connected. <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Stay Xtreme.
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Reliable service. Fast repairs. Wireless freedom.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg transition">
            Get Started
          </button>
        </div>

        {/* Right side */}
        <div className="bg-green-300 p-6 flex items-center justify-center h-[70vh] md:h-full">
          <p className="text-2xl md:text-3xl">Animation Here</p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HeroLandingPage;
