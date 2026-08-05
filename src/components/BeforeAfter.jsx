'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const options = [
  { before: '/assets/beforeafter/before1.jpg', after: '/assets/beforeafter/after1.jpg', title: 'Luxury Living' },
  { before: '/assets/beforeafter/before2.jpg', after: '/assets/beforeafter/after2.jpg', title: 'Modern Bedroom' },
  { before: '/assets/beforeafter/before3.jpg', after: '/assets/beforeafter/after3 (2).jpg', title: 'Studio Space' },
]

export default function BeforeAfter() {
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
    if (isDragging && e?.touches?.[0]) handleMove(e.touches[0].clientX)
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
    <section className="w-full lg:w-4/5 bg-warm-beige/10 p-2 lg:p-6 rounded-[2.5rem] mx-auto mt-32 overflow-hidden">
      <div className="w-full p-4 lg:py-8 mt-8 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-montserrat text-dark-brown font-medium mb-4"
          >
            Before & After  <span className="  text-medium-brown"> Transformations </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gold mt-4 mb-8 rounded-full"
          />
          <p className="text-lg text-dark-brown/70 font-medium leading-relaxed">
            Witness the seamless transition from conceptual blueprints to realized architectural excellence. Our before-and-after comparisons showcase the precision and artistry we bring to every square foot.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative h-[45vh] lg:h-[80vh] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl bg-white"
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
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Original Space</span>
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
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute bottom-6 right-6 z-10 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/40">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Transformed</span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize"
          style={{ left: handleLeft }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white/50 backdrop-blur-sm">
            <div className="flex gap-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#4A3F35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#4A3F35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-2 text-sm font-medium text-dark-brown/60 order-2 lg:order-1">
          <div className="w-2 h-2 bg-medium-brown rounded-full animate-pulse" />
          Drag or tap to interact
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 order-1">
          {options.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-montserrat transition-all duration-300 border-2 ${activeIndex === idx
                ? 'bg-dark-brown border-dark-brown text-white shadow-md'
                : 'bg-transparent border-dark-brown/10 text-dark-brown hover:border-dark-brown/30'
                }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
