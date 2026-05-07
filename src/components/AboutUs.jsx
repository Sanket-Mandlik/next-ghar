import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = 120;
    const duration = 1500;
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
          className="lg:col-span-4 p-8 rounded-3xl text-soft-white relative flex flex-col justify-center items-center h-full min-h-[380px]"
          style={{
            backgroundImage: "url('/assets/mesh-994.webp')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
          aria-label="Background image of a modern design pattern"
        >
          <p className="absolute top-5 left-6 text-sm text-medium-brown">
            Building dreams, one home at a time.
          </p>
          <div className="flex flex-col items-center justify-center flex-grow">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-6xl font-normal bg-gradient-to-br from-soft-white to-gold bg-clip-text text-transparent text-center mb-3"
            >
              About Us
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gold rounded-full"
            />
          </div>

          <div className="absolute bottom-5 left-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl lg:text-4xl font-medium text-warm-beige"
            >
              {count}+
            </motion.p>
            <p className="text-md sm:text-lg text-light-gray">
              Projects Completed
            </p>
          </div>

          <div className="absolute bottom-5 right-6 flex space-x-4">
            <a
              href="https://www.instagram.com/makemyghar.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Make My Ghar on Instagram"
              title="Instagram"
            >
              <FaInstagram
                className="text-golden text-2xl hover:text-soft-white transition"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.facebook.com/makemyghar127"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Make My Ghar on Facebook"
              title="Facebook"
            >
              <FaFacebook
                className="text-golden text-2xl hover:text-soft-white transition"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="lg:col-span-6 p-6 lg:p-8 rounded-3xl text-dark-brown bg-warm-beige/10 border border-warm-beige/20 flex flex-col justify-center h-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-medium text-dark-brown"
          >
            Who Are <span className="text-medium-brown">We?</span>
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-dark-brown rounded-full text-white  text-center py-1.5 px-4 mt-4 w-max"
          >
            <p className="text-md sm:text-sm font-medium">
              Inspiring homes since 2014
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12  font-medium sm:text-md text-dark-brown"
          >
            At Make My Ghar, our team of expert interior designers and architects in Pune specialize in crafting stylish, functional, and sustainable home interiors. Whether it’s a modern 2BHK apartment in Pune or a luxury villa in nearby suburbs, we offer smart space planning, premium material selection, and hassle-free execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 font-medium sm:text-md text-dark-brown"
          >
            With 120+ completed projects, we bring expertise in customized designs, smart layouts, and high-quality finishes to create spaces that are elegant, efficient, and built to last.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;