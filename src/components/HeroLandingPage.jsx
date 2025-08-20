"use client";
import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import "../app/style.css";

const HeroLandingPage = () => {
  const playerRef = useRef(null);
  const [showImages, setShowImages] = useState(false); // New state

  // Pause the Lottie animation after 1.2s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause();
      }
      setShowImages(true); // Show images after Lottie pauses
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <ContentWrapper>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 md:h-[80vh]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="p-6 flex flex-col items-start justify-center h-[70vh] md:h-full"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={childVariants}
          >
            Stay Connected. <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Stay Xtreme.
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
            variants={childVariants}
          >
            Reliable service. Fast repairs. Wireless freedom.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-lg transition"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Side with floating images + Lottie */}
        <motion.div
          className="relative flex items-center justify-center h-[520px] w-[520px]"
          variants={rightVariants}
        >
          {showImages && (
            <>
              <motion.img
                src="https://images.squarespace-cdn.com/content/v1/605b50a49e27ed4cf7bf564a/1618160110000-FTUKCS1FTBGB8FCMBKCM/boost-mobile.png"
                className="w-[120px] h-[120px] absolute top-10 right-20 animate-float-slow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0 }} // first image fades immediately
              />
              <motion.img
                src="https://media.istockphoto.com/id/1066216872/vector/vector-illustration-icon-with-a-communication-concept-for-the-setting-and-repair-information.jpg?s=612x612&w=0&k=20&c=JOQDa1v_y9eiAk8i8DfL9eX_bzvXyX4KGLH2W-eYs8o="
                className="w-[150px] h-[150px] absolute top-30 left-10 animate-float-fast"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }} // second image fades in after 0.4s
              />
            </>
          )}

          {/* Player in center */}
          <Player
            ref={playerRef}
            autoplay
            src="/homebg.json"
            style={{ height: 520, width: 520 }}
            renderer="svg"
          />
        </motion.div>
      </motion.div>
    </ContentWrapper>
  );
};

export default HeroLandingPage;
