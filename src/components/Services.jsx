import { useState } from "react";
import { motion } from "framer-motion";

// Define the services with titles as JSX to highlight specific words
const services = [
  {
    id: 1,
    title: (
      <>
       Bespoke <span className="text-dark-brown"> Interior Designing</span>
      </>
    ),
    description: "Transform your space with modern aesthetics.",
  },
  {
    id: 2,
    title: (
      <>
        Tailored <span className="text-dark-brown">Modular Kitchens</span>
      </>
    ),
    description: "Custom-built kitchens tailored to your needs.",
  },
  {
    id: 3,
    title: (
      <>
        Furniture & <span className="text-dark-brown">Home Decor</span>
      </>
    ),
    description: "Handpicked furniture that defines elegance.",
  },
  {
    id: 4,
    title: (
      <>
       Smart Home <span className="text-dark-brown">Automation</span>
      </>
    ),
    description: "Smart solutions for effortless living.",
  },
  {
    id: 5,
    title: (
      <>
        Personalized <span className="text-dark-brown">Space Planning</span>
      </>
    ),
    description: "Give your home a stunning makeover.",
  },
  {
    id: 6,
    title: (
      <>
        Start Your Project With Us <span className="text-dark-brown">Us</span>
      </>
    ),
    description: "Contact us today to begin work on your dream home!",
    cta: true,
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative md:w-4/5 md:mx-auto mx-3 px-1 flex flex-col items-start mt-30">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-montserrat text-medium-brown font-medium mb-6"
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

      {/* Horizontal layout for larger screens */}
      <div className="hidden lg:flex relative w-full flex-row items-center">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ x: 0 }}
            animate={{
              x: hovered !== null && index > hovered && index < 5 ? 320 : 0,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            className={`relative h-[480px] w-[420px] p-6 rounded-xl shadow-lg cursor-pointer flex items-center ${
              index === 5
                ? "bg-dark-brown text-pure-white ml-10"
                : "bg-soft-white text-medium-brown"
            }`}
            style={{
              marginLeft: index !== 0 && index < 5 ? "-335px" : "0", // Overlapping effect
            }}
            onMouseEnter={() => (index < 5 ? setHovered(index) : null)}
            onMouseLeave={() => (index < 5 ? setHovered(null) : null)}
          >
            {/* Number Badge */}
            <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark-brown text-pure-white text-lg font-bold rounded-full">
              {service.id}
            </div>

            {/* Service Content */}
            <div className="ml-15">
              <h3 className="text-4xl font-medium">{service.title}</h3>
              <p className="text-sm mt-1">{service.description}</p>

              {/* CTA Button for Last Card */}
              {service.cta && (
                <button className="mt-4 px-6 py-2 bg-warm-beige text-dark-brown font-semibold rounded-lg hover:bg-medium-brown hover:text-pure-white transition-all">
                  Get Started
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vertical layout for mobile */}
      <div className="flex lg:hidden relative w-full  flex-col items-center mt-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ y: 0 }}
            animate={{
              y: hovered !== null && index > hovered && index < 5 ? 200 : 0,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            className={`relative h-[450px] w-[94vw] p-6 rounded-xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer flex pt-25 items-start ${
              index === 5
                ? "bg-dark-brown text-pure-white"
                : "bg-soft-white text-medium-brown"
            }`}
            style={{
              marginTop: index !== 0 && index < 5 ? "-290px" : "0", // Overlapping effect
            }}
            onMouseEnter={() => (index < 5 ? setHovered(index) : null)}
            onMouseLeave={() => (index < 5 ? setHovered(null) : null)}
          >
            {/* Number Badge */}
            <div className="absolute top-[20px] left-[40px] -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-dark-brown text-pure-white text-lg font-bold rounded-full">
              {service.id}
            </div>

            {/* Service Content */}
            <div className="text-start">
              <h3 className="text-4xl font-medium">{service.title}</h3>
              <p className="text-sm mt-1">{service.description}</p>

              {/* CTA Button for Last Card */}
              {service.cta && (
                <button className="mt-4 px-6 py-2 bg-gradient-to-b from-soft-white   to-warm-beige text-dark-brown font-semibold rounded-lg hover:bg-medium-brown hover:text-pure-white transition-all">
                  Get Started
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
