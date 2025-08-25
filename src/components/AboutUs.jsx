"use client";

import React from "react";
import { Store, Wrench, Smartphone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger for smoother sequence
    },
  },
};

const AboutPage = () => {
  return (
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column – About & Tagline */}
        <motion.section
          className="md:col-span-5 flex flex-col space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-lg text-orange-500 uppercase tracking-wide">
            / About Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            The <span className="text-orange-500">Xtreme Wireless</span>{" "}
            Difference
          </h2>
          <p className="text-gray-600 leading-relaxed">
            As an official Boost Mobile retailer and trusted repair hub in
            Columbus, we’re dedicated to keeping you connected with the latest
            devices, affordable plans, and professional repair services.
          </p>
          <div className="flex space-x-6 font-semibold">
            {/* Call Now Button */}
            <a
              href="tel:+16147847776"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-orange-500 text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl"
            >
              <Phone className="w-5 h-5 hover:animate-shake" />
              <span>Call Now</span>
            </a>

            {/* Visit Location Button */}
            <a
              href="#location"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-800 text-white shadow-lg transition-all duration-300 hover:bg-gray-900 hover:shadow-xl"
            >
              <span>📍</span>
              <span>Visit a Location</span>
            </a>

            {/* Add Custom Animation */}
            <style jsx>{`
              @keyframes shake {
                0%,
                100% {
                  transform: rotate(0deg);
                }
                25% {
                  transform: rotate(15deg);
                }
                50% {
                  transform: rotate(-15deg);
                }
                75% {
                  transform: rotate(10deg);
                }
              }
              .animate-shake {
                animation: shake 0.4s ease-in-out infinite;
              }
            `}</style>
          </div>
        </motion.section>

        {/* Right Column – Storefront Image */}
        <motion.section
          className="md:col-span-7 flex items-center justify-center"
          variants={fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPh5SXTz2EyDasfw-hUdOhFRnOa7EzMECNG9UiJ=s1360-w1360-h1020-rw"
            alt="Xtreme Wireless storefront"
            className="md:w-[80%] h-auto w-full rounded-xl shadow-lg object-cover"
          />
        </motion.section>

        {/* Full-Width – Why Us Feature Grid */}
        <motion.section
          className="md:col-span-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Retail */}
          <motion.div
            className="flex items-start space-x-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6"
            variants={fadeUp}
          >
            <Store className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Boost Mobile Retail
              </h3>
              <p className="text-sm text-gray-600">
                Multiple Boost Mobile locations in Columbus offering the latest
                smartphones, plans, and exclusive deals.
              </p>
            </div>
          </motion.div>

          {/* Repairs */}
          <motion.div
            className="flex items-start space-x-4 border-b md:border-b-0 pb-6"
            variants={fadeUp}
          >
            <Wrench className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Professional Repair Hub
              </h3>
              <p className="text-sm text-gray-600">
                Fast, affordable, and expert device repairs with genuine parts –
                trusted by the community.
              </p>
            </div>
          </motion.div>

          {/* Accessories */}
          <motion.div
            className="flex items-start space-x-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pr-6"
            variants={fadeUp}
          >
            <Smartphone className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Accessories & More
              </h3>
              <p className="text-sm text-gray-600">
                Chargers, cases, headphones, and more to keep you connected with
                style and durability.
              </p>
            </div>
          </motion.div>

          {/* Trust */}
          <motion.div className="flex items-start space-x-4" variants={fadeUp}>
            <ShieldCheck className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Trusted & Reliable
              </h3>
              <p className="text-sm text-gray-600">
                Customer-first service and fair pricing make us the go-to
                destination for wireless solutions.
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
  );
};

export default AboutPage;
