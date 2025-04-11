import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';


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
      className="w-full lg:pr-4 lg:pl-2 flex mx-auto justify-center lg:mt-[6vh] mb-10 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="relative w-full h-[100vh] lg:h-[93vh] lg:rounded-2xl bg-gradient-to-t from-black/50 to-black/10 overflow-hidden">
        {/* Animated Background with Enhanced Transition */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentImage}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute bg-gradient-to-t lg:rounded-2xl overflow-hidden inset-0"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Blur Effect at the Bottom */}
        <div className="absolute bottom-0 w-full  bg-gradient-to-t from-black/60 to-black/0 backdrop-blur-sm py-15 px-6 lg:px-20">
  <motion.div
    className="relative z-10 flex flex-col lg:flex-row items-start  lg:items-end justify-end w-full gap-x-10 lg:gap-x-20"
    variants={childVariants}
  >
    {/* Left Section: Title */}
    <motion.div className="w-full lg:w-3/5 lg:pr-20 flex-shrink-0" variants={childVariants}>
      <h1 className="text-5xl lg:text-6xl font-medium font-heading leading-tight text-soft-white">
        Make My Ghar{" "}
        <span className="text-soft-white  font-medium"> Pune, </span>
        <span className="text-white  font-medium">Interior In 45 Days </span>
      </h1>
    </motion.div>

    {/* Right Section: Description and Button */}
    <motion.div className="w-full lg:w-2/5 flex flex-col items-start justify-end text-left mt-4 lg:mt-0" variants={childVariants}>
      <p className="text-md lg:text-xl font-medium text-light-gray">
        Make My Ghar transforms your space into a modern home using top-tier materials.
      </p>
      <div className="mt-4 lg:mt-6">
    <Link href="/contactus" passHref>
      <button
        className="flex items-center gap-2 bg-gradient-to-b from-pure-white via-soft-white to-pure-white text-md lg:text-lg font-semibold text-gold px-6 py-3 rounded-xl shadow-xl hover:text-dark-brown transition-all group"
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