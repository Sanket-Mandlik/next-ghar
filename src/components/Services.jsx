import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: (
      <>
        Complete <span className="text-dark-brown">Makeover</span>
      </>
    ),
    description: "Tailored interiors reflecting individual lifestyles and tastes for a truly unique home.",
    image: "project1.jpeg",
    features: [
      "Custom carpentry",
      "Semi-modular kitchens",
      "Bedrooms & Kid's rooms",
      "End-to-end design process",
      "Spacious Planning"
    ],
  },
  {
    id: 2,
    title: (
      <>
        Spacious <span className="text-dark-brown">Planning</span>
      </>
    ),
    description: "Intelligent use of available space, blending utility with comfort and style seamlessly.",
    image: "project3.jpeg",
    features: [
      "Wall Paneling",
      "Wall Painting",
      "Electrical setup",
      "False Ceiling & Mouldings",
      "Safety doors"
    ],
  },
  {
    id: 3,
    title: (
      <>
        Modular <span className="text-dark-brown">Kitchen</span>
      </>
    ),
    description: "A kitchen that complements your lifestyle, functionally and aesthetically.",
    image: "project2.jpeg",
    features: [
      "Modular Kitchen",
      "Semi-Modular Kitchen",
      "Space Planning"
    ],
  },
  {
    id: 4,
    title: (
      <>
        Commercial <span className="text-dark-brown">Interiors</span>
      </>
    ),
    description: "Functional and attractive commercial interiors that reflect your brand’s personality.",
    image: "project4.jpeg",
    features: [
      "Office Interior",
      "Shop Makeover",
      "Community Spaces"
    ],
  },
  {
    id: 5,
    title: (
      <>
        Loose <span className="text-dark-brown">Furniture</span>
      </>
    ),
    description: "Spaces that create warm welcomes and shared experiences over meals.",
    image: "project5.jpeg",
    features: [
      "Sofa Sets & Armchairs",
      "Beds & Kids Furniture",
      "Center Tables",
      "Dining Tables",
      "Accent Furniture"
    ],
  },
  {
    id: 6,
    title: (
      <>
        Start Your Project With <span className="text-gold">Make My Ghar</span>
      </>
    ),
    description: "Contact us today to begin work on your dream home!",
    image: "mesh-994.png",
    cta: true,
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative md:w-4/5 md:mx-auto mx-3 px-1 flex flex-col items-start mt-30">
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

      <div className="flex md:w-4/5 mx-auto relative w-full flex-col items-center mt-10">
        {services.map((service, index) => (
          <motion.div
          key={service.id}
          initial={{ y: 0 }}
          animate={{
            y: hovered !== null && index > hovered && index < 5 ? 200 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={`relative h-auto md:h-[520px] w-[94vw] md:w-[80vw] p-6 rounded-2xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer flex ${
            index === 5
              ? "flex-col items-center justify-center text-center bg-cover bg-center text-pure-white"
              : "flex-col md:flex-row gap-4 pt-25 items-start text-medium-brown bg-soft-white"
          }`}
          style={{
            marginTop: index !== 0 && index < 5 ? "-290px" : "0",
            backgroundImage: index === 5 ? "url('/assets/mesh-994.png')" : "none",
          }}
          onMouseEnter={() => (index < 5 ? setHovered(index) : null)}
          onMouseLeave={() => (index < 5 ? setHovered(null) : null)}
        >
          {index !== 5 && (
            <div className="absolute top-[20px] left-[40px] -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-dark-brown text-pure-white text-lg font-bold rounded-full">
              {service.id}
            </div>
          )}
        
        <div className={`flex-1 flex flex-col ${index === 5 ? "justify-between items-center text-center h-full" : "justify-between"}`}>
  {index === 5 && (
    <div className="mt-auto ">
      <h3 className="text-5xl font-medium">{service.title}</h3>
      <p className="text-lg font-medium mt-6 mb-15">{service.description}</p>
    </div>
  )}
  {index !== 5 && (
    <div>
      <h3 className="text-4xl font-medium">{service.title}</h3>
      <p className="text-lg font-medium mt-3 mb-15">{service.description}</p>
      {service.features && (
        <ul className="list-disc pl-5 text-dark-brown text-lg font-medium space-y-1">
          {service.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  )}

  {service.cta && (
    <button className=" mb-auto px-8 py-3 -mt-6 bg-gradient-to-b from-soft-white to-warm-beige text-dark-brown font-semibold rounded-lg hover:bg-medium-brown hover:text-pure-white transition-all w-fit">
      Get Started Now
    </button>
  )}
</div>

        
          {/* Image */}
          {service.image && index !== 5 && (
            <img
              src={`/assets/${service.image}`}
              alt={`Service ${service.id}`}
              className="mt-4 md:-mt-20 md:ml-6 w-full md:w-1/2 h-80 md:h-full object-cover rounded-2xl"
            />
          )}
        </motion.div>
        
        ))}
      </div>
    </div>
  );
};

export default Services;
