import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = 120;
    const duration = 2500;
    const startTime = performance.now();

    const animateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animateCounter);
    };

    requestAnimationFrame(animateCounter);
  }, []);

  return (
    <div className="w-full lg:p-0 p-4 lg:w-4/5 mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

        {/* Left Section */}
        <div
          className="lg:col-span-4 p-8 rounded-xl shadow-md text-soft-white relative flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/assets/mesh-994.png')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          <p className="absolute top-5 left-6 text-sm text-medium-brown">
            Building dreams, one home at a time.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl sm:text-6xl py-30 pr-2 font-normal bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent text-center mb-3"
          >
            About Us
          </motion.h2>

          <div className="absolute bottom-5 left-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-3xl lg:text-4xl font-medium text-warm-beige"
            >
              {count}+
            </motion.p>
            <p className="text-md sm:text-lg text-light-gray">
              Projects Completed
            </p>
          </div>

          <div className="absolute bottom-5 right-6 flex space-x-4">
            <a href="https://www.instagram.com/make_my_ghar.co.in/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-golden text-2xl hover:text-soft-white transition" />
            </a>
            <a href="https://www.facebook.com/company/100958944" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-golden text-2xl hover:text-soft-white transition" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="lg:col-span-6 p-6 lg:p-8 rounded-xl shadow-md text-dark-brown"
          style={{
            backgroundImage: "url('/assets/mesh-488.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-medium text-dark-brown"
          >
            Who Are  <span className=" text-medium-brown">We?</span>
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-brown to-warm-beige rounded-lg text-soft-white text-center py-1.5 px-4 mt-4 w-max"
          >
            <p className="text-md sm:text-md font-medium">
            Inspiring homes since 2014
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-5 font-medium sm:text-md text-dark-brown"
          >
            At Make My Ghar, our team of expert interior designers and architects in Pune specialize in crafting stylish, functional, and sustainable home interiors. Whether it’s a modern 2BHK apartment in Pune or a luxury villa in nearby suburbs, we offer smart space planning, premium material selection, and hassle-free execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-2 font-medium sm:text-md text-dark-brown"
          >
            With 120+ completed projects, we bring expertise in customized designs, smart layouts, and high-quality finishes to create spaces that are elegant, efficient, and built to last.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
