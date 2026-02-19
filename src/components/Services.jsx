import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: (
      <>
        Complete <span className="text-gold">Makeover</span>
      </>
    ),
    description: "Interiors thoughtfully crafted to reflect your lifestyle and traditions for a home that truly feels like yours in Pune.",
    image: "project1.webp",
    alt:"Custom Living Room in Pune",
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
        Spacious <span className="text-gold">Planning</span>
      </>
    ),
    description: "Smart space utilization that blends comfort, utility, and elegant style.",
    image: "project3.webp",
    alt:"Spacious Interiors in Baner",
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
        Modular <span className="text-gold">Kitchen</span>
      </>
    ),
    description: "A modular kitchen that complements your lifestyle, functionally and aesthetically.",
    image: "project2.webp",
    alt:"Modular Kitchen in Akurdi",
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
        Commercial <span className="text-gold">Interiors</span>
      </>
    ),
    description: "Productive and attractive commercial interiors that reflect your brand’s personality.",
    image: "project14.webp",
    alt:"Commercial Interiors in Pune",
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
        Loose <span className="text-gold">Furniture</span>
      </>
    ),
    description: "Create inviting spaces at your apartment in Pune that bring families together on meals and spark warm conversations.",
    image: "projectGa4.webp",
    alt:"Furnished Apartment in Pune",
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
        Start Designing Home With <span className="text-warm-beige">Make My Ghar</span>
      </>
    ),
    description: "Contact us today to begin work on your dream home in Pune!",
    image: "mesh-994.webp",
    alt: "Start Designing Home service with a modern design.",
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
    "/assets/project14.webp",
    "/assets/projectGa5.webp",
    "/assets/projectGa4.webp",
  ];

  return (
    <div className="relative lg:w-4/5 lg:mx-auto mx-5 flex flex-col items-start mt-30">
      <motion.h2
        className="text-5xl font-montserrat text-medium-brown font-medium mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="text-dark-brown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          What Services Do
        </motion.span>{" "}
        We Offer?
      </motion.h2>

      <div className="flex lg:w-4/5 mx-auto relative w-full flex-col items-center ">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ y: 0 }}
            animate={{
              y: hovered !== null && index > hovered && index < 5 ? 250 : 0,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            className={`relative h-auto lg:h-[520px] w-[91vw] lg:w-[80vw] p-6 rounded-2xl shadow-[0_-10px_15px_-3px_rgba(100,100,100,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-pointer flex ${index === 5
                ? "flex-col items-center justify-center text-center bg-cover bg-center text-pure-white"
                : "flex-col lg:flex-row gap-4 pt-23 items-start text-medium-brown bg-soft-white"
              }`}
            style={{
              marginTop: index !== 0 && index < 5 ? "-300px" : "0",
              backgroundImage: index === 5 ? "url('/assets/mesh-994.webp')" : "none",
            }}
            onMouseEnter={() => (index < 5 ? setHovered(index) : null)}
            onMouseLeave={() => (index < 5 ? setHovered(null) : null)}
          >
            {index !== 5 && (
              <div className="absolute top-[30px] left-[45px] -translate-x-1/2 w-10 h-10 flex items-center justify-center shadow-lg bg-gradient-to-br to-dark-brown via-dark-brown from-medium-brown text-soft-white text-xl font-semibold rounded-full">
                {service.id}
              </div>
            )}

            <div
              className={`flex-1 flex flex-col ${index === 5
                  ? "justify-between items-center text-center h-full"
                  : "justify-between"
                }`}
            >
              {index === 5 && (
                <div className="flex flex-col lg:flex-row h-full py-13 lg:py-0 text-dark-brown">
                  {/* Left Side Content */}
                  <div className="w-full lg: lg:pl-5 lg:pr-8 lg:w-1/2 flex flex-col justify-center items-start text-left">
                    <h3 className="text-5xl text-soft-white font-medium mb-5">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-warm-beige mb-8">
                      {service.description}
                    </p>
                    <Link
                      href="/contactus"
                      aria-label="Get started by contacting us"
                      className="inline-block px-10 py-4 bg-gradient-to-b from-soft-white to-warm-beige text-dark-brown font-semibold rounded-lg hover:bg-medium-brown hover:text-dark-brown hover:scale-105 shadow-xl transition-all min-h-[48px] text-center"
                    >
                      Get Started Now
                    </Link>
                  </div>

                  {/* Right Side Carousel */}
                  <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center relative overflow-hidden rounded-2xl shadow-xl h-[480px]">
                    {/* Viewport */}
                    <div className="w-full h-full overflow-hidden">
                      {/* Track */}
                      <motion.div
                        className="flex gap-4 h-full"
                        animate={{ x: `calc(-${carouselIndex} * (100% + 1rem))` }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 2 }}
                      >
                        {carouselImages.map((src, idx) => (
                          <div
                            key={idx}
                            className="relative flex-shrink-0 w-full h-full"
                          >
                            <Image
                              src={src}
                              alt={`Carousel image ${idx + 1} showcasing our services`}
                              fill
                              className="object-cover rounded-2xl"
                              sizes="50vw"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Prev/Next Buttons */}
                    <button
                      onClick={() =>
                        setCarouselIndex(
                          (carouselIndex - 1 + carouselImages.length) %
                          carouselImages.length
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-soft-white bg-opacity-60 text-dark-brown p-1 rounded-full hover:bg-opacity-90 shadow-md transition"
                      aria-label="Previous image"
                      title="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
                    </button>

                    <button
                      onClick={() =>
                        setCarouselIndex((carouselIndex + 1) % carouselImages.length)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-soft-white bg-opacity-60 text-dark-brown p-1 rounded-full hover:bg-opacity-90 shadow-md transition"
                      aria-label="Next image"
                      title="Next image"
                    >
                      <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}

              {index !== 5 && (
                <div>
                  <h3 className="text-5xl text-dark-brown font-medium">
                    {service.title}
                  </h3>
                  <p className="text-lg font-medium mt-3 mb-8 text-medium-brown lg:mb-8">
                    {service.description}
                  </p>
                  {service.features && (
                    <div className="space-y-3 mt-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start mt-4 gap-6">
                          <CheckCircle className="text-gold  w-5 h-5 mt-1" />
                          <span className="text-soft-white text-lg bg-medium-brown py-1 px-3 rounded-lg font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Image */}
            {service.image && index !== 5 && (
              <div className="relative mt-4 lg:-mt-20 lg:ml-6 w-full lg:w-1/2 h-80 lg:h-[480px]">
                <Image
                  src={`/assets/${service.image}`}
                  alt={service.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;