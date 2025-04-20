import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import WhyUs1 from "../components/WhyUs1";
import WhyUs2 from "../components/WhyUs2";
import PlanSlider from "../components/PlanSlider";

// Dynamically import ChooseUs with SSR disabled
const ChooseUs = dynamic(() => import("../components/ChooseUs"), {
  ssr: false,
});

const WhyUs = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Why Choose Make My Ghar - Best Interior Designers In Pune</title>
        <meta
          name="description"
          content="Discover what makes Make My Ghar stand out in the world of interior design. From tailored design plans to transparent pricing and expert consultation—explore why clients across Pune trust us to transform their dream spaces."
        />
        <meta
          name="keywords"
          content="interior design pune, personalized home design, home renovation pune, best interior designers in pune, make my ghar, home decor experts in pune, interior design consultation in pune, modern home interiors, design my home"
        />
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L9PDETZMR7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L9PDETZMR7');
            `,
          }}
        />
      </Head>

      {/* Page Content */}
      <div className="bg-soft-white px-4 lg:px-0 mt-30 mx-auto min-h-screen">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative text-center py-30 px-4 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/assets/plan (3).webp')",
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
        <div className="lg:w-4/5 mt-20 mx-auto -mb-10">
          <PlanSlider />
        </div>
        <ChooseUs />
      </div>
    </>
  );
};

export default WhyUs;