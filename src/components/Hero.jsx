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

// Container animation (Original effect that includes image scaling)
const containerVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8, // Slightly slower for more impact
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
      className="w-full h-screen mx-auto justify-center relative bg-soft-white"
      variants={containerVariants}
      initial={!isMobile ? "hidden" : false}
      animate={!isMobile ? "visible" : false}
    >
      <section 
        className="relative w-full h-full overflow-hidden"
        style={{ 
          backgroundImage: images && images.length > 0 ? `url(${images[0].src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={index === 0 ? { opacity: 1 } : { opacity: 0 }}
              animate={{ 
                opacity: index === currentImage ? 1 : 0,
                scale: index === currentImage ? 1.05 : 1 
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <NextImage
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={75}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Content Block */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/50 to-transparent pt-32 pb-10 lg:pt-48 lg:pb-16 px-6 lg:px-20">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-end w-full gap-x-10 lg:gap-x-15">
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
              className="w-full lg:w-2/5 flex flex-col items-start justify-end text-left mt-4 lg:mt-0"
              variants={childVariants}
            >
              <h2 className="text-md lg:text-lg 2xl:text-xl font-medium text-light-gray">
                Make My Ghar offers home decor, lifestyle solutions, and home interiors in Pune.
              </h2>
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
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
