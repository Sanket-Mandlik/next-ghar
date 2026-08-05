import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import NextImage from "next/image";

// Background images
const images = [
  { src: "/assets/harshal-cover.jpg", alt: "Elegant contemporary home design in Baner" },
  { src: "/assets/ekta-cover.jpg", alt: "Modern luxury residence interior in Pune" },
  { src: "/assets/Supreme Estia/supreme estia cover.jpeg", alt: "Sophisticated interior at Supreme Estia, Baner" },
];

// Container animation - Concurrent scaling and child animations
const containerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      // Removed when: "beforeChildren" to allow concurrent animation
      staggerChildren: 0.1,
    },
  },
};

// Overlay animation - No delay, comes with the image
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

// Child animations - No delay, comes with the image
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
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
    <div className="w-full h-screen mx-auto justify-center relative overflow-hidden bg-soft-white">
      <motion.div
        className="w-full h-full relative overflow-hidden origin-center"
        variants={containerVariants}
        initial={!isMobile ? "hidden" : false}
        animate={!isMobile ? "visible" : false}
      >
        <section className="relative w-full h-full overflow-hidden">
          {/* Image Slideshow */}
          <div className="absolute inset-0 z-0">
            {images && images.map((img, index) => (
              <motion.div
                key={index}
                initial={index === 0 ? { opacity: 1 } : { opacity: 0 }}
                animate={{ 
                  opacity: index === currentImage ? 1 : 0,
                  scale: index === currentImage ? 1.05 : 1 
                }}
                transition={{ 
                    opacity: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 5, ease: "linear" }
                }}
                className="absolute inset-0"
              >
                <NextImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={85}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Concurrent Overlay & Content Block */}
          <motion.div 
            className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-40 pb-12 lg:pt-56 lg:pb-20 px-6 lg:px-20 z-10"
            variants={overlayVariants}
          >
            <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-end w-full gap-x-10 lg:gap-x-15">
              {/* Title */}
              <div className="w-full lg:w-3/5 lg:pr-15 flex-shrink-0">
                {isMobile ? (
                  <>
                    <h1 className="text-5xl 2xl:text-6xl font-medium leading-tight text-soft-white">
                      Interior Designers in Pune - Ready In 45 Days
                    </h1>
                    <div className="h-1 bg-gold mt-4 rounded-full w-[100px]" />
                  </>
                ) : (
                  <>
                    <motion.h1
                      className="text-5xl xl:text-[50px] 2xl:text-6xl font-medium leading-tight text-soft-white"
                      variants={childVariants}
                    >
                     Top Interior Designers in Pune - Ready In 45 Days
                    </motion.h1>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100px" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="h-1 bg-gold mt-4 rounded-full"
                    />
                  </>
                )}
              </div>

              {/* Subtitle + CTA */}
              <motion.div
                className="w-full lg:w-2/5 flex flex-col items-start justify-end text-left mt-6 lg:mt-0"
                variants={childVariants}
              >
                <h2 className="text-md lg:text-lg 2xl:text-xl font-medium text-light-gray">
                  Make My Ghar offers home decor, lifestyle solutions, and home interiors in Pune.
                </h2>
                <div className="mt-6 lg:mt-8">
                  <Link href="/contactus" passHref>
                    <button
                      className="flex items-center gap-2 bg-gradient-to-b hover:scale-105 from-pure-white via-soft-white to-pure-white text-md font-semibold tracking-wider border-2 border-gold text-dark-brown px-8 py-4 rounded-xl shadow-2xl transition-all group"
                      aria-label="Start Your Journey"
                    >
                      Start Your Journey
                      <FaArrowRight className="transition-transform duration-500 group-hover:rotate-180" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Hero;
