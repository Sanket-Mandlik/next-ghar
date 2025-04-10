import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {
    GiKitchenKnives,
    GiBunkBeds,
    GiCeilingLight,
    GiTable,
    GiDoor,
  } from "react-icons/gi";
  import { LuSofa } from "react-icons/lu"; // Lucide icon for armchair/sofa
  
  

const ServiceHero = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 120;
    let incrementTime = Math.abs(Math.floor(2000 / (end - start)));
    let timer = setInterval(() => {
      start += 1;
      setCounter(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full rounded-2xl shadow-xl shadow-warm-beige/50 py-4 px-6 flex flex-col md:flex-row gap-8 items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/mesh-994.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="md:w-3/10 h-full flex flex-col items-center justify-between py-6 px-2 relative overflow-hidden">
        <p className="absolute top-4 left-4 text-sm text-gold/80 z-10">
          Building dreams, one step at a time.
        </p>

        <h1 className="text-5xl md:text-6xl pt-32 pb-36 font-normal pl-3 bg-gradient-to-r from-white via-warm-beige to-gold text-transparent bg-clip-text z-10">
          Interior -New Trend 
        </h1>

        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-3xl font-bold text-warm-beige">{counter}+</p>
          <p className="text-sm text-light-gray">Projects Completed</p>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-4 z-10">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-soft-white text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-soft-white text-2xl" />
          </a>
        </div>
      </div>

      {/* Right Section - Trending Services */}
      <div className="md:w-7/10 flex flex-col justify-center bg-warm-white rounded-l-3xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-15 relative z-10 p-4 py-6 md:px-8 md:pt-8">
          {[
  {
    icon: <GiKitchenKnives className="text-warm-beige text-2xl" />,
    title: "Modular Kitchen",
    description: "Handle-less shutters, quartz tops, smart corner storage",
  },
  {
    icon: <GiBunkBeds className="text-warm-beige text-2xl" />,
    title: "Kids Bedrooms",
    description: "Designer bunk beds, themed walls, creative study tables",
  },
  {
    icon: <LuSofa className="text-warm-beige text-2xl" />,
    title: "Upholstery Sourcing",
    description: "Velvet sofas, boucle chairs, sustainable fabrics",
  },
  {
    icon: <GiCeilingLight className="text-warm-beige text-2xl" />,
    title: "False Ceilings",
    description: "Cove lighting, wooden rafters, floating panels",
  },
  {
    icon: <GiTable className="text-warm-beige text-2xl" />,
    title: "Dining Areas",
    description: "Wall-mounted benches, marble-top tables, pendant lighting",
  },
  {
    icon: <GiDoor className="text-warm-beige text-2xl" />,
    title: "Entrance Foyers",
    description: "Slim shoe units, mirror panels, brass hooks",
  },
]

.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start relative space-y-3"
            >
              {/* Number Circle */}
             {/* Icon Circle */} 
<div className="w-10 h-10 border-2 border-warm-beige flex items-center justify-center rounded-full">
  {service.icon}
</div>


              {/* Title */}
              <h3 className="text-xl font-normal bg-gradient-to-r from-soft-white to-warm-beige text-transparent bg-clip-text">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-medium-brown font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
