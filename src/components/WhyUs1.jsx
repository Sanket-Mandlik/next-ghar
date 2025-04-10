import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const WhyUs1 = () => {
  const [count, setCount] = useState(0);
  const sliderRef = useRef(null);

  const sliderImages = [
    "/assets/project5.jpeg",
    "/assets/project8.jpeg",
    "/assets/project10.jpeg",
  
  ];

  useEffect(() => {
    let start = 0;
    const end = 120;
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(2000 / (end - start)));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, []);

  // Auto-scroll the slider
  useEffect(() => {
    const scrollImages = () => {
      if (!sliderRef.current) return;

      let position = 0;
      const containerWidth = sliderRef.current.scrollWidth / 2;

      const move = () => {
        if (!sliderRef.current) return;

        position -= 1;
        if (Math.abs(position) >= containerWidth) {
          position = 0;
        }

        sliderRef.current.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(move);
      };

      move();
    };

    scrollImages();
  }, []);

  return (
    <div
      className="lg:w-4/5 mx-auto mt-30 bg-cover bg-center shadow-xl shadow-warm-beige/50 bg-no-repeat gap-6 flex flex-col lg:flex-row items-center justify-center rounded-2xl"
      style={{
        backgroundImage: "url('/assets/mesh-994.png')",
      }}
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/3 h-full p-6 rounded-xl text-soft-white relative flex flex-col justify-center items-center"
      >
        <p className="absolute top-4 left-10 text-sm text-medium-brown">
          Building dreams, one home at a time.
        </p>
        <h2 className="text-5xl sm:text-6xl py-35 font-normal text-center mb-3 bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent">
          Excellent Execution
        </h2>
        <div className="absolute bottom-3 left-10 text-left">
          <p className="text-3xl sm:text-4xl text-warm-beige font-extrabold text-golden">
            {count}+
          </p>
          <p className="text-md sm:text-lg text-light-gray">
            Projects Completed
          </p>
        </div>
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

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:w-2/3 p-8 rounded-2xl flex flex-col items-start justify-start"
      >
        <h2 className="text-4xl lg:text-4xl font-normal mb-6">
          <span className="bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent">
            Customize
          </span>{" "}
          <span className="bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent">
            With Options
          </span>
        </h2>

        

        {/* Image Slider */}
        <div className="relative w-full rounded-xl overflow-hidden mt-2 mb-4">
          <div ref={sliderRef} className="flex gap-4 flex-nowrap">
            {[...sliderImages, ...sliderImages].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className="h-[40vh] w-auto rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>

        <p className="text-md font-normal mt-2 bg-gradient-to-br from-warm-beige to-gold bg-clip-text text-transparent">
          At Make My Ghar, we bring your dream home to life with precision,
          creativity, and unmatched craftsmanship. Let us transform your space
          into a masterpiece.
        </p>
      </motion.div>
    </div>
  );
};

export default WhyUs1;
