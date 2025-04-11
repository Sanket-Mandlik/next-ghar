import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        image: "/assets/project6.jpeg",
        title: "Cozy Dining & Comfort Seating",
        subtitle: "K Town, Baner",
    },
    {
        image: "/assets/project2.jpeg",
        title: "Modular Kitchen in Kalyani Nagar",
        subtitle: "Pune",
    },
    {
        image: "/assets/project10.jpeg",
        title: "Creative Kids Bedroom",
        subtitle: "Imperial Towers, Shivaji Nagar",
    },
];

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
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[550px] lg:h-[600px] rounded-2xl overflow-hidden relative shadow-xl shadow-warm-beige/50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${projects[currentImage].image})` }}
                />
            </AnimatePresence>

            {/* Animated Text Overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`text-${currentImage}`}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-warm-beige/30 backdrop-blur-sm rounded-xl px-6 py-4 z-10 text-center"
                >
                    <h2 className="text-soft-white text-xl font-medium">
                        {projects[currentImage].title}
                    </h2>
                    <p className="text-black text-sm">{projects[currentImage].subtitle}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectsHero;
