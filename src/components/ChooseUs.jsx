import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0.98, y: 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ChooseUs = () => {
  return (
    <motion.div
      className="lg:w-4/5 lg:mx-auto mt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-montserrat text-medium-brown font-medium"
        variants={textVariants}
      >
        <span className="text-dark-brown text-5xl">Why Choose</span> Us?
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gold  mt-4 mb-8 rounded-full"
      />

      {/* Content Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-10 lg:gap-4"
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="col-span-1 lg:col-span-7 mb-4 lg:mb-0 flex flex-col gap-4 w-full"
          variants={containerVariants}
        >
          {/* Top Row */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full"
            variants={containerVariants}
          >
            {/* Card 1 - Unmatched Expertise */}
            <motion.div
              className="relative h-[50vh] lg:h-[40vh] rounded-4xl overflow-hidden bg-gradient-to-b from-gold to-dark-brown group"
              variants={containerVariants}
            >
              {/* Text at bottom left */}
              <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                <motion.h3
                  className="text-2xl font-medium text-soft-white"
                  variants={textVariants}
                >
                  Unmatched Expertise
                </motion.h3>
                <motion.p
                  className="text-sm text-soft-white/80 mt-2 "
                  variants={textVariants}
                >
                  Elegant, functional spaces in Pune tailored to your unique style and lifestyle.
                </motion.p>
              </div>

              {/* Architectural Animation at top right */}
              <div className="absolute -top-24 -right-24 w-80 h-80 pointer-events-none opacity-30">
                <motion.div
                  className="w-full h-full relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 border-[1px] border-soft-white/20 rounded-full" />
                  <motion.div
                    className="absolute inset-6 border-[1px] border-dashed border-soft-white/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-12 border-[0.5px] border-soft-white/10 rounded-full" />
                  <motion.div
                    className="absolute inset-20 border-[1px] border-soft-white/20 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Axis Lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-soft-white/20" />
                  <div className="absolute left-1/2 top-0 w-[0.5px] h-full bg-soft-white/20" />

                  {/* Center Dot */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-soft-white/40 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2 - Premium Quality */}
            <motion.div
              className="relative h-[50vh] lg:h-[40vh] rounded-4xl overflow-hidden bg-warm-beige/10 border border-warm-beige/20 group"
              variants={containerVariants}
            >
              {/* Premium Quality - Continuous Symmetric Architectural Arches */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.35] group-hover:opacity-55 transition-opacity duration-700">
                <motion.div
                  className="absolute inset-0 w-[200%] h-full flex items-end"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  {/* First Set of Arches */}
                  <div className="w-full h-full flex justify-around items-end">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="relative w-40 h-[60%] flex flex-col items-center">
                        <div className="absolute bottom-0 w-full h-full border-t-2 border-x-2 border-dark-brown/50 rounded-t-full" />
                        <div className="absolute bottom-0 w-[70%] h-[85%] border-t border-x border-dark-brown/40 rounded-t-full" />
                        <div className="absolute bottom-0 w-[40%] h-[70%] border-t border-x border-dark-brown/30 rounded-t-full" />
                      </div>
                    ))}
                  </div>
                  {/* Duplicated Set for Seamless Loop */}
                  <div className="w-full h-full flex justify-around items-end">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="relative w-40 h-[60%] flex flex-col items-center">
                        <div className="absolute bottom-0 w-full h-full border-t-2 border-x-2 border-dark-brown/50 rounded-t-full" />
                        <div className="absolute bottom-0 w-[70%] h-[85%] border-t border-x border-dark-brown/40 rounded-t-full" />
                        <div className="absolute bottom-0 w-[40%] h-[70%] border-t border-x border-dark-brown/30 rounded-t-full" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 z-20 text-left">
                <motion.h3
                  className="text-2xl font-medium text-dark-brown"
                  variants={textVariants}
                >
                  Premium Quality
                </motion.h3>
                <motion.p
                  className="text-sm text-dark-brown/80 mt-2"
                  variants={textVariants}
                >
                  Premium materials and expert craftsmanship for beautiful, customized interiors in Pune.                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3 - Tailored to Your Vision */}
          <motion.div
            className="relative h-[50vh] lg:h-[44vh] rounded-4xl  overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url('/assets/Supreme Estia/project1.webp')",
              backgroundSize: "cover",
              alt: "Best Home Interior in Pune",
              backgroundPosition: "bottom left",
            }}
            variants={containerVariants}
          >
            <div className="absolute bottom-0 left-0 p-6 z-20 text-left">
              <motion.h3
                className="text-2xl font-medium text-soft-white"
                variants={textVariants}
              >
                Tailored to Your Vision
              </motion.h3>
              <motion.p
                className="text-sm text-light-gray mt-2 lg:pr-40"
                variants={textVariants}
              >
                Every home is unique, and so is our approach. We design spaces
                that reflect your style, needs, and personality.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Card 4 - Right Side Full Height */}
        <motion.div
          className="col-span-3 relative h-[50vh] lg:h-[85vh] bg-dark-brown overflow-hidden rounded-4xl group"
          variants={containerVariants}
        >
          {/* Frameless Shutter/Blinds Animation */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[85%] h-52 overflow-hidden pointer-events-none transition-colors duration-700">
            {/* Horizontal Blinds Slats */}
            <div className="absolute inset-0 flex flex-col opacity-[0.25] group-hover:opacity-45 transition-opacity duration-700">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-full flex-grow relative">
                  <motion.div
                    className="absolute inset-0 bg-warm-beige/40 border-b border-dark-brown/20"
                    animate={{
                      scaleY: [1, 0.05, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    style={{ originY: 0 }}
                  />
                </div>
              ))}
            </div>

            {/* Blind Pull Strings */}
            <div className="absolute inset-y-0 left-[15%] w-[0.5px] bg-soft-white/40" />
            <div className="absolute inset-y-0 right-[15%] w-[0.5px] bg-soft-white/40" />

            {/* Center String */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.5px] h-full bg-soft-white/20" />
          </div>

          <motion.div
            className="absolute bottom-0 left-0 p-6 z-20 text-left"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl text-warm-beige font-medium"
              variants={textVariants}
            >
              Elevating Lives, Transforming Spaces
            </motion.h3>
            <motion.p
              className="text-sm text-soft-white mt-2 font-normal"
              variants={textVariants}
            >
              From apartments of Hinjewadi to luxury villas of Shivaji Nagar, we specialize in creating luxury home interiors.

            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUs;