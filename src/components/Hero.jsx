import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import NextImage from "next/image";

// Background images
const images = [
    { src: "/assets/harshal-cover.jpg", alt: "Elegant contemporary home design in Baner" },

  { src: "/assets/ekta-cover.jpg", alt: "Modern luxury residence interior in Pune" },
  { src: "/assets/supreme estia cover.jpeg", alt: "Sophisticated interior at Supreme Estia, Baner" },
];

// Container animation
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

// Child animations
const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Image transition
const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
    <motion.div
      className="w-full lg:pr-4 2xl:pr-6 lg:pl-2 flex mx-auto justify-center lg:mt-[6vh] mb-10 relative"
      variants={containerVariants}
      initial={!isMobile ? "hidden" : false}
      animate={!isMobile ? "visible" : false}
    >
      <section className="relative w-full h-[100vh] lg:h-[93vh] lg:rounded-[30px] bg-dark-brown overflow-hidden">
        {/* Image Slideshow */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <NextImage
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              fill
              priority={currentImage === 0}
              quality={80}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Block */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/50 to-transparent pt-32 pb-10 lg:pt-48 lg:pb-16 px-6 lg:px-20">
          <motion.div
            className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-end w-full gap-x-10 lg:gap-x-15"
            variants={childVariants}
            initial={!isMobile ? "hidden" : false}
            animate={!isMobile ? "visible" : false}
          >
            {/* Title */}
            <div className="w-full lg:w-3/5 lg:pr-15 flex-shrink-0">
              {isMobile ? (
                <h1 className="text-5xl 2xl:text-6xl font-medium leading-tight text-soft-white">
                  Interior Designers in Pune - Ready In 45 Days
                </h1>
              ) : (
                <motion.h1
                  className="text-5xl xl:text-[50px] 2xl:text-6xl font-medium leading-tight text-soft-white"
                  variants={childVariants}
                >
                 Top Interior Designers in Pune - Ready In 45 Days
                </motion.h1>
              )}
            </div>

            {/* Subtitle + CTA */}
            <motion.div
              className="w-full lg:w-2/5 flex flex-col items-start justify-end text-left mt-4 lg:mt-0"
              variants={childVariants}
            >
              <h2 className="text-md lg:text-lg 2xl:text-xl font-medium text-light-gray">
                Make My Ghar offers home decor, lifestyle solutions, and home interiors in Pune.              </h2>
              <div className="mt-4 lg:mt-6">
                <Link href="/contactus" passHref>
                  <button
                    className="flex items-center gap-2 bg-gradient-to-b hover:scale-102 from-pure-white via-soft-white to-pure-white text-md lg:text-md font-semibold tracking-wider border-2 border-gold text-dark-brown px-6 py-3 rounded-xl shadow-xl hover:text-dark-brown transition-all group min-h-[48px]"
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
