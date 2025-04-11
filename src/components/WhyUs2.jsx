import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from 'next/link';

// Dynamically import react-compare-image with SSR disabled
const ReactCompareImage = dynamic(() => import("react-compare-image"), {
  ssr: false,
});

const WhyUs2 = () => {
  return (
    <div className="lg:w-4/5 mx-auto bg-soft-white flex flex-col items-start mt-30 space-y-6">
      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-5xl lg:text-5xl font-medium text-dark-brown ">
          Before After <span className="text-medium-brown">Comparison</span>
        </h2>
      </motion.div>

      {/* Comparison and CTA Section */}
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-4">
        {/* Comparison Section */}
        <div className="lg:w-2/3 rounded-xl overflow-hidden flex">
          <ReactCompareImage
            leftImage="/assets/project9.jpeg"
            rightImage="/assets/project10.jpeg"
            sliderLineColor="#ffffff"
            leftImageCss={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              borderRadius: "0.99rem", // Tailwind equivalent of rounded-xl
            }}
            rightImageCss={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              borderRadius: "0.99rem", // Tailwind equivalent of rounded-xl
            }}
          />
        </div>

        {/* CTA Section with Animation */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="lg:w-1/3 shadow-lg shadow-medium-brown/50 from-warm-beige to-medium-brown via-warm-beige text-soft-white px-6 py-8 rounded-2xl flex flex-col items-center justify-center"
  style={{
    backgroundImage: "url('/assets/mesh-969.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h3 className="text-3xl lg:text-4xl font-medium mb-6 text-center bg-gradient-to-br from-soft-white to-warm-beige bg-clip-text text-transparent">
    Your Vision, Our Expertise
  </h3>

  <p className="text-sm lg:text-md text-center mb-10 py-3 bg-gradient-to-br from-warm-beige to-soft-white bg-clip-text text-transparent">
 From 2BHKs to villas across Pune, Make My Ghar helps you choose the right layout, finishes, and style—just the way you want it.

  </p>

  <Link href="/contactus" passHref>
  <button className="bg-gradient-to-br from-warm-beige to-soft-white text-dark-brown px-6 py-3 rounded-xl text-md font-semibold shadow-md hover:bg-dark-brown hover:text-gold  transition-all">
    Get Started Now
  </button>
</Link>
</motion.div>

      </div>
    </div>
  );
};

export default WhyUs2;