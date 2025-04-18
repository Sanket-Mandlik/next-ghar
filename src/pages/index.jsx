// pages/index.js or app/page.js (depending on your setup)
import Head from 'next/head';
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Simplify from "../components/Simplify";
import ChooseUs from "../components/ChooseUs";
import HeroLabel from "../components/HeroLabel";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SliderText from "../components/SliderText";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import BeforeAfter from "../components/BeforeAfter";

const Home = () => {
  return (
    <>
      <Head>
        <title>Best Interior Design In Pune - Make My Ghar</title> {/* Set a title for the Home page */}
      </Head>
      <Hero />
      <AboutUs />
      <BeforeAfter />
      <Services />
      <div className="lg:px-0 px-4">
        <ChooseUs />
      </div>
      <Projects />
      <div className="lg:w-4/5 px-4 lg:px-0 lg:mx-auto">
        <Testimonials />
      </div>
      <SliderText />
      <ContactUs />
      <FAQ />
    </>
  );
};

export default Home;
