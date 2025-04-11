import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
    "Living & Dining": [
        { image: "/assets/project1.jpeg", title: "Warm Living Room", subtitle: "Baner" },
        { image: "/assets/project3.jpeg", title: "Cozy Dining & Comfort Seating", subtitle: "K Town, Baner" },
    ],
    "Kitchen": [
        { image: "/assets/project2.jpeg", title: "Modular Kitchen in Kalyani Nagar", subtitle: "Pune" },
        { image: "/assets/project2.jpeg", title: "Stylish Kitchen", subtitle: "Wakad" },
    ],
    "Bedroom": [
        { image: "/assets/project5.jpeg", title: "Elegant Master Bedroom", subtitle: "Bavdhan" },
        { image: "/assets/project8.jpeg", title: "Minimalist Bedroom", subtitle: "Pimple Nilakh" },
        { image: "/assets/project10.jpeg", title: "Luxury Bedroom", subtitle: "SB Road" },
    ],
    "Kids Bedroom": [
        { image: "/assets/project11.jpeg", title: "Colorful Kids Space", subtitle: "Aundh" },
        { image: "/assets/project12.jpeg", title: "Fun Kids Room", subtitle: "Hadapsar" },

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

const ProjectsHero = () => {
    const [selectedCategory, setSelectedCategory] = useState("Living & Dining");
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
        <div className="w-full h-[550px] lg:h-[600px] rounded-2xl overflow-hidden relative shadow-xl shadow-warm-beige/50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProjects[currentImage].image}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentProjects[currentImage].image})` }}
                />
            </AnimatePresence>

            {/* Text Overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`text-${currentImage}-${selectedCategory}`}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-warm-beige/30 backdrop-blur-sm rounded-xl px-6 py-4 z-10 text-center"
                >
                    <h2 className="text-soft-white text-xl font-medium">
                        {currentProjects[currentImage].title}
                    </h2>
                    <p className="text-black text-sm">{currentProjects[currentImage].subtitle}</p>
                </motion.div>
            </AnimatePresence>

            {/* Category Menu */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-20 bg-warm-beige/40 backdrop-blur-sm px-6 py-2 rounded-full shadow-md">
                {Object.keys(categories).map((cat) => (
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
    );
};

export default ProjectsHero;
