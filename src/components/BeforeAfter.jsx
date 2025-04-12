import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
  "Before": [
    { image: "/assets/before1.jpeg", title: "Before Renovation", subtitle: "Original Layout" },
  ],
  "Render": [
    { image: "/assets/render1.jpg", title: "3D Render", subtitle: "Visual Plan" },
  ],
  "After 1": [
    { image: "/assets/after1.png", title: "After Renovation - Phase 1", subtitle: "Living Room" },
  ],
  "After 2": [
    { image: "/assets/after2.png", title: "After Renovation - Phase 2", subtitle: "Kitchen & Dining" },
  ],
  "After 3": [
    { image: "/assets/after3.jpeg", title: "Final Outcome", subtitle: "Full View" },
  ],
};

const imageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 1.5, ease: "easeIn" } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.8, ease: "easeIn" } },
};

const BeforeAfter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Render");
  const [currentImage, setCurrentImage] = useState(0);
  const currentProjects = categories[selectedCategory];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % currentProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentImage(0);
  };

  return (
    <div className="w-[95vw] lg:w-4/5 mx-3 lg:mx-auto flex flex-col items-start mt-10 lg:mt-30">

      {/* Heading Above the container */}
      <motion.h2
        className="text-5xl lg:text-5xl font-montserrat text-medium-brown font-medium text-start mb-6 lg:px-0 px-4"
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <span className="text-dark-brown">Customize With </span>
   Options
      </motion.h2>

      {/* Image Container */}
      <div className=" w-full h-[55vh] lg:h-[82vh] rounded-2xl overflow-hidden relative shadow-xl shadow-warm-beige/50 bg-warm-beige">

        {/* Slide-In Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProjects[currentImage].image}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{ backgroundImage: `url(${currentProjects[currentImage].image})` }}
          />
        </AnimatePresence>

        {/* Category Buttons */}
        <div className="absolute top-6 lg:top-8 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row gap-2 z-30 items-center">
          <div className="flex gap-2 bg-warm-beige/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            {["Before", "Render"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                  cat === selectedCategory
                    ? "bg-gold text-white"
                    : "text-dark-brown hover:bg-gold/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-2 bg-warm-beige/40 backdrop-blur-sm px-4 justify-center py-2 rounded-full min-w-[260px] lg:min-w-0 shadow-md">
            {["After 1", "After 2", "After 3"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                  cat === selectedCategory
                    ? "bg-gold text-white"
                    : "text-dark-brown hover:bg-gold/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Text Overlay at bottom */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentImage}-${selectedCategory}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-warm-beige/50 backdrop-blur-sm rounded-xl px-6 py-4 z-20 text-center"
          >
            <h2 className="text-soft-white text-md lg:text-xl font-medium">
              {currentProjects[currentImage].title}
            </h2>
            <p className="text-dark-brown font-medium text-sm">
              {currentProjects[currentImage].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BeforeAfter;
