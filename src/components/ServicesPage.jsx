import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Complete Makeover",
    description:
      "Premium home interiors in Pune — from Baner to Kothrud, tailored to your lifestyle.",
    points: [
      "Custom carpentry",
      "Modular kitchens",
      "Wardrobes & kid’s rooms",
      "End-to-end design planning",
    ],
    image: "/assets/project7.jpeg",
  },
  {
    title: "Spacious Planning",
    description:
      "Maximizing usable space for Pune homes — ideal for compact flats in Wakad or Viman Nagar.",
    points: [
      "Wall paneling",
      "Textured paints",
      "Electrical & lighting setup",
      "False ceiling + POP moulding",
      "Safety doors with design",
    ],
    image: "/assets/project3.jpeg",
  },
  {
    title: "Modular Kitchen",
    description:
      "Optimized modular kitchen designs with chimney, trolleys & storage, popular in Pune homes.",
    points: ["L-shaped / U-shaped layouts", "Chimney + Hob fitting", "Space-efficient storage"],
    image: "/assets/project2.jpeg",
  },
  {
    title: "Commercial Spaces",
    description:
      "Brand-aligned office and retail design for shops, studios & salons in Pune’s commercial zones.",
    points: ["Office design", "Retail makeovers", "Co-working & studios"],
    image: "/assets/project5.jpeg",
  },
  {
    title: "Loose Furniture",
    description:
      "Custom furniture for homes in Pune — ideal for balconies, living areas & bedrooms.",
    points: [
      "Sofas & accent chairs",
      "Beds + kids furniture",
      "Dining sets & coffee tables",
      "Custom work desks",
    ],
    image: "/assets/project1.jpeg",
  },
];

const meshBackgrounds = [
  "/assets/mesh-207.png",
  "/assets/mesh-189.png",
  "/assets/mesh-207.png",
  "/assets/mesh-292.png",
  "/assets/mesh-207.png",
];

const ServicesPage = () => {
  return (
    <div className="space-y-8 bg-soft-white">
      {services.map((service, index) => {
        const meshBg = meshBackgrounds[index % meshBackgrounds.length];
        const number = index + 1;

        return (
          <div key={index} className="flex flex-col md:flex-row gap-3 w-full md:h-[65vh]">
            {/* Image Section */}
            <motion.div
              className="w-full md:w-2/3 relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-[45vh] md:h-[65vh] object-cover rounded-2xl"
              />

              {/* Overlay */}
              <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-l from-black/60 to-transparent" />
              <div className="block md:hidden absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center text-soft-white px-6 md:px-0 items-end md:pr-20">
                <div className="absolute top-8 left-8 z-30">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="w-12 h-12 md:w-16 md:h-16 border-2 border-soft-white rounded-full flex items-center justify-center font-normal bg-transparent backdrop-blur-sm text-3xl md:text-5xl"
                  >
                    {number}
                  </motion.div>
                </div>

                {/* Desktop Text */}
                <div className="hidden md:flex flex-col space-y-3 max-w-xl text-right">
                  <h3 className="text-5xl font-medium">{service.title}</h3>
                  <div className="w-24 h-[2px] bg-soft-white ml-auto" />
                  <p className="text-lg">{service.description}</p>
                </div>

                {/* Mobile Text */}
                <div className="flex md:hidden flex-col absolute bottom-8 left-8 text-left space-y-2 max-w-xs">
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <p className="text-md">{service.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Section with Mesh Background */}
            <motion.div
              className="w-full md:w-1/3 p-10 md:p-15 text-soft-white flex flex-col justify-center space-y-4 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${meshBg})` }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full space-y-6 text-left">
                <h4 className="text-3xl font-medium text-soft-white">
                  What's included:
                </h4>
                <ul className="space-y-4 text-base">
                  {service.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="w-5 h-5 mt-1 text-warm-beige animate-spin" />
                      <span className="text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesPage;
