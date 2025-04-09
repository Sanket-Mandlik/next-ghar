import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Your background images
const images = ["/assets/project1.jpeg","/assets/project6.jpeg", "/assets/project3.jpeg"];

// Variants for the outer container
const containerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  }
};

// Variants for the child elements
const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Variants for the background image transition
const imageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 1.5, ease: "easeIn" } },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full md:px-2 flex mx-auto justify-center -mt-14 mb-10 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="relative w-full h-[85vh] md:h-[93vh] md:rounded-2xl overflow-hidden">
        {/* Animated Background with Enhanced Transition */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentImage}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Blur Effect at the Bottom */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          <div className="absolute bottom-0 md:inset-x-0 h-[33%] backdrop-blur-xs"></div>
        </div>

        {/* Content Container - Adjusted for Mobile */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-end h-full px-4 md:px-20 py-15 md:py-10 gap-x-10 md:gap-x-20"
          variants={childVariants}
        >
          {/* Left Section: Title */}
          <motion.div className="w-full md:w-3/5 flex-shrink-0" variants={childVariants}>
            <h1 className="text-4xl md:text-6xl font-medium font-heading leading-tight text-soft-white">
              From Apartment To <br />
              <span className="text-soft-white font-medium">Ghar</span> In{" "}
              <span className="text-soft-white font-medium">45 Days</span>
            </h1>
          </motion.div>

          {/* Right Section: Description and Button */}
          <motion.div className="w-full md:w-2/5 flex flex-col items-start justify-end text-left mt-4 md:mt-0" variants={childVariants}>
            <p className="text-md md:text-xl font-medium md:pb-0 pb-8 text-light-gray">
              Make My Ghar transforms your space into a modern home using top-tier materials.
            </p>
            <div className="mt-4 md:mt-6">
              <button className="flex items-center gap-2 bg-gradient-to-b from-pure-white via-soft-white to-pure-white text-md md:text-lg font-semibold text-dark-brown px-6 py-3 rounded-xl shadow-xl hover:text-dark-brown transition-all">
                Start Your Journey
                <FaArrowRight className="transition-transform duration-500 group-hover:rotate-180" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Hero;