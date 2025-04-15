import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import WhyUs1 from "../components/WhyUs1";
import WhyUs2 from "../components/WhyUs2";
import PlanSlider from "../components/PlanSlider";

// Dynamically import ChooseUs with SSR disabled
const ChooseUs = dynamic(() => import("../components/ChooseUs"), {
  ssr: false,
});

const WhyUs = () => {
  return (
    <div className="bg-soft-white px-4 lg:px-0 mt-30 mx-auto min-h-screen">
      {/* Title Section */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative text-center py-30 px-4 rounded-3xl overflow-hidden"
  style={{
    backgroundImage: "url('/assets/plan (8).jpg')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-soft-white/70 via-soft-white/90 to-soft-white/70 "></div>
  <div className="relative z-10">
    <h1 className="text-5xl lg:text-6xl font-medium leading-tight text-dark-brown ">
      What Makes Us <span className="text-gold">Stand Out </span>
      <span className="text-dark-brown">!</span>
    </h1>
    <p className="text-lg font-medium leading-relaxed mb-10 bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent mt-4">
      Reach out to Make My Ghar for any queries or to book a free consultation.
    </p>
  </div>
</motion.div>

      {/* Imported Components */}
      <WhyUs1 />
      <WhyUs2 />
      <div className="lg:w-4/5 mt-20 mx-auto -mb-10" ><PlanSlider /></div>
      
      <ChooseUs />
    </div>
  );
};

export default WhyUs;
