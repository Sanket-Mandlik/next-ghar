import React from "react";
import Process from "../components/Process";
import { motion } from "framer-motion";

import ServicesPage from "../components/ServicesPage";
import SliderText from "../components/SliderText";


const Services = () => {
  return (
    <div className="w-full px-3 md:px-0  md:w-4/5 mx-auto mt-30 space-y-12">
      {/* Heading and Subheading */}
      {/* Heading and Subheading */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center"
>
  <h1 className="text-5xl md:text-6xl font-medium leading-tight">
    What We <span className="text-gold">Offer</span>{" "}
    <span className="text-dark-brown">?</span>
  </h1>
  <p className="text-lg font-medium leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent mt-4">
    Reach out to us for any queries or to book a free consultation.
  </p>
</motion.div>


      {/* Process Section */}
      <div className="mt-30">
        <Process />
      </div>

      {/* Services Section */}
  


        <motion.h2
  className="text-5xl mt-30  font-montserrat text-medium-brown font-medium mb-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.span
    className="text-dark-brown"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
  >
    Services
  </motion.span>{" "}
  We Offer
</motion.h2>


<div className="bg-soft-white ">
    <ServicesPage />
</div>
       

<SliderText />
    
      {/* Call-to-Action Section */} 
<div className="bg-gradient-to-br mt-20  from-gold to-medium-brown via-warm-beige text-soft-white py-30 rounded-2xl shadow-xl shadow-warm-beige/50 text-center space-y-6"
      
       style={{
         backgroundImage: "url('/assets/mesh-994.png')",
         backgroundSize: "cover",
         backgroundPosition: "center",
       }}>
       <h2 className="text-4xl md:text-5xl font-medium bg-gradient-to-br from-soft-white to-warm-beige bg-clip-text text-transparent">
  Ready to Transform Your Space?
</h2>
<p className="text-sm md:text-md bg-gradient-to-br from-warm-beige to-soft-white bg-clip-text text-transparent">
  Let us bring your vision to life with our expert design services.
</p>

        <button className="bg-gradient-to-br from-warm-beige  to-soft-white text-dark-brown px-6 py-3 rounded-xl text-md font-semibold shadow-md hover:bg-dark-brown hover:text-soft-white transition-all">
          Get Started Now
        </button>
      </div>


    
      </div>

  );
};

export default Services;
