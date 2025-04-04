import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  // Counter animation for projects completed
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 500;
    const duration = 2500; // 2.5 seconds
    const startTime = performance.now();

    const animateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress * (2 - progress); // Ease-out effect
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  }, []);

  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        
        {/* Left Section - Dark Background */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:col-span-4 p-8 rounded-xl shadow-md text-soft-white relative flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/assets/mesh-954.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Small Text at Top Left */}
          <p className="absolute top-4 left-4 text-sm text-light-gray">
            Building dreams, one home at a time.
          </p>

          {/* "About Us" Text in Center */}
          <h2 className="text-5xl sm:text-6xl py-20 font-normal text-golden text-center mb-3">
            About Us
          </h2>

          {/* Animated Counter */}
          <div className="absolute bottom-3 left-4 text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-golden">
              {count}+
            </p>
            <p className="text-md sm:text-lg text-light-gray">
              Projects Completed
            </p>
          </div>

          {/* Social Media Links */}
          <div className="absolute bottom-4 right-4 flex space-x-4">
            <a href="https://www.instagram.com/mgdesign127" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-golden text-2xl hover:text-soft-white transition" />
            </a>
            <a href="https://www.linkedin.com/company/100958944" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-golden text-2xl hover:text-soft-white transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Section - Light Background */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-6 px-8 py-12 rounded-xl shadow-md text-dark-brown"
          style={{
            backgroundImage: "url('/assets/mesh-488.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-medium text-dark-brown">
            Who Are We?
          </h2>

          {/* Dark Brown Box for Establishment Year */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-medium-brown to-dark-brown rounded-full text-soft-white text-center py-1.5 px-4 mt-4 w-max"
          >
            <p className="text-sm sm:text-md font-normal">
              Established in 2014
            </p>
          </motion.div>

          {/* Info Text */}
          <p className="mt-6 text-sm sm:text-md text-dark-brown">
            At Make My Ghar, we design interiors that are both stylish and functional, tailored to match our clients’ needs.  
            From modern apartments to luxury villas, we handle space planning, furniture selection, and material sourcing, ensuring seamless execution.
          </p>

          <p className="mt-2 text-sm sm:text-md text-dark-brown">
            With 500+ completed projects, we bring expertise in customized designs, smart layouts, and high-quality finishes to create spaces that are elegant, efficient, and built to last.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
