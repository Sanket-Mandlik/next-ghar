import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = {
    "Living": [
        { image: "/assets/harshal-cover.jpg", title: "Kalpataru Jade - Living Room", subtitle: "Contemporary Design" },
        { image: "/assets/harshal-living (2).jpg", title: "Kalpataru Jade - Lounge Space", subtitle: "Modern Comfort" },
    ],
    "Dining": [
        { image: "/assets/harshal-living (1).jpg", title: "Kalpataru Jade - Dining Area", subtitle: "Elegant Dining" },
    ],
    "Bedroom": [
        { image: "/assets/harshal bedroom (2).jpg", title: "Kalpataru Jade - Master Bedroom", subtitle: "Luxury Suite" },
        { image: "/assets/harshal bedroom (1).jpg", title: "Kalpataru Jade - Bedroom Detail", subtitle: "Minimalist Decor" },
    ],
    "Pooja & Others": [
        { image: "/assets/harsha others (1).jpg", title: "Kalpataru Jade - Vanity Design", subtitle: "Smart Storage" },
        { image: "/assets/harsha others (2).jpg", title: "Kalpataru Jade - Pooja + Study Area", subtitle: "Functional Spaces" },
        { image: "/assets/harsha others (3).jpg", title: "Kalpataru Jade - Pooja Unit", subtitle: "Serene Design" },
    ],
};

const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.8, ease: "easeIn" } },
};

const HarshalHero = () => {
    const [selectedCategory, setSelectedCategory] = useState("Living");
    const [currentImage, setCurrentImage] = useState(0);
    const currentProjects = categories[selectedCategory];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % currentProjects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [selectedCategory, currentProjects.length]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentImage(0);
    };

    return (
        <div className="w-full h-[550px] lg:h-[600px] rounded-2xl overflow-hidden relative shadow-xl shadow-warm-beige/50 bg-dark-brown mt-20">
            <div className="absolute inset-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={`${selectedCategory}-${currentImage}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <Image 
                            src={currentProjects[currentImage].image}
                            alt={currentProjects[currentImage].title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Project Tag at Bottom */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
                <span className="px-4 py-2 bg-gold text-white text-sm font-medium rounded-full shadow-lg whitespace-nowrap">
                    Kalpataru Jade - {selectedCategory}
                </span>
            </div>

            {/* Category Menu */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex sm:gap-4 z-20 bg-warm-beige/40 backdrop-blur-md px-6 py-2 min-w-[80vw] sm:min-w-[50vw] lg:min-w-0 justify-center rounded-full shadow-md border border-white/10">
                {Object.keys(categories).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
                            cat === selectedCategory
                                ? "bg-gold text-white shadow-lg"
                                : "text-soft-white hover:bg-gold/40"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HarshalHero;
