import React from "react";
import Process from "../components/Process";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full px-4 md:w-4/5 mx-auto mt-30 space-y-12">
      {/* Heading and Subheading */}
      <motion.h1
        className="text-4xl md:text-6xl font-medium text-center leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What We <span className="text-gold">Offer</span>{" "}
        <span className="text-dark-brown">?</span>
        <p className="text-lg font-medium leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent mt-4">
          Reach out to us for any queries or to book a free consultation.
        </p>
      </motion.h1>

      {/* Process Section */}
      <div className="mt-30">
        <Process />
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 mt-30 md:grid-cols-2 gap-4 p-4 rounded-3xl">
        {/* Service 1 */}
        <div
          className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-soft-white p-4 rounded-3xl shadow-lg"
          style={{
            backgroundImage: "url('/assets/mesh-488.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/assets/project1.jpeg"
            alt="Kitchen Design"
            className="w-full md:w-80 h-60 rounded-lg object-cover"
          />
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-dark-brown">Kitchen Design</h3>
            <p className="text-sm text-medium-brown">
              Modern and functional kitchen designs tailored to your needs.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div
          className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-soft-white p-4 rounded-3xl shadow-lg"
          style={{
            backgroundImage: "url('/assets/mesh-66.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/assets/project2.jpeg"
            alt="Space Management"
            className="w-full md:w-80 h-60 rounded-lg object-cover"
          />
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-dark-brown">Space Management</h3>
            <p className="text-sm text-medium-brown">
              Optimize your space for maximum functionality and aesthetics.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div
          className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-soft-white p-4 rounded-3xl shadow-lg"
          style={{
            backgroundImage: "url('/assets/mesh-510.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/assets/project3.jpeg"
            alt="Bespoke Interior"
            className="w-full md:w-80 h-60 rounded-lg object-cover"
          />
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-dark-brown">Bespoke Interior</h3>
            <p className="text-sm text-medium-brown">
              Custom interiors designed to reflect your unique style.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div
          className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-soft-white p-4 rounded-3xl shadow-lg"
          style={{
            backgroundImage: "url('/assets/mesh-55.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="/assets/project4.jpeg"
            alt="Custom Solutions"
            className="w-full md:w-80 h-60 rounded-lg object-cover"
          />
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-dark-brown">Custom Solutions</h3>
            <p className="text-sm text-medium-brown">
              Tailored solutions for all your interior design needs.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-br from-gold to-medium-brown via-warm-beige text-soft-white px-4 py-20 rounded-2xl shadow-lg text-center space-y-6"
      
       style={{
         backgroundImage: "url('/assets/mesh-924.png')",
         backgroundSize: "cover",
         backgroundPosition: "center",
       }}>
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Transform Your Space?
        </h2>
        <p className="text-sm md:text-md">
          Let us bring your vision to life with our expert design services.
        </p>
        <button className="bg-soft-white text-dark-brown px-6 py-3 rounded-xl text-md font-semibold shadow-md hover:bg-dark-brown hover:text-soft-white transition-all">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Services;
