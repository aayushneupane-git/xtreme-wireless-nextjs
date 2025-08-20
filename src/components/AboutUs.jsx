"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Variants for stagger + fade-in
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% of section is visible
      >
        {/* Left Content */}
        <motion.div variants={containerVariants}>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            variants={childVariants}
          >
            About <span className="text-yellow-500">Us</span>
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-4 text-lg leading-relaxed"
            variants={childVariants}
          >
            At{" "}
            <span className="font-semibold text-yellow-500">
              Xtreme Wireless
            </span>
            , we believe staying connected should be simple, affordable, and
            hassle-free. From fast phone repairs to reliable wireless service,
            we are here to keep you connected when it matters the most.
          </motion.p>

          <motion.p
            className="text-gray-700 mb-4 text-lg leading-relaxed"
            variants={childVariants}
          >
            As an authorized <span className="font-semibold">Boost Mobile</span>{" "}
            retailer, we provide top-notch wireless plans, the latest
            smartphones, and professional repair services all under one roof.
            Whether you’re upgrading your phone, switching carriers, or fixing
            your device, our team is ready to help.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            variants={childVariants}
          >
            Our mission is simple:{" "}
            <span className="text-yellow-500 font-semibold">
              keep you connected, stay Xtreme.
            </span>
          </motion.p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPh5SXTz2EyDasfw-hUdOhFRnOa7EzMECNG9UiJ=s1360-w1360-h1020-rw"
            alt="About Xtreme Wireless"
            width={450}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="mt-20 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          className="text-3xl font-bold text-gray-900 mb-6"
          variants={childVariants}
        >
          Why Choose Us?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-gray-100 rounded-2xl shadow-md"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-yellow-500 mb-3">
              Reliable Service
            </h4>
            <p className="text-gray-700">
              We provide fast, professional repairs and trusted wireless
              solutions.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-100 rounded-2xl shadow-md"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-yellow-500 mb-3">
              Affordable Plans
            </h4>
            <p className="text-gray-700">
              Boost Mobile’s flexible plans keep you connected without breaking
              the bank.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-100 rounded-2xl shadow-md"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-yellow-500 mb-3">
              Customer First
            </h4>
            <p className="text-gray-700">
              Our friendly team makes sure every customer gets the best care and
              support.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
