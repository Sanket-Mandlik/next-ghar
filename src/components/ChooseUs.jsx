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

const ChooseUs = () => {
  return (
    <motion.div
      className="lg:w-4/5 lg:mx-auto mt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-montserrat text-medium-brown font-medium mb-6"
        variants={textVariants}
      >
        <span className="text-dark-brown text-5xl">Why Choose</span> Make My Ghar?
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
            {/* Card 1 - Unmatched Expertise */}
            <motion.div
              className="relative h-[82vh] md:h-[39vh] rounded-xl shadow-md overflow-hidden"
              style={{
                backgroundImage: "url('/assets/mesh-476.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={containerVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/10 via-warm-beige/30 to-medium-brown/90 z-10" />
              <div className="absolute bottom-0 left-0 p-6 z-20 text-left">
                <motion.h3
                  className="text-4xl md:text-2xl font-medium text-dark-brown"
                  variants={textVariants}
                >
                  Unmatched Expertise
                </motion.h3>
                <motion.p
                  className="text-md text-medium-brown mt-2"
                  variants={textVariants}
                >
                   Best interiors in Pune blend style and practicality to create elegant, functional spaces tailored to your lifestyle.
                </motion.p>
              </div>
            </motion.div>

            {/* Card 2 - Premium Quality */}
            <motion.div
              className="relative h-[82vh] md:h-[39vh] rounded-xl shadow-md overflow-hidden"
              style={{
                backgroundImage: "url('/assets/mesh-488.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={containerVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/10 via-warm-beige/30 to-medium-brown/90 z-10" />
              <div className="absolute bottom-0 left-0 p-6 z-20 text-left">
                <motion.h3
                  className="text-4xl md:text-2xl font-medium text-dark-brown"
                  variants={textVariants}
                >
                  Premium Quality
                </motion.h3>
                <motion.p
                  className="text-md text-medium-brown mt-2"
                  variants={textVariants}
                >
                  We use premium quality materials and expert craftsmanship to create beautiful, customised home interiors that perfectly match your lifestyle and needs in Pune.                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3 - Tailored to Your Vision */}
          <motion.div
            className="relative h-[82vh] md:h-[41vh] rounded-xl shadow-md overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url('/assets/project1.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom left",
            }}
            variants={containerVariants}
          >
            <div className="absolute bottom-0 left-0 p-6 z-20 text-left">
              <motion.h3
                className="text-4xl font-medium text-soft-white"
                variants={textVariants}
              >
                Tailored to Your Vision
              </motion.h3>
              <motion.p
                className="text-md text-light-gray mt-2 md:pr-40"
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
          className="col-span-3 relative h-[82vh] bg-dark-brown/50 overflow-hidden rounded-xl shadow-md"
          variants={containerVariants}
        >
          <motion.img
            src="/assets/mesh-969.png"
            alt="Elegant Home Interior"
            className="w-full h-full object-cover"
            variants={containerVariants}
          />
          <motion.div
            className="absolute bottom-0 left-0 p-6 z-20 text-left"
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
              From apartments of Hinjewadi to luxury villas of Shivaji Nagar, we specialize in creating luxury home interiors that turn your vision into reality with innovative and timeless designs.

            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUs;