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
import { LuSofa } from "react-icons/lu";

const services = 
  [
    {
      icon: <GiKitchenKnives className="text-warm-beige text-2xl" />,
      title: "Modular Kitchen",
      description: "Sensor faucets, quartz countertops, handle‑less shutters",
    },
    {
      icon: <GiBunkBeds className="text-warm-beige text-2xl" />,
      title: "Kids Bedrooms",
      description: "Convertible bunks, chalkboard walls, study nooks",
    },
    {
      icon: <LuSofa className="text-warm-beige text-2xl" />,
      title: "Upholstery Sourcing",
      description: "Bouclé fabrics, velvet sofas, eco‑blend textiles",
    },
    {
      icon: <GiCeilingLight className="text-warm-beige text-2xl" />,
      title: "False Ceilings",
      description: "Cove lighting, wood‑veneer slats, floating panels",
    },
    {
      icon: <GiTable className="text-warm-beige text-2xl" />,
      title: "Dining Areas",
      description: "Wall‑bench seating, marble‑top tables, pendant clusters",
    },
    {
      icon: <GiDoor className="text-warm-beige text-2xl" />,
      title: "Entrance Foyers",
      description: "Floating shoe units, mirror panels, brass hooks",
    },
  ];

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
      className="w-full rounded-2xl shadow-xl shadow-warm-beige/50 py-4 px-6 flex flex-col lg:flex-row gap-8 items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/mesh-994.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="lg:w-3/10 h-full flex flex-col items-center justify-between py-6 px-2 relative overflow-hidden">
        <p className="absolute top-4 left-4 text-sm text-gold/80 z-10">
          What are the latest interior design trends in Pune?
        </p>

        {/* Animated Headline */}
        <motion.h1
          className="text-5xl lg:text-5xl pt-32 pb-36 font-normal pl-3 bg-gradient-to-r from-white via-warm-beige to-gold text-transparent bg-clip-text z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Interior - New Trends
        </motion.h1>

        {/* Animated Counter */}
        <motion.div
          className="absolute bottom-4 left-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-3xl font-bold text-warm-beige">{counter}+</p>
          <p className="text-sm text-light-gray">Projects Completed</p>
        </motion.div>

        {/* Social Icons */}
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
      <div className="lg:w-7/10 flex flex-col justify-center bg-warm-white rounded-l-3xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-15 relative z-10 p-4 py-6 lg:px-8 lg:pt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start relative space-y-3"
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 border-2 border-warm-beige flex items-center justify-center rounded-full">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-xl font-normal bg-gradient-to-r from-soft-white to-warm-beige text-transparent bg-clip-text">
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
