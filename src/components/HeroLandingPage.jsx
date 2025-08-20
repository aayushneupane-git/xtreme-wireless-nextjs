"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "lottie-react";
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
        <div className=" p-6  flex  ">
          <Player
            autoplay
            loop
            src="/homebg.json" // put file in /public/animations
            style={{ height: 520, width: 520}}
            keepLastFrame
            renderer="svg" // svg | canvas
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HeroLandingPage;
