import React from "react";
import { Check } from "lucide-react";

const services = [
  {
    title: "Complete Makeover",
    description:
      "Tailored interiors reflecting individual lifestyles and tastes for a truly unique home.",
    points: [
      "Custom carpentry",
      "Semi-modular kitchens",
      "Bedrooms & Kid's",
      "End-to-end design process",
    ],
    image: "/assets/project7.jpeg",
  },
  {
    title: "Spacious Planning",
    description:
      "Intelligent use of available space, blending utility with comfort and style seamlessly.",
    points: [
      "Wall Paneling",
      "Wall Painting",
      "Electrical setup",
      "False Ceiling & Mouldings",
      "Safety doors",
    ],
    image: "/assets/project3.jpeg",
  },
  {
    title: "Modular Kitchen",
    description:
      "A kitchen that complements your lifestyle, functionally and aesthetically.",
    points: ["Modular Kitchen", "Semi-Modular Kitchen", "Space Planning"],
    image: "/assets/project2.jpeg",
  },
  {
    title: "Commercial",
    description:
      "Functional and attractive commercial interiors that reflect your brand’s personality.",
    points: ["Office Interior", "Shop Makeover", "Community Spaces"],
    image: "/assets/project5.jpeg",
  },
  {
    title: "Loose Furniture",
    description:
      "Spaces that create warm welcomes and shared experiences over meals.",
    points: [
      "Sofa Sets & Armchairs",
      "Beds & Kids Furniture",
      "Center Tables",
      "Dining Tables",
      "Accent Furniture",
    ],
    image: "/assets/project1.jpeg",
  },
];

const meshBackgrounds = [
  "/assets/mesh-207.png",
  "/assets/mesh-198.png",
  "/assets/mesh-207.png",
  "/assets/mesh-292.png",
  "/assets/mesh-207.png",
];

const ServicesPage = () => {
  return (
    <div className="space-y-8 bg-soft-white">
      {services.map((service, index) => {
        const meshBg = meshBackgrounds[index % meshBackgrounds.length];

        return (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-3 w-full md:h-[65vh]"
          >
            {/* Image Section */}
            <div className="w-full md:w-2/3 relative overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[45vh] md:h-[65vh] object-cover rounded-2xl"
              />

              {/* Overlay */}
              <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-l from-black/60 to-transparent" />
              <div className="block md:hidden absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center text-soft-white px-6 md:px-0 items-end md:pr-20">
                {/* Desktop Text */}
                <div className="hidden md:flex flex-col space-y-3 max-w-xl text-right">
                  <h3 className="text-5xl font-medium">{service.title}</h3>
                  <div className="w-24 h-[2px] bg-soft-white ml-auto" />
                  <p className="text-lg">{service.description}</p>
                </div>

                {/* Mobile Text */}
                <div className="flex md:hidden flex-col absolute bottom-8 left-8 text-left space-y-2 max-w-xs">
                  <h3 className="text-4xl font-medium">{service.title}</h3>
                  <p className="text-base">{service.description}</p>
                </div>
              </div>
            </div>

            {/* Right Section with Mesh Background */}
            <div
              className="w-full md:w-1/3 p-10 md:p-15 text-soft-white flex flex-col justify-center space-y-4 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${meshBg})` }}
            >
              <div className="w-full space-y-4 text-left">
                <h4 className="text-2xl font-semibold text-soft-white">
                  What's included:
                </h4>
                <ul className="space-y-3 text-base">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-1 text-soft-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesPage;
