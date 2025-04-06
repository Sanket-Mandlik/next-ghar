import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesPage = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row gap-4 min-h-[90vh]">
      {/* Left Section – 100% on mobile, 30% on desktop */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-[30%] relative rounded-2xl overflow-hidden group"
      >
        <div
          className="h-[40vh] md:h-full w-full shadow-lg bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/project7.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/50 group-hover:backdrop-blur-sm transition duration-300 rounded-2xl" />
          <div className="absolute bottom-10 md:bottom-4 left-4 text-left md:text-soft-white z-10 pr-4 p-4">
            <h2 className="text-4xl md:text-5xl font-normal mb-4 text-soft-white">Complete Makeover</h2>
            <p className="text-base text-soft-white">
              Tailored interiors reflecting individual lifestyles and tastes for a truly unique home.
            </p>
          </div>
          <div className="absolute bottom-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="border border-soft-white text-soft-white text-sm px-4 py-1 rounded-full hover:bg-soft-white hover:text-black transition">
              View
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="w-full md:w-[70%] flex flex-col gap-4">
        {/* Top Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-[40vh] md:h-[44vh] relative rounded-2xl overflow-hidden group"
        >
          <div
            className="h-full w-full bg-cover shadow-lg bg-center relative"
            style={{ backgroundImage: "url('/assets/project3.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:backdrop-blur-sm transition duration-300 rounded-2xl" />
            <div className="absolute bottom-15 md:inset-0 md:flex md:flex-col md:items-center md:justify-center text-left md:text-center text-soft-white px-6">
              <h2 className="text-4xl md:text-4xl font-normal mb-4">Spacious Planning</h2>
              <p className="text-base max-w-md">
                Intelligent use of available space, blending utility with comfort and style seamlessly.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="border border-soft-white text-soft-white text-sm px-4 py-1 rounded-full hover:bg-soft-white hover:text-black transition">
                View
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-4 h-[90vh] md:h-[44vh]">
          {/* Left */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-[60%] relative rounded-2xl overflow-hidden group"
          >
            <div
              className="h-[40vh] md:h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: "url('/assets/project2.jpeg')" }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:backdrop-blur-sm transition duration-300 rounded-2xl" />
              <div className="absolute bottom-15 md:inset-0 md:flex md:flex-col md:items-center md:justify-center text-left md:text-center text-soft-white px-6">
                <h2 className="text-4xl md:text-4xl font-normal mb-4">Innovative Kitchen</h2>
                <p className="text-base max-w-md">
                  Functional layouts infused with elegance, designed for culinary creativity and ease.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="border border-soft-white text-soft-white text-sm px-4 py-1 rounded-full hover:bg-soft-white hover:text-black transition">
                  View
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-[40%] relative rounded-2xl overflow-hidden group"
          >
            <div
              className="h-[40vh] md:h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: "url('/assets/project5.jpeg')" }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:backdrop-blur-sm transition duration-300 rounded-2xl" />
              <div className="absolute bottom-15 md:inset-0 md:flex md:flex-col md:items-center md:justify-center text-left md:text-center text-soft-white px-6">
                <h2 className="text-4xl md:text-4xl font-normal mb-4">Commercial</h2>
                <p className="text-base max-w-md">Vibrant textures and standout elements.</p>
              </div>
              <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="border border-soft-white text-soft-white text-sm px-4 py-1 rounded-full hover:bg-soft-white hover:text-black transition">
                  View
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
