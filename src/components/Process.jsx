import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const [counter, setCounter] = useState(0);

  const processes = [
    {
      number: 1,
      name: "Vision",
      description:
        "Our process begins with a detailed consultation where we take the time to understand your vision, preferences, and requirements. This step ensures that we align our expertise with your expectations to create a personalized plan tailored to your needs.",
    },
    {
      number: 2,
      name: "Design",
      description:
        "In the design phase, our team of creative experts crafts a custom design that reflects your style and functionality requirements. We focus on every detail, from layout and materials to aesthetics, ensuring a perfect balance between form and function.",
    },
    {
      number: 3,
      name: "Execution",
      description:
        "Once the design is finalized, our skilled professionals bring the vision to life with precision and care. We ensure that every aspect of the project is executed to the highest standards, using quality materials and expert craftsmanship.",
    },
    {
      number: 4,
      name: "Delivery",
      description:
        "After the execution phase, we meticulously review every detail to ensure perfection. The finished project is then delivered to you, exceeding your expectations and ready to transform your space into something extraordinary.",
    },
    {
      number: 5,
      name: "Support",
      description:
        "Even after the project is completed, our commitment to you continues. We provide ongoing support and assistance to ensure your satisfaction and address any concerns, making sure your experience remains seamless and enjoyable.",
    },
  ];

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
      className="w-full rounded-2xl shadow-xl shadow-warm-beige/50 py-4 px-6 flex flex-col md:flex-row gap-20 items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/mesh-994.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="md:w-1/3 h-full flex flex-col items-center justify-between p-6 relative overflow-hidden">
        {/* Gradient overlay left */}
       

        <p className="absolute top-4 left-4 text-sm text-gold/80 z-10">
          Building dreams, one step at a time.
        </p>

        <h1 className="text-5xl md:text-6xl py-35 font-normal pl-3 bg-gradient-to-r from-white to-warm-beige text-transparent bg-clip-text z-10">
          Process - Perfected
        </h1>

        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-3xl font-bold text-soft-white">{counter}+</p>
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
    {/* Right Section */}
<div className="md:w-2/3 hidden md:flex flex-col justify-center bg-warm-white rounded-l-3xl relative overflow-hidden">
  <div className="grid grid-cols-2 gap-12 relative z-10 p-10">

    {processes.slice(0, 4).map((process, index) => {
      const shortDescriptions = [
        "We understand your vision and preferences.",
        "We craft a personalized, stylish design.",
        "We bring the design to life with quality.",
        "We deliver and review everything carefully.",
      ];

      return (
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
            {process.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-medium-brown font-normal">
            {shortDescriptions[index]}
          </p>

          {/* Arrow to next step */}
          {index < 3 && (
            <div className="absolute right-[-20px] top-[20px]">
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
      );
    })}
  </div>
</div>

    </div>
  );
};

export default Process;
