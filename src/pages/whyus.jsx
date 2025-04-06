import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import WhyUs1 from "../components/WhyUs1";
import WhyUs2 from "../components/WhyUs2";

// Dynamically import ChooseUs with SSR disabled
const ChooseUs = dynamic(() => import("../components/ChooseUs"), {
  ssr: false,
});

const WhyUs = () => {
  return (
    <div className="bg-soft-white px-4 md:px-0 mt-30 mx-auto min-h-screen">
      {/* Title Section */}
      <motion.h1
        className="text-4xl md:text-6xl font-medium text-center leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What Makes Us <span className="text-gold">Stand Out</span>{" "}
        <span className="text-dark-brown">?</span>

        <p className="text-lg font-medium leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent mt-4">
          Reach out to us for any queries or to book a free consultation.
        </p>
      </motion.h1>

      {/* Imported Components */}
      <WhyUs1 />
      <WhyUs2 />
      <ChooseUs />
    </div>
  );
};

export default WhyUs;
