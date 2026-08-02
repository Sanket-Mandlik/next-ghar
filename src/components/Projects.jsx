import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const topImages = [
  { src: "/assets/ekta-cover.jpg", alt: "Modern Residential Interior Pune" },
  { src: "/assets/harshal-cover.jpg", alt: "Premium Living Room Pune" },
  { src: "/assets/prashant (1).png", alt: "Luxury Apartment Interior Pune" },
  { src: "/assets/prashant (2).png", alt: "Contemporary Interior Design Pune" },
  { src: "/assets/prashant (3).png", alt: "Modern Living Space Pune" },
  { src: "/assets/after4.webp", alt: "Modern seating area in Pune" },
  { src: "/assets/project1.webp", alt: "Confort Seating Facility" },
  { src: "/assets/project2.webp", alt: "Modular Kitchen" },
  { src: "/assets/project3.webp", alt: "Comfy living space" },
  { src: "/assets/project12.webp", alt: "Modern Kids Bedroom in Pune" },
  { src: "/assets/project14.webp", alt: "Commercial Spaces in Pune" },
  { src: "/assets/project19.webp", alt: "Cozy Kids Bedroom" },
  { src: "/assets/projectGa5.webp", alt: "Work From Home in Pune" }
];

const bottomImages = [
  { src: "/assets/plan (1).webp", alt: "2D House floor plan with spacious living area" },
  { src: "/assets/plan (2).webp", alt: "Architectural blueprint of a two-story home" },
  { src: "/assets/plan (6).webp", alt: "Modern villa layout with landscape design" },
  { src: "/assets/plan (7).webp", alt: "2D Compact floor plan with functional zones" },
  { src: "/assets/plan (8).webp", alt: "Detailed architectural drawing with furniture layout" }
];

const containerVariants = {
  hidden: { opacity: 0.98, y: 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Custom hook for smooth infinite scrolling
const useInfiniteScroll = (ref, speed) => {
  const currentX = useRef(0);
  const animationFrame = useRef(null);
  const isPaused = useRef(false);

  const startLoop = () => {
    if (!ref.current) return;

    const step = () => {
      if (!ref.current) return;
      if (!isPaused.current) {
        currentX.current -= speed;
        const totalWidth = ref.current.scrollWidth / 3;

        if (Math.abs(currentX.current) >= totalWidth) {
          currentX.current = 0;
        }

        ref.current.style.transition = "none";
        ref.current.style.transform = `translateX(${currentX.current}px)`;
      }

      animationFrame.current = requestAnimationFrame(step);
    };

    animationFrame.current = requestAnimationFrame(step);
  };

  const stopLoop = () => {
    cancelAnimationFrame(animationFrame.current);
  };

  const scrollManually = (direction) => {
    if (!ref.current) return;

    const firstImage = ref.current.querySelector("img");
    const imgWidth = firstImage ? firstImage.clientWidth : 300;
    const gap = 16;
    const shiftAmount = imgWidth + gap;

    isPaused.current = true;
    currentX.current += direction * shiftAmount;
    ref.current.style.transition = "transform 0.6s ease-in-out";
    ref.current.style.transform = `translateX(${currentX.current}px)`;

    setTimeout(() => {
      isPaused.current = false;
    }, 800);
  };

  useEffect(() => {
    startLoop();
    return () => stopLoop();
  }, []);

  return scrollManually;
};

const Projects = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollTop = useInfiniteScroll(topRef, 0.4);
  const scrollBottom = useInfiniteScroll(bottomRef, 0.3);

  const tripledTop = [...topImages, ...topImages, ...topImages];
  const tripledBottom = [...bottomImages, ...bottomImages, ...bottomImages];

  return (
    <motion.div
      className="flex flex-col lg:w-4/5 mx-4 lg:mx-auto gap-4 mt-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-5xl font-montserrat text-medium-brown font-medium"
        variants={textVariants}
      >
        <span className="text-dark-brown">Our Project</span> Gallery
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gold mt-4 mb-8 rounded-full"
      />

      {/* Top Carousel */}
      <div className="relative w-full rounded-2xl  overflow-hidden">
        <button
          onClick={() => scrollTop(1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white text-dark-brown p-2.5 rounded-full shadow"
          aria-label="Scroll left"
          title="Scroll left"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <button
          onClick={() => scrollTop(-1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white text-dark-brown p-2.5 rounded-full shadow"
          aria-label="Scroll right"
          title="Scroll right"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        <div ref={topRef} className="flex gap-3 flex-nowrap will-change-transform">
          {tripledTop.map((img, i) => (
            <div key={i} className="flex-shrink-0 lg:h-[45vh] h-[60vh]">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="lg:h-[45vh] h-[60vh] w-auto rounded-3xl object-cover"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Carousel + CTA */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-4">
        {/* Bottom Carousel */}
        <div className="relative rounded-2xl lg:w-3/4 overflow-hidden">
          <button
            onClick={() => scrollBottom(1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white text-semibold text-dark-brown p-2.5 rounded-full shadow"
            aria-label="Scroll left"
            title="Scroll left"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <button
            onClick={() => scrollBottom(-1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white text-dark-brown p-2.5 rounded-full shadow"
            aria-label="Scroll right"
            title="Scroll right"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          <div ref={bottomRef} className="flex gap-4 flex-nowrap will-change-transform">
            {tripledBottom.map((img, i) => (
              <div key={i} className="flex-shrink-0 h-[40vh]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={400}
                  className="h-[40vh] w-auto rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="lg:w-1/4 h-[40vh] p-6 bg-warm-white text-dark-brown border-3 border-dashed border-gold/30 rounded-3xl space-y-2 flex flex-col justify-center"
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-semibold" variants={textVariants}>
            Start Your Project
          </motion.h2>
          <motion.p className="text-lg lg:text-sm mt-2" variants={textVariants}>
            Let's start decorating your home with Make My Ghar.
          </motion.p>
          <Link href="/contactus">
            <motion.button
              className="mt-4 px-6 py-3 text-md bg-gradient-to-br from-gold to-dark-brown text-soft-white font-medium  rounded-2xl shadow-warm-beige/50 hover:bg-medium-brown hover:scale-105 hover:text-warm-beige shadow-xl transition-all min-h-[48px] flex items-center justify-center"
              variants={textVariants}
            >
              Get Started Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
