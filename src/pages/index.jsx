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

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ChooseUs />
      <Projects />
      <Testimonials />
      <SliderText />
      <ContactUs />
    </>
  );
};

export default Home;