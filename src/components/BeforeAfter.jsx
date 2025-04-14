'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [step, setStep] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setStep((prev) => {
        if (!hasStarted) {
          setHasStarted(true)
          return 1 // first reveal is after1
        }
        return prev === 1 ? 2 : 1 // toggle between after1 and after2
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [isInView, hasStarted])

  return (
    <section className="w-[95vw] lg:w-4/5 bg-warm-beige/30 lg:px-8 px-4  pb-6 pt-8 rounded-2xl mx-auto mt-20">
      <motion.h2 className="text-5xl font-montserrat px-2 lg:px-0  text-medium-brown font-medium mb-6">
        <span className="text-dark-brown text-5xl">Before-After </span>Options
      </motion.h2>

      <p className="text-md text-dark-brown px-2 lg:px-0  font-medium pb-6">
        We give multiple thoughtfully curated design options to choose from while crafting your dream home interiors, ensuring every corner not only reflects your unique taste and lifestyle but also brings harmony, functionality, and timeless elegance to your living space.
      </p>

      <main
        ref={ref}
        className="relative h-[32vh] lg:h-[85vh] rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Background before image (only initially visible) */}
        <Image
          src="/assets/render1.jpg"
          alt="Before"
          fill
          className="object-cover z-0"
          priority
        />

        {/* After 1 layer */}
        <motion.div
          initial={false}
          animate={{
            clipPath: step >= 1 ? 'inset(0% 0% 0% 0%)' : 'inset(50% 50% 50% 50%)',
            opacity: step >= 1 ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <Image
            src="/assets/after1.png"
            alt="After 1"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* After 2 layer */}
        <motion.div
          initial={false}
          animate={{
            clipPath: step === 2 ? 'inset(0% 0% 0% 0%)' : 'inset(50% 50% 50% 50%)',
            opacity: step === 2 ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <Image
            src="/assets/after2.png"
            alt="After 2"
            fill
            className="object-cover"
          />
        </motion.div>
      </main>
    </section>
  )
}
