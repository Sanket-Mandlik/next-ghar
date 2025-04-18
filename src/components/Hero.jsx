import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const images = ["/assets/project1.jpeg","/assets/project6.jpeg", "/assets/project3.jpeg"];

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

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const imageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 1.5, ease: "easeIn" } },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full lg:pr-4 2xl:pr-6 lg:pl-2 flex mx-auto justify-center lg:mt-[6vh] mb-10 relative"
      variants={!isMobile ? containerVariants : undefined}
      initial={!isMobile ? "hidden" : false}
      animate={!isMobile ? "visible" : false}
    >
      <section className="relative w-full h-[100vh] lg:h-[93vh] lg:rounded-2xl bg-gradient-to-t from-black/50 to-black/10 overflow-hidden">
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

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-black/0 backdrop-blur-sm py-13 lg:py-10 px-6 lg:px-20">
          <motion.div
            className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-end w-full gap-x-10 lg:gap-x-20"
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="w-full lg:w-3/5 lg:pr-20 flex-shrink-0" variants={childVariants}>
              <h1 className="text-5xl lg:text-6xl font-medium font-heading leading-tight text-soft-white">
                Make My Ghar{" "}
                <span className="text-soft-white font-medium"> Pune, </span>
                <span className="text-white font-medium">Interior In 45 Days </span>
              </h1>
            </motion.div>

            <motion.div className="w-full lg:w-2/5 flex flex-col items-start justify-end text-left mt-4 lg:mt-0" variants={childVariants}>
              <p className="text-md lg:text-xl font-medium text-light-gray">
                Make My Ghar transforms your space into a modern home using top-tier materials.
              </p>
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
