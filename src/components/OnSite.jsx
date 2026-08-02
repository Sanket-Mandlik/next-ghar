import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

const OnSite = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        { id: 1, src: "/assets/vid (1).mp4", title: "Site Progress - Phase 1", thumbnail: "/assets/site (1).jpg" },
        { id: 2, src: "/assets/vid (2).mp4", title: "Quality Check & Detailing", thumbnail: "/assets/site (2).jpg" },
    ];

    const images = [
        { src: "/assets/site (1).jpg", alt: "On-site progress 1" },
        { src: "/assets/site (2).jpg", alt: "On-site progress 2" },
        { src: "/assets/site (3).jpg", alt: "On-site progress 3" },
        { src: "/assets/site (4).jpg", alt: "On-site progress 4" },
    ];

    return (
        <section className="w-full pt-20 bg-soft-white overflow-hidden">
            <div className="lg:w-4/5 mx-auto px-4 lg:px-0">
                {/* Heading */}
                <div className="mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-medium text-dark-brown leading-tight"
                    >
                        Actual <span className="text-gold">On-Site</span> Execution <br />
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-gold mt-4 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
                    {/* Left: Videos dynamically matching Right column height */}
                    <div className="grid grid-cols-2 gap-2 h-full">
                        {videos.map((vid) => (
                            <motion.div 
                                key={vid.id}
                                whileHover={{ scale: 1.01 }}
                                className="relative h-full rounded-2xl overflow-hidden -2xl cursor-pointer group min-h-[300px] lg:min-h-0"
                                onClick={() => setActiveVideo(vid.src)}
                            >
                                <Image 
                                    src={vid.thumbnail} 
                                    alt={vid.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 1024px) 50vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-gold/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/30 transform transition-transform group-hover:scale-110">
                                        <Play fill="currentColor" size={24} className="ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-white">
                                    <p className="font-medium text-sm leading-tight  text-white">{vid.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: 4 Images in 2x2 Grid (4:3) - Sets the height for the row */}
                    <div className="grid grid-cols-2 gap-2">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden -xl"
                            >
                                <Image 
                                    src={img.src} 
                                    alt={img.alt}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 50vw, 20vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-10"
                    >
                        <button 
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[110]"
                        >
                            <X size={40} />
                        </button>
                        <div className="h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden -[0_0_50px_rgba(212,175,55,0.3)] bg-black">
                            <video 
                                src={activeVideo} 
                                controls 
                                autoPlay 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OnSite;
