"use client";

import React from "react";
import Slider from "react-slick";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ChevronLeft, ChevronRight, Phone, ToolCase, Wifi } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const locations = [
  {
    id: 1,
    name: "Xtreme Wireless - Downtown",
    lat: 39.9612,
    lng: -82.9988,
    address: "123 Main St, Columbus, OH",
    phone: "+1 (614) 555-1234",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 2,
    name: "Xtreme Wireless - East Side",
    lat: 39.9615,
    lng: -82.995,
    address: "456 Broad St, Columbus, OH",
    phone: "+1 (614) 555-5678",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: false },
  },
  {
    id: 3,
    name: "Xtreme Wireless - West Side",
    lat: 39.959,
    lng: -82.998,
    address: "789 High St, Columbus, OH",
    phone: "+1 (614) 555-9012",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: false, repair: true },
  },
  {
    id: 4,
    name: "Xtreme Wireless - North Side",
    lat: 40.015,
    lng: -83.015,
    address: "101 North Ave, Columbus, OH",
    phone: "+1 (614) 555-3456",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 5,
    name: "Xtreme Wireless - South Side",
    lat: 39.915,
    lng: -82.915,
    address: "202 South Blvd, Columbus, OH",
    phone: "+1 (614) 555-7890",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: false, repair: false },
  },
  {
    id: 6,
    name: "Xtreme Wireless - Central",
    lat: 39.975,
    lng: -83.005,
    address: "303 Central Rd, Columbus, OH",
    phone: "+1 (614) 555-2345",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 7,
    name: "Xtreme Wireless - Eastgate",
    lat: 39.945,
    lng: -82.975,
    address: "404 Eastgate Dr, Columbus, OH",
    phone: "+1 (614) 555-6789",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: false },
  },
  {
    id: 8,
    name: "Xtreme Wireless - Westgate",
    lat: 39.935,
    lng: -83.025,
    address: "505 Westgate Ln, Columbus, OH",
    phone: "+1 (614) 555-0123",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: false, repair: true },
  },
  {
    id: 9,
    name: "Xtreme Wireless - Uptown",
    lat: 39.955,
    lng: -82.985,
    address: "606 Uptown St, Columbus, OH",
    phone: "+1 (614) 555-4567",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: true },
  },
  {
    id: 10,
    name: "Xtreme Wireless - Downtown West",
    lat: 39.975,
    lng: -83.015,
    address: "707 Downtown West Ave, Columbus, OH",
    phone: "+1 (614) 555-8901",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: false },
  },
  {
    id: 11,
    name: "Xtreme Wireless - Downtown East",
    lat: 39.985,
    lng: -82.995,
    address: "808 Downtown East Rd, Columbus, OH",
    phone: "+1 (614) 555-3456",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    services: { phone: true, internet: true, repair: true },
  },
];

const MapComponent = ({ lat, lng }) => {
  const containerStyle = { width: "100%", height: "150px" };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDovgMwEuk25CKnsBdFDfUDX121eKzTkes">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={15}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-45 right-2 z-10 cursor-pointer text-orange-500 bg-white rounded-full p-2 shadow-lg hover:bg-orange-50"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-45 left-2 z-10 cursor-pointer text-orange-500 bg-white rounded-full p-2 shadow-lg hover:bg-orange-50"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </div>
);

const LocationsPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <h1 className="text-4xl font-bold text-center text-orange-500 my-12">
        Our Locations
      </h1>

      <Slider {...settings}>
        {locations.map((loc) => (
          <div key={loc.id} className="px-2">
            <div className="bg-gradient-to-tr from-white to-orange-50 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {loc.name}
              </h2>
              <p className="text-gray-600 mb-1">{loc.address}</p>
              <p className="text-gray-600 mb-3">{loc.hours}</p>
              <a
                href={`tel:${loc.phone}`}
                className="inline-block text-white bg-orange-500 px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 transition"
              >
                Call Now
              </a>

              {/* Services */}
              <div className="flex space-x-4 mt-4">
                {loc.services.phone && (
                  <div className="flex items-center space-x-1 text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
                    <Phone size={16} /> <span>Phone</span>
                  </div>
                )}
                {loc.services.internet && (
                  <div className="flex items-center space-x-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-sm">
                    <Wifi size={16} /> <span>Internet</span>
                  </div>
                )}
                {loc.services.repair && (
                  <div className="flex items-center space-x-1 text-red-600 bg-red-100 px-2 py-1 rounded-full text-sm">
                    <ToolCase size={16} /> <span>Repair</span>
                  </div>
                )}
              </div>

              {/* Mini Map */}
              <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <MapComponent lat={loc.lat} lng={loc.lng} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LocationsPage;
