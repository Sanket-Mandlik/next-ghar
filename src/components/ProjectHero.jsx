import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const categories = {
    "Living": [
        { image: "/assets/project1.webp", title: "Warm Living Room", subtitle: "Baner" },
        { image: "/assets/project3.webp", title: "Cozy Dining & Comfort Seating", subtitle: "K Town, Baner" },
    ],
    "Kitchen": [
        { image: "/assets/project2.webp", title: "Modular Kitchen in Kalyani Nagar", subtitle: "Pune" },
        { image: "/assets/project2.webp", title: "Stylish Kitchen", subtitle: "Wakad" },
    ],
    "Bedroom": [
     
        { image: "/assets/project8.webp", title: "Minimalist Bedroom", subtitle: "Pimple Nilakh" },
        { image: "/assets/project10.webp", title: "Luxury Bedroom", subtitle: "SB Road" },
    ],
    "Kid's ": [
        { image: "/assets/project12.webp", title: "Colorful Kids Space", subtitle: "Aundh" },
        { image: "/assets/project19.webp", title: "Fun Kids Room", subtitle: "Hadapsar" },

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
    const [selectedCategory, setSelectedCategory] = useState("Living");
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
        <div className="w-full aspect-[4/3] lg:aspect-[16/8] rounded-4xl overflow-hidden relative shadow-xl shadow-warm-beige/50 bg-dark-brown">
          <div className="absolute inset-0">
    {currentProjects.map((project, index) => (
        <motion.div
            key={project.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 80vw"
            />
        </motion.div>
    ))}
</div>


            {/* Project Tag at Bottom */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
                <span className="px-4 py-2 bg-gold text-white text-sm font-medium rounded-full shadow-lg">
                    Supreme Estia, Baner
                </span>
            </div>

            {/* Category Menu */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex sm:gap-4 z-20 bg-warm-beige/40 backdrop-blur-sm px-6 py-2 min-w-[80vw] sm:min-w-[50vw] lg:min-w-0 justify-center rounded-full shadow-md">
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
