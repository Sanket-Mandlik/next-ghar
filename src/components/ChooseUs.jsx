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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const spinAnimation = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 20,
    },
  },
};

const ChooseUs = () => {
  return (
    <motion.div
      className="lg:w-4/5 lg:mx-auto mx-3 mt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-montserrat text-medium-brown font-medium mb-6"
        variants={textVariants}
      >
        <span className="text-dark-brown">Why Choose</span> Make My Ghar?
      </motion.h2>

      {/* Content Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-10 md:gap-4"
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="col-span-1 lg:col-span-7 mb-4 lg:mb-0 flex flex-col gap-4 w-full"
          variants={containerVariants}
        >
          {/* Top Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
            variants={containerVariants}
          >
           {/* Unmatched Expertise */}
<motion.div
  className="p-6 rounded-xl shadow-md flex flex-col items-center text-center gap-3 pt-10 relative overflow-hidden md:h-[39vh]"
  style={{
    backgroundImage: "url('/assets/mesh-476.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  variants={containerVariants}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/10 via-warm-beige/30 to-medium-brown/90 z-10" />

  {/* Foreground Content */}
  <div className="relative z-20">
    <motion.h3
      className="text-2xl font-semibold 2xl:pt-12 pb-10 text-dark-brown"
      variants={textVariants}
    >
      Unmatched Expertise
    </motion.h3>
    <motion.p className="text-medium-brown mb-20" variants={textVariants}>
      Our team of skilled designers brings years of experience to craft
      interiors that blend elegance with functionality.
    </motion.p>
  </div>
</motion.div>

            {/* Premium Quality */}
            <motion.div
              className="bg-[url('/assets/mesh-488.png')] bg-cover bg-center p-6 rounded-xl shadow-md flex flex-col items-center text-center justify-end gap-3 pb-10 relative overflow-hidden md:h-[39vh]"
              variants={containerVariants}
            >
              <motion.h3
                className="mt-20 2xl:mt-10 text-2xl font-semibold text-dark-brown"
                variants={textVariants}
              >
                Premium Quality
              </motion.h3>
              <motion.p
                className="text-medium-brown pt-8 2xl:pb-12"
                variants={textVariants}
              >
                We use top-tier materials and meticulous craftsmanship to create
                stunning interiors tailored to your needs.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md md:h-[41vh] flex flex-col justify-end text-center text-soft-white gap-3 overflow-hidden relative"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url('/assets/project1.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
            }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-4xl mt-30 font-medium"
              variants={textVariants}
            >
              Tailored to You
            </motion.h3>
            <motion.p
              className="text-light-gray pb-4 2xl:pb-12 mx-auto w-4/5"
              variants={textVariants}
            >
              Every home is unique, and so is our approach. We design spaces
              that reflect your style, needs, and personality.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="col-span-3 relative lg:h-[82vh] bg-dark-brown/50 overflow-hidden rounded-xl shadow-md"
          variants={containerVariants}
        >
          <motion.img
            src="/assets/mesh-969.png"
            alt="Elegant Home Interior"
            className="w-full h-full object-cover"
            variants={containerVariants}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-12 2xl:pb-20 gap-3"
            variants={containerVariants}
          >
            <motion.h3
              className="text-4xl text-warm-beige font-medium"
              variants={textVariants}
            >
              Elevating Lives, Transforming Spaces
            </motion.h3>
            <motion.p
              className="text-md text-soft-white mt-2 font-normal"
              variants={textVariants}
            >
              From apartments to luxury villas, we turn your vision into reality
              with innovative and timeless designs.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUs;