import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script"; // Add this import

import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SliderText from "../components/SliderText";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import BeforeAfter from "../components/BeforeAfter";

// Lazy-loaded components (client-only)
const LazyBeforeAfter = dynamic(() => import("../components/BeforeAfter"), { ssr: false });
const LazyServices = dynamic(() => import("../components/Services"), { ssr: false });
const LazyChooseUs = dynamic(() => import("../components/ChooseUs"), { ssr: false });
const LazyProjects = dynamic(() => import("../components/Projects"), { ssr: false });
const LazyTestimonials = dynamic(() => import("../components/Testimonials"), { ssr: false });

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Interior Designers In Pune - Make My Ghar</title>
        <meta
          name="description"
          content="Get stunning interiors with Pune's best interior designers. Make My Ghar offers modular kitchens, elegant living rooms, and custom bedroom designs."
        />
        <meta
          name="keywords"
          content="interior designers in pune, best interior designer in Pune, modular kitchen Pune, home interiors Pune, Make My Ghar, Kid's bedroom design Pune"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Interior Design In Pune - Make My Ghar" />
        <meta
          property="og:description"
          content="Transform your home with top-rated interior designers in Pune. Book a free consultation today."
        />
        <meta property="og:url" content="https://www.makemyghar.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.makemyghar.co/assets/mmglogo.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Interior Design In Pune - Make My Ghar" />
        <meta
          name="twitter:description"
          content="Book your dream home interiors in Pune. Expertly crafted by Make My Ghar."
        />
        <meta name="twitter:image" content="https://www.makemyghar.co/assets/mmglogo.webp" />

        <link rel="canonical" href="https://www.makemyghar.co/" />
      </Head>

      {/* ✅ Add Schema JSON-LD */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Make My Ghar",
      "image": "https://www.makemyghar.co/asstes/mmglogo.webp",
      "url": "https://www.makemyghar.co/",
      "description": "Top interior designers in Pune offering modular kitchen, bedroom, living room, and office design services.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressCountry": "IN"
      },
 
      "sameAs": [
        "https://www.instagram.com/make_my_ghar.co.in/",
             "https://www.facebook.com/makemyghar127"
      ]
    })
  }}
/>


      <Hero />
      <AboutUs />
      {isMobile ? <LazyBeforeAfter /> : <BeforeAfter />}
      {isMobile ? <LazyServices /> : <Services />}
      <div className="lg:px-0 px-4">{isMobile ? <LazyChooseUs /> : <ChooseUs />}</div>
      {isMobile ? <LazyProjects /> : <Projects />}
      <div className="lg:w-4/5 px-4 lg:px-0 lg:mx-auto">
        {isMobile ? <LazyTestimonials /> : <Testimonials />}
      </div>
      <SliderText />
      <ContactUs />
      <FAQ />
    </>
  );
};

export default Home;
