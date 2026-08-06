import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const options = [
  { before: '/assets/beforeafter/before1.jpg', after: '/assets/beforeafter/after1.jpg', title: 'Luxury Living' },
  { before: '/assets/beforeafter/before2.jpg', after: '/assets/beforeafter/after2.jpg', title: 'Modern Bedroom' },
  { before: '/assets/beforeafter/before3.jpg', after: '/assets/beforeafter/after3 (2).jpg', title: 'Studio Space' },
]

const WhyUs2 = () => {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [sliderPos, setSliderPos] = useState(50)
  const [autoDirection, setAutoDirection] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)

  // Use motion values for smoother performance
  const motionPos = useMotionValue(50)
  const springPos = useSpring(motionPos, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const clipPath = useTransform(springPos, (val) => `inset(0 ${100 - val}% 0 0)`)
  const handleLeft = useTransform(springPos, (val) => `${val}%`)

  // Handle manual sliding
  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
    motionPos.set(percent)
  }, [motionPos])

  const onMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX)
  }

  const onTouchMove = (e) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX)
  }

  // Automatic slow movement
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setSliderPos((prev) => {
        let next = prev + 0.2 * autoDirection
        if (next >= 100) {
          setAutoDirection(-1)
          next = 100
        } else if (next <= 0) {
          setAutoDirection(1)
          next = 0
        }
        motionPos.set(next)
        return next
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isDragging, autoDirection, motionPos])

  return (
    <div className="lg:w-4/5 mx-auto bg-soft-white flex flex-col items-start mt-30 ">
      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-5xl lg:text-5xl font-medium text-dark-brown mb-8">
          Before After <span className="text-medium-brown">Comparison</span>
        </h2>
      </motion.div>

      {/* Comparison and CTA Section */}
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-4">
        {/* Comparison Section */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          <div
            ref={containerRef}
            className="relative h-[45vh] lg:h-[65vh] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl bg-white"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={onMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={onTouchMove}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Before Image (Bottom Layer) */}
                <div className="absolute inset-0">
                  <Image
                    src={options[activeIndex].before}
                    alt={`${options[activeIndex].title} - Before`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Original Space</span>
                  </div>
                </div>

                {/* After Image (Top Layer with Clip) */}
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{ clipPath }}
                >
                  <Image
                    src={options[activeIndex].after}
                    alt={`${options[activeIndex].title} - After`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute bottom-6 right-6 z-10 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/40">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Transformed</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Handle */}
            <motion.div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize"
              style={{ left: handleLeft }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white/50 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#4A3F35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#4A3F35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots/Buttons */}
          <div className="flex justify-center gap-4">
            {options.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-montserrat transition-all duration-300 border-2 ${activeIndex === idx
                    ? 'bg-dark-brown border-dark-brown text-white shadow-md'
                    : 'bg-transparent border-dark-brown/10 text-dark-brown hover:border-dark-brown/30'
                  }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/3 shadow-lg shadow-medium-brown/50 from-warm-beige to-medium-brown via-warm-beige text-soft-white px-6 py-16 rounded-3xl flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/assets/mesh-969.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-4xl font-medium mb-5 text-center bg-gradient-to-br from-soft-white to-warm-beige bg-clip-text text-transparent">
            Your Vision, Our Expertise
          </h3>

          <p className="text-sm lg:text-md text-center mb-8  bg-gradient-to-br from-warm-beige to-soft-white bg-clip-text text-transparent">
            From 2BHKs to villas across Pune, Make My Ghar helps you choose the right layout, finishes, and style—just the way you want it.
          </p>

          <Link href="/contactus" passHref>
            <button className="bg-gradient-to-b from-warm-beige to-soft-white text-dark-brown px-10 py-4 rounded-xl text-md font-semibold hover:bg-dark-brown hover:text-gold shadow-xl hover:scale-105 transition-all min-h-[48px] flex items-center justify-center">
              Get Started Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs2;
