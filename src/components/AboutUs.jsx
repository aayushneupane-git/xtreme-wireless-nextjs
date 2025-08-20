"use client";

import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="bg-white py-16 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-500">Us</span>
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            At <span className="font-semibold text-yellow-500">Xtreme Wireless</span>, 
            we believe staying connected should be simple, affordable, and hassle-free.  
            From fast phone repairs to reliable wireless service, we are here to keep you 
            connected when it matters the most.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            As an authorized <span className="font-semibold">Boost Mobile</span> retailer, 
            we provide top-notch wireless plans, the latest smartphones, and professional 
            repair services all under one roof. Whether you’re upgrading your phone, 
            switching carriers, or fixing your device, our team is ready to help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is simple: 
            <span className="text-yellow-500 font-semibold"> keep you connected, stay Xtreme.</span>
          </p>
        </div>

        {/* Right Side - Image or Illustration */}
        <div className="flex justify-center">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPh5SXTz2EyDasfw-hUdOhFRnOa7EzMECNG9UiJ=s1360-w1360-h1020-rw"
            alt="About Xtreme Wireless"
            width={450}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-yellow-500 mb-3">
              Reliable Service
            </h4>
            <p className="text-gray-700">
              We provide fast, professional repairs and trusted wireless solutions.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-yellow-500 mb-3">
              Affordable Plans
            </h4>
            <p className="text-gray-700">
              Boost Mobile’s flexible plans keep you connected without breaking the bank.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-yellow-500 mb-3">
              Customer First
            </h4>
            <p className="text-gray-700">
              Our friendly team makes sure every customer gets the best care and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
