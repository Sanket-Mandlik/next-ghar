import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Image arrays for the top and bottom carousels
const topImages = [
  "/assets/project1.jpeg",
  "/assets/project2.jpeg",
  "/assets/project3.jpeg",
  "/assets/project4.jpeg",
];

const bottomImages = [
  "/assets/project5.jpeg",
  "/assets/project6.jpeg",
  "/assets/project7.jpeg",
  "/assets/project8.jpeg",
];

// Variants for the container with subtle animation
const containerVariants = {
  hidden: { opacity: 0.98, y: 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,  // Reduced from 0.2 to 0.1
      delayChildren: 0,      // Reduced from 0.1 to 0
    },
  },
};

// Variants for the text elements with more pronounced animation
const textVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const Projects = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const scrollImages = (containerRef, direction, speed) => {
      if (!containerRef.current) return;

      let position = 0;
      const containerWidth = containerRef.current.scrollWidth / 2;

      const move = () => {
        if (!containerRef.current) return;

        position += direction * speed;

        if (direction === -1 && Math.abs(position) >= containerWidth) {
          position = 0;
        } else if (direction === 1 && position >= 0) {
          position = -containerWidth;
        }

        containerRef.current.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(move);
      };

      move();
    };

    scrollImages(topRef, -1, 1.0); // Moves left faster
    scrollImages(bottomRef, 1, 0.6); // Moves right smoothly
  }, []);

  return (
    <motion.div
      className="flex flex-col lg:w-4/5 mx-4 max-w-screen-lg lg:mx-auto gap-4 mt-30 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-montserrat text-medium-brown font-medium mb-6"
        variants={textVariants}
      >
        <span className="text-dark-brown">Our Project</span> Gallery
      </motion.h2>

      {/* Top Carousel (Moves Left) */}
      <div className="relative w-full rounded-xl max-w-full overflow-hidden">
        <div ref={topRef} className="flex gap-4 flex-nowrap">
          {[...topImages, ...topImages].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className="lg:h-[45vh] max-w-full rounded-lg object-cover"
              variants={containerVariants}
            />
          ))}
        </div>
      </div>

      {/* Bottom Carousel with CTA Container */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-4">
        {/* Bottom Carousel */}
        <div className="relative rounded-xl lg:w-3/4 max-w-full overflow-hidden">
          <div ref={bottomRef} className="flex gap-4 flex-nowrap">
            {[...bottomImages, ...bottomImages].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Project ${index + 1}`}
                className="lg:h-[40vh] max-w-full rounded-xl object-cover"
                variants={containerVariants}
              />
            ))}
          </div>
        </div>

        {/* CTA Container */}
        <motion.div
  className="lg:w-1/4 h-[40vh] p-6 bg-warm-white text-dark-brown border-3 border-dashed border-gold rounded-2xl space-y-2  flex flex-col justify-center"
  variants={containerVariants}
>
  <motion.h2 className="text-3xl font-semibold" variants={textVariants}>
    Start Your Project
  </motion.h2>
  <motion.p className="text-lg mt-2" variants={textVariants}>
   Let's start decorating your home with Make My Ghar.
  </motion.p>
  <motion.button
    className="mt-4 px-6 py-2.5 text-xl bg-gradient-to-b from-gold to-dark-brown text-soft-white font-semibold rounded-lg hover:bg-medium-brown hover:text-pure-white transition-all"
    variants={textVariants}
  >
    Get Started
  </motion.button>
</motion.div>

      </div>
    </motion.div>
  );
};

export default Projects;
