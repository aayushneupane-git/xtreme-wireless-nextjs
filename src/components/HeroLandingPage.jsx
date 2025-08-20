"use client";
import React, { useEffect, useRef } from "react";
import ContentWrapper from "./ContentWrapper";
import { Player } from "@lottiefiles/react-lottie-player";
import "../app/style.css";

const HeroLandingPage = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause(); // Stop animation after 1.5s
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContentWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[80vh]">
        {/* Left side */}
        <div className="p-6 flex flex-col items-start justify-center h-[70vh] md:h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Stay Connected. <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Stay Xtreme.
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Reliable service. Fast repairs. Wireless freedom.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-lg transition">
            Get Started
          </button>
        </div>

        <div className="relative flex items-center justify-center h-[520px] w-[520px]">
          {/* Floating Images */}
          <img
            src="https://images.squarespace-cdn.com/content/v1/605b50a49e27ed4cf7bf564a/1618160110000-FTUKCS1FTBGB8FCMBKCM/boost-mobile.png"
            className="w-[120px] h-[120px] absolute top-10 right-50 animate-float-slow"
          />
          <img
            src="https://media.istockphoto.com/id/1066216872/vector/vector-illustration-icon-with-a-communication-concept-for-the-setting-and-repair-information.jpg?s=612x612&w=0&k=20&c=JOQDa1v_y9eiAk8i8DfL9eX_bzvXyX4KGLH2W-eYs8o="
            className="w-[150px] h-[150px] absolute top-40 left-10 animate-float-fast"
          />
          {/* Player in center */}
          <Player
            ref={playerRef}
            autoplay
            src="/homebg.json"
            style={{ height: 520, width: 520 }}
            renderer="svg"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HeroLandingPage;
