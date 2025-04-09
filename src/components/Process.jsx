import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(0);
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
        {/* Gradient overlay left */}
       

        <p className="absolute top-4 left-4 text-sm text-gold/80 z-10">
          Building dreams, one step at a time.
        </p>

        <h1 className="text-5xl md:text-6xl pt-32 pb-36 font-normal pl-3 bg-gradient-to-r from-white via-warm-beige to-gold text-transparent bg-clip-text z-10">
          Process - Perfected
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

   {/* Right Section */}
<div className="md:w-7/10 flex flex-col justify-center bg-warm-white rounded-l-3xl relative overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 relative z-10 p-4 py-6 md:px-8 md:pt-8 ">
    {[
       {
        number: 1,
        name: "Initiation",
        description: `Initial 5% payment\nSite measurements and brief capture`,
      },
      {
        number: 2,
        name: "Discussion",
        description: `Next 5% payment\nDesign concepts & floor plan discussion (PPT)\nMaterial preferences for walls/furniture`,
      },
      {
        number: 3,
        name: "Quote",
        description: `Quote revision (if needed)\n3D renders and visual options shared`,
      },
      {
        number: 4,
        name: "Finalisation",
        description: `Design confirmation\n40% payment towards execution`,
      },
      {
        number: 5,
        name: "Execution",
        description: `Vendor assignment\nDetailed site meeting with final 3Ds and working drawings \nExecution phase\n`,
      },
      {
        number: 6,
        name: "Handover",
        description: `Final 50% before handover\nProject completion and handover`,
      },
    ].map((process, index, array) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-start relative space-y-2"
      >
        {/* Number Circle */}
        <div className="w-10 h-10 border-2 border-warm-beige text-soft-white flex items-center justify-center rounded-full font-bold text-lg">
          {process.number}
        </div>

        {/* Step Name */}
        <h3 className="text-lg font-normal bg-gradient-to-r from-soft-white to-warm-beige text-transparent bg-clip-text">
          Step {process.number}: {process.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-medium-brown font-normal whitespace-pre-line">
          {process.description}
        </p>

        {/* Arrow to next step */}
        {index < array.length - 1 && (
          <div className="absolute right-[10px] top-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </motion.div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Process;
