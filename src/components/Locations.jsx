"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Phone, ToolCase, Wifi } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const locations = [
  {
    id: 1,
    name: "Boost Mobile - Parsons",
    lat: 39.9413683,
    lng: -82.9855364,
    address: "1090 Parsons Ave, Columbus, OH",
    phone: "+1 (614) 443-1551",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 2,
    name: "Boost Mobile - Downtown",
    lat: 39.9615,
    lng: -82.995,
    address: "1062 E Main St, Columbus, OH",
    phone: "+1 (614) 972-7242",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 3,
    name: "Boost Mobile - Lockbourne",
    lat: 39.959,
    lng: -82.998,
    address: "1912 Lockbourne Rd, Columbus, OH",
    phone: "+1 (614) 972-7625",
    hours: "Mon-Sat: 9am-7pm, Sun: 11am-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 4,
    name: "Boost Mobile - Old Hamilton",
    lat: 40.015,
    lng: -83.015,
    address: "1432 S Hamilton Rd, Columbus, OH",
    phone: "+1 (614) 694-0370",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 5,
    name: "Boost Mobile - New Hamilton",
    lat: 39.915,
    lng: -82.915,
    address: "2272 S Hamilton Rd, Columbus, OH",
    phone: "+1 (614) 694-0097",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 6,
    name: "Boost Mobile - Brice Rd",
    lat: 39.975,
    lng: -83.005,
    address: "1896 Brice Rd, Columbus, OH",
    phone: "+1 (614) 735-5555",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 7,
    name: "Boost Mobile - Courtright",
    lat: 39.945,
    lng: -82.975,
    address: "3657f E Livingston Ave, Columbus, OH",
    phone: "+1 (614) 237-6065",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 8,
    name: "Xtreme Wireless - Hudson",
    lat: 39.935,
    lng: -83.025,
    address: "1062 E Hudson St, Columbus, OH",
    phone: "+1 (614) 784-1776",
    hours: "Mon-Sat: 9am-9pm, Sun: 10am-8pm",
    services: { phone: true, internet: true, repair: true },
  },
];

// Custom Arrow Components with proper positioning
const NextArrow = ({ onClick, currentSlide, slideCount, ...props }) => {
  return (
    <div
      {...props}
      className="absolute -right-3 top-1/2 z-10 cursor-pointer text-orange-500 bg-white rounded-full p-2 shadow-lg hover:bg-orange-50 transform -translate-y-1/2"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </div>
  );
};

const PrevArrow = ({ onClick, currentSlide, slideCount, ...props }) => {
  return (
    <div
      {...props}
      className="absolute -left-3 top-1/2 z-10 cursor-pointer text-orange-500 bg-white rounded-full p-2 shadow-lg hover:bg-orange-50 transform -translate-y-1/2"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
};

const MapComponent = ({ address }) => {
  return (
    <div className="w-full h-[200px] rounded-lg overflow-hidden mt-4">
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          address
        )}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const LocationsPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "10px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // extra large screens (desktops)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // laptops/tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // small tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // extra small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Our Locations
      </h1>

      <Slider {...settings}>
        {locations.map((loc) => (
          <div key={loc.id} className="px-2 outline-none">
            <div className="bg-gradient-to-tr from-white to-orange-50 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 h-full">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {loc.name}
              </h2>
              <p className="text-gray-600 mb-1 text-sm md:text-base">
                {loc.address}
              </p>
              <p className="text-gray-600 mb-3 text-sm md:text-base">
                {loc.hours}
              </p>
              <a
                href={`tel:${loc.phone}`}
                className="inline-block text-white bg-orange-500 px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 transition text-sm md:text-base"
              >
                Call Now
              </a>

              {/* Services */}
              <div className="flex flex-wrap gap-2 mt-4">
                {loc.services.phone && (
                  <div className="flex items-center space-x-1 text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs md:text-sm">
                    <Phone size={14} /> <span>Phone</span>
                  </div>
                )}
                {loc.services.internet && (
                  <div className="flex items-center space-x-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-xs md:text-sm">
                    <Wifi size={14} /> <span>Internet</span>
                  </div>
                )}
                {loc.services.repair && (
                  <div className="flex items-center space-x-1 text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs md:text-sm">
                    <ToolCase size={14} /> <span>Repair</span>
                  </div>
                )}
              </div>

              {/* Mini Map */}
              <MapComponent address={loc.address} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default LocationsPage;
