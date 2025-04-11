
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";




const services = [
  {
    id: 1,
    title: (
      <>
        Complete <span className="text-dark-brown">Makeover</span>
      </>
    ),
    description: "Interiors thoughtfully crafted to reflect your lifestyle and traditions for a home that truly feels like yours in Pune.",
    image: "project1.jpeg",
    features: [
      "Custom carpentry",
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
    description: "Smart space utilization that blends comfort, utility, and elegant style.",
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
    description: "A modular kitchen that complements your lifestyle, functionally and aesthetically.",
    image: "project2.jpeg",
    features: [
      "Modular Kitchen",
      "Semi-Modular Kitchen",
      "Island Kitchen"
    ],
  },
  {
    id: 4,
    title: (
      <>
        Commercial <span className="text-dark-brown">Interiors</span>
      </>
    ),
    description: "Productive and attractive commercial interiors that reflect your brand’s personality.",
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
    description: "Create inviting spaces at your apartment in Pune that bring families together on meals and spark warm conversations.",
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

const [carouselIndex, setCarouselIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);



  const carouselImages = [
    "/assets/project10.jpeg",
    "/assets/project4.jpeg",
    "/assets/project3.jpeg",
  ];

  

  return (
    <div className="relative lg:w-4/5 lg:mx-auto mx-4 px-1 flex flex-col items-start mt-30">
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

      <div className="flex lg:w-4/5 mx-auto relative w-full flex-col items-center mt-10">
        {services.map((service, index) => (
          <motion.div
          key={service.id}
          initial={{ y: 0 }}
          animate={{
            y: hovered !== null && index > hovered && index < 5 ? 250 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={`relative h-auto lg:h-[520px] w-[94vw] lg:w-[80vw] p-6 rounded-2xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer flex ${
            index === 5
              ? "flex-col items-center justify-center text-center bg-cover bg-center text-pure-white"
              : "flex-col lg:flex-row gap-4 pt-25 items-start text-medium-brown bg-soft-white"
          }`}
          style={{
            marginTop: index !== 0 && index < 5 ? "-300px" : "0",
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
  <div className="flex flex-col lg:flex-row w-full h-full gap-10 py-20 lg:py-0 lg:pl-12 text-dark-brown">
    {/* Left Side Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
      <h3 className="text-4xl lg:text-5xl text-soft-white font-medium mb-4">{service.title}</h3>
      <p className="text-lg font-medium text-warm-beige mb-6">{service.description}</p>
      <button className="px-8 py-3 bg-gradient-to-b from-soft-white to-warm-beige text-dark-brown font-semibold rounded-lg hover:bg-medium-brown hover:text-pure-white transition-all">
        Get Started Now
      </button>
    </div>

    {/* Right Side Carousel */}
    <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center relative overflow-hidden rounded-xl shadow-xl">
      {/* Image Slides */}
      <motion.img
        key={carouselImages[carouselIndex]}
        src={carouselImages[carouselIndex]}
        alt="Project Carousel"
        initial={{ x: 100, opacity: 50 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Buttons */}
      <button
  onClick={() =>
    setCarouselIndex((carouselIndex - 1 + carouselImages.length) % carouselImages.length)
  }
  className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark-brown bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-90 transition"
>
  <ChevronLeft className="w-6 h-6" />
</button>

<button
  onClick={() =>
    setCarouselIndex((carouselIndex + 1) % carouselImages.length)
  }
  className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-brown bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-90 transition"
>
  <ChevronRight className="w-6 h-6" />
</button>

    </div>
  </div>
)}


  {index !== 5 && (
    <div>
      <h3 className="text-5xl font-medium">{service.title}</h3>
      <p className="text-lg font-medium mt-6 mb-8 text-gold lg:mb-10">{service.description}</p>
      {service.features && (
       <div className="space-y-3 mt-6">
       {service.features.map((feature, i) => (
         <div key={i} className="flex items-start mt-4 gap-6">
           <CheckCircle className="text-gold  w-5 h-5 mt-1" />
           <span className="text-soft-white text-xl  bg-medium-brown py-1 px-2 rounded-lg font-medium">{feature}</span>
         </div>
       ))}
     </div>
     
      )}
    </div>
  )}


</div>

        
          {/* Image */}
          {service.image && index !== 5 && (
          <img
          src={`/assets/${service.image}`}
          alt={`Service ${service.id}`}
          className="mt-4 lg:-mt-20 lg:ml-6 w-full lg:w-1/2 h-80 lg:h-[480px] object-cover rounded-2xl"
        />
        
          )}
        </motion.div>
        
        ))}
      </div>
    </div>
  );
};

export default Services;
