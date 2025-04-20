import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import NextImage from "next/image"; // ✅ Rename import

// Your background images
const images = ["/assets/project1.webp", "/assets/project6.webp", "/assets/project3.webp"];

// Variants for the outer container
const containerVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Variants for the child elements
const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants for background image transition
const imageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 1, ease: "easeIn" } },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport for mobile-only overrides
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cycle background images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Preload other background images after first render
  useEffect(() => {
    images.slice(1).forEach((src) => {
      const img = new window.Image(); // ✅ Use browser-native Image constructor
      img.src = src;
    });
  }, []);

  return (
    <motion.div
    className="w-full lg:pr-4 2xl:pr-6 lg:pl-2 flex mx-auto justify-center lg:mt-[6vh] mb-10 relative"
    variants={!isMobile ? containerVariants : undefined}
    initial={!isMobile ? "hidden" : false}
    animate={!isMobile ? "visible" : false}
  >
  
      <section className="relative w-full h-[100vh] lg:h-[93vh] lg:rounded-2xl bg-gradient-to-t from-black/50 to-black/10 overflow-hidden">

        {/* Optimized First Image for LCP */}
        {currentImage === 0 && (
          <motion.div
            className="absolute inset-0 w-full h-full z-0"
            initial={isMobile ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NextImage
              src={images[0]}
              alt="Make My Ghar Project"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Animated Background Slideshow (skip if first image is showing) */}
        <AnimatePresence mode="wait">
          {currentImage !== 0 && (
            <motion.div
              key={currentImage}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bg-gradient-to-t lg:rounded-2xl overflow-hidden inset-0 z-0"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </AnimatePresence>

        {/* Bottom Gradient and Content */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-black/0 backdrop-blur-sm py-13 lg:py-10 px-6 lg:px-20">
          <motion.div
            className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-end w-full gap-x-10 lg:gap-x-20"
            variants={childVariants}
          >
            {/* Left Section: Title */}
            <motion.div className="w-full lg:w-3/5 lg:pr-20 flex-shrink-0" variants={childVariants}>
              <h1 className={`text-5xl lg:text-6xl font-medium leading-tight text-soft-white `}>
                Best Interior Design For Your Home In Pune
              </h1>
            </motion.div>

            {/* Right Section: Description and Button */}
            <motion.div
              className="w-full lg:w-2/5 flex flex-col items-start justify-end text-left mt-4 lg:mt-0"
              variants={childVariants}
            >
              <h2 className="text-md lg:text-xl font-medium text-light-gray">
                Make My Ghar transforms your space into a modern home using top-tier materials.
              </h2>
              <div className="mt-4 lg:mt-6">
                <Link href="/contactus" passHref>
                  <button
                    className="flex items-center gap-2 bg-gradient-to-b hover:scale-102 from-pure-white via-soft-white to-pure-white text-md lg:text-lg font-semibold text-gold px-6 py-3 rounded-xl shadow-xl hover:text-dark-brown transition-all group"
                    aria-label="Start Your Journey"
                  >
                    Start Your Journey
                    <FaArrowRight className="transition-transform duration-500 group-hover:rotate-180" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
