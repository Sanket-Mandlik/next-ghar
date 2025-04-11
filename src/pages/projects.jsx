import React from "react";
import Process from "../components/Process";
import { motion } from "framer-motion";
import Link from 'next/link';
import ServicesPage from "../components/ServicesPage";
import SliderText from "../components/SliderText";
import Testimonials from "../components/Testimonials";
import ServiceHero from "../components/ServiceHero";
import ProjectHero from "../components/ProjectHero";


const Projects = () => {
  return (
    <div className="w-full px-4 lg:px-0  lg:w-4/5 mx-auto mt-30 space-y-12">
      {/* Heading and Subheading */}
      {/* Heading and Subheading */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center"
>
  <h1 className="text-5xl lg:text-6xl font-medium leading-tight">
  What We’ve <span className="text-gold">Built </span>{" "}
    <span className="text-dark-brown">!</span>
  </h1>
  <p className="text-lg font-medium leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent mt-4">
    Reach out to Make My Ghar for any queries or to book a free consultation.
  </p>
</motion.div>


      {/* Process Section */}
      <div className="mt-10">
        <ProjectHero />
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
       
<div className="bg-soft-white ">
    <Testimonials />
</div>


<div className="mt-30">
        <Process />
      </div>

<SliderText />
    
      {/* Call-to-Action Section */} 
      <div
  className="bg-gradient-to-br mt-20 from-gold to-medium-brown via-warm-beige text-soft-white pt-24 pb-24 px-8  sm:py-30 rounded-2xl shadow-xl shadow-warm-beige/50 text-left sm:text-center space-y-6"
  style={{
    backgroundImage: "url('/assets/mesh-994.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h2 className="text-4xl lg:text-5xl font-medium bg-gradient-to-br from-warm-beige to-gold bg-clip-text text-transparent">
    Ready to Transform Your Space?
  </h2>
  <p className="text-sm lg:text-md bg-gradient-to-br from-warm-beige to-gold bg-clip-text text-transparent">
    Let us bring your vision to life with our expert design services.
  </p>

  <Link
  href="/contactus"
  className="inline-block bg-gradient-to-br from-warm-beige to-soft-white text-dark-brown px-6 py-3 rounded-xl text-md font-semibold shadow-md hover:bg-dark-brown hover:text-gold transition-all"
>
  Get Started Now
</Link>
</div>


    
      </div>

  );
};

export default Projects;
