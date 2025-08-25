"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Company Info */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring" }}
        >
          <h2 className="text-orange-600 text-2xl font-bold mb-4">
            Xtreme Wireless
          </h2>
          <p className="text-gray-600 text-sm leading-6">
            Providing reliable wireless solutions and exceptional customer
            service since 2010. Your trusted partner in connectivity.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring" }}
        >
          <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About Us", "Services", "Contact"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#EA580C" }} // orange-600
                transition={{ type: "tween", duration: 0.3 }}
              >
                <a
                  href={`/${link.toLowerCase().replace(" ", "")}`}
                  className="transition-colors"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring" }}
        >
          <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600">
            1062 E Hudson St, Columbus, OH
          </p>
          <p className="text-sm text-gray-600">
            Email: support@xtremewireless.com
          </p>
          <p className="text-sm text-gray-600">Phone: (614) 784-1776</p>
        </motion.div>

        {/* Socials */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring" }}
        >
          <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-orange-50 
                           text-orange-600 hover:bg-orange-500 hover:text-white 
                           transition-colors shadow-md"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proudly developed by .{" "}
        <span className="text-orange-600 font-semibold">
          NepSoftSolution Inc
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
