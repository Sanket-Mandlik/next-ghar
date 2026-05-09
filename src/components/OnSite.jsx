import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useSpring } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

const VideoItem = ({ src, id, isDragging, onActive }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const isPC = window.matchMedia("(hover: hover)").matches;
        if (isPC && videoRef.current) {
            if (isHovered && !isDragging) {
                videoRef.current.play().catch(() => {});
            } else {
                videoRef.current.pause();
            }
        }
    }, [isHovered, isDragging]);

    return (
        <motion.div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 0.98 }}
            className="relative flex-shrink-0 w-[200px] md:w-[280px] aspect-[10/16] rounded-2xl overflow-hidden group/item cursor-pointer"
            onClick={() => !isDragging && onActive(src)}
        >
            <video 
                ref={videoRef}
                src={src} 
                muted 
                loop 
                playsInline 
                autoPlay={typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40">
                    <Play fill="currentColor" size={24} className="ml-1" />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">Phase {id}</p>
            </div>
        </motion.div>
    );
};

const MarqueeRow = ({ items, direction = "left", speed = 0.5, type = "video", onActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    
    // Smooth speed control
    const velocityFactor = useSpring(1, { damping: 30, stiffness: 100 });

    useEffect(() => {
        velocityFactor.set((isHovered || isDragging) ? 0 : 1);
    }, [isHovered, isDragging]);

    useAnimationFrame((t, delta) => {
        if (!containerRef.current || isDragging) return;
        
        const moveBy = speed * velocityFactor.get() * (delta / 16);
        const currentX = x.get();
        let nextX = direction === "left" ? currentX - moveBy : currentX + moveBy;

        const contentWidth = containerRef.current.scrollWidth / 2;
        if (nextX <= -contentWidth) {
            nextX += contentWidth;
        } else if (nextX >= 0) {
            nextX -= contentWidth;
        }

        x.set(nextX);
    });

    return (
        <div 
            className="overflow-hidden relative select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div 
                ref={containerRef}
                className="flex gap-4 cursor-grab active:cursor-grabbing"
                style={{ x, width: "max-content" }}
                drag="x"
                dragConstraints={{ left: -10000, right: 10000 }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                    setIsDragging(false);
                    const contentWidth = containerRef.current.scrollWidth / 2;
                    let finalX = x.get();
                    while (finalX <= -contentWidth) finalX += contentWidth;
                    while (finalX >= 0) finalX -= contentWidth;
                    x.set(finalX);
                }}
            >
                {[...items, ...items].map((item, idx) => (
                    type === "video" ? (
                        <VideoItem 
                            key={`video-${idx}`}
                            src={item.src}
                            id={item.id}
                            isDragging={isDragging}
                            onActive={onActive}
                        />
                    ) : (
                        <motion.div 
                            key={`image-${idx}`}
                            whileHover={{ scale: 0.98 }}
                            className="relative flex-shrink-0 w-[200px] md:w-[300px] aspect-square rounded-2xl overflow-hidden group/img"
                        >
                            <Image 
                                src={item.src} 
                                alt={`Site Progress ${item.id}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    )
                ))}
            </motion.div>
        </div>
    );
};

const OnSite = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const videoAssets = Array.from({ length: 13 }, (_, i) => ({
        id: i + 1,
        src: `/assets/vid (${i + 1}).mp4`,
        thumbnail: `/assets/site (${(i % 12) + 1}).jpg`
    }));

    const imageAssets = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: `/assets/site (${i + 1}).jpg`
    }));

    return (
        <section className="w-full mt-12 py-20 bg-soft-white overflow-hidden relative">
            <div className="lg:w-4/5 mx-4 lg:mx-auto relative z-10">
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

                {/* Video Slider - Slides Left (Vertical 10:16) */}
                <div className="relative mb-8 rounded-3xl overflow-hidden group">
                    <MarqueeRow 
                        items={videoAssets} 
                        direction="left" 
                        speed={0.6} 
                        type="video" 
                        onActive={setActiveVideo} 
                    />
                </div>

                {/* Image Slider - Slides Right (Square) */}
                <div className="relative rounded-3xl overflow-hidden group">
                    <MarqueeRow 
                        items={imageAssets} 
                        direction="right" 
                        speed={0.5} 
                        type="image" 
                    />
                </div>
            </div>


            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    >
                        <button 
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                        >
                            <X size={48} strokeWidth={1} />
                        </button>
                        <div className="h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-[0_0_100px_rgba(212,175,55,0.1)]">
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


