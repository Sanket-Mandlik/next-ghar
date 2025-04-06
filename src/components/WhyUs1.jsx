import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const WhyUs1 = () => {
  const [count, setCount] = useState(0);

  // Simulate a counter animation for projects completed
  useEffect(() => {
    let start = 0;
    const end = 120; // Replace with your actual project count
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(2000 / (end - start)));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, []);

  return (
<div
  className="md:w-4/5 mx-auto mt-30 bg-cover bg-center shadow-xl shadow-warm-beige/50 bg-no-repeat gap-6 flex flex-col md:flex-row items-center justify-center rounded-2xl "
  style={{
    backgroundImage: "url('/assets/mesh-994.png')", // Replace with your image path
  }}
>      {/* Left Section - Soft White Background */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-1/3 h-full p-6 rounded-xl  text-soft-white relative flex flex-col justify-center items-center"
      
      >
        {/* Small Text at Top Left */}
        <p className="absolute top-4 left-10 text-sm text-light-gray">
          Building dreams, one home at a time.
        </p>

        {/* "About Us" Text in Center */}
        <h2 className="text-5xl sm:text-6xl py-35 font-normal text-center mb-3 bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent">
  Amazing Designs
</h2>


        {/* Animated Counter */}
        <div className="absolute bottom-3 left-10 text-left">
          <p className="text-3xl sm:text-4xl font-extrabold text-golden">
            {count}+
          </p>
          <p className="text-md sm:text-lg text-light-gray">
            Projects Completed
          </p>
        </div>

        {/* Social Media Links */}
        <div className="absolute bottom-4 right-4 flex space-x-4">
          <a
            href="https://www.instagram.com/mgdesign127"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-golden text-2xl hover:text-soft-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/company/100958944"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-golden text-2xl hover:text-soft-white transition" />
          </a>
        </div>
      </motion.div>

    <div className="h-full w-[2px] bg-light-gray "></div>

      {/* Right Section - Multicolor Heading, Description, and Tilted Images */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-2/3 p-8 rounded-3xl flex flex-col items-start justify-start"
      >
        {/* Multicolor Heading */}
        <h2 className="text-4xl md:text-4xl font-normal mb-15">
  <span className="bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent">
    Customize
  </span>{" "}
  <span className="bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent">
    With Options
  </span>
</h2>


        {/* Description */}
        

        {/* Tilted Overlapping Images */}
        <div className="flex items-center justify-start space-x-[-130px] md:space-x-[-135px]">
          <img
            src="/assets/project1.jpeg"
            alt="Project 1"
            className="w-50 h-30 md:w-80 md:h-60 rounded-xl shadow-xl object-cover transform rotate-6"
          />
          <img
            src="/assets/project2.jpeg"
            alt="Project 2"
            className="w-50 h-30 md:w-80 md:h-60 rounded-xl shadow-xl object-cover transform rotate-6"
          />
          <img
            src="/assets/project3.jpeg"
            alt="Project 3"
            className="w-50 h-30 md:w-80 md:h-60 rounded-xl shadow-xl object-cover transform rotate-6"
          />
        </div>




        <p className="text-md font-normal mt-15 bg-gradient-to-br from-warm-beige to-gold bg-clip-text text-transparent">
  At Make My Ghar, we bring your dream home to life with precision,
  creativity, and unmatched craftsmanship. Let us transform your space
  into a masterpiece.
</p>

      </motion.div>
    </div>
  );
};

export default WhyUs1;