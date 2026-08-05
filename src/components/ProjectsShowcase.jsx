import React, { useState } from "react";
import Image from "next/image";

const ProjectSection = ({ title, subtitle, images }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const openFullScreen = (index) => {
    setCurrentIndex(index);
  };

  const closeFullScreen = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextImage();
    }
    if (touchEndX - touchStartX > 50) {
      prevImage();
    }
  };

  return (
    <section className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl lg:text-4xl font-medium text-medium-brown">
          {title}
        </h3>
        {subtitle && <p className="text-gold font-medium mt-1">{subtitle}</p>}
        <div className="h-1 bg-gold mt-4 rounded-full w-20" />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((project, index) => (
          <div
            key={`${title}-${index}`}
            className="relative cursor-pointer group transform transition duration-300 hover:scale-105 rounded-2xl overflow-hidden h-[40vh]"
            onClick={() => openFullScreen(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-2xl group-hover:shadow-[0_0_8px_3px_rgba(139,69,19,0.8)] transition-shadow duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl z-50"
            onClick={closeFullScreen}
          >
            ✖
          </button>

          <button
            className="hidden md:block absolute left-6 text-white text-4xl z-50 p-4"
            onClick={prevImage}
          >
            ◀
          </button>
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[currentIndex].image}
              alt="Fullscreen"
              fill
              className="object-contain rounded-2xl transition-opacity duration-300"
              sizes="90vw"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm">
              {images[currentIndex].title}
            </div>
          </div>
          <button
            className="hidden md:block absolute right-6 text-white text-4xl z-50 p-4"
            onClick={nextImage}
          >
            ▶
          </button>
        </div>
      )}
    </section>
  );
};

const ProjectsShowcase = () => {
  const sections = [
    // Kalpataru Jade - 3BHK Residence
    {
      title: "Kalpataru Jade - 3BHK Residence",
      subtitle: "Residential Interior Design",
      images: [
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_000000000a6472098d662727c31aec82.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000198471fa9a4498835b0991d7.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_000000001fa471fda8be11e429706883.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_0000000022547208b3f932cdd181ee80.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_0000000080e87207ab4eb0444db7092c.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000829471faabcc61f405414e98.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_0000000088c071fab4d72271937c0672.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000a118720890df7780ba4fb83e.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000a7e07207a2d6f4c29e5d6ab5.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000c47471fd83dd07aaa152bf28.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000c958720896d0b4342a236931.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000cfe072089bab2c59159d22a1.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000d528720882cc488b9df680e6.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000f3ec71fa9c6c2aadec1e5b64 (1).png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000f3ec71fa9c6c2aadec1e5b64.png" },
        { title: "Kalpataru Jade - 3BHK Residence", image: "/assets/Kalpataru jade - 3bhk Residence/file_00000000fc0c720990a8f4331f197dd1.png" },
      ],
    },

    // Supreme Estia Baner
    {
      title: "Supreme Estia - Baner",
      subtitle: "Residential Interior Design",
      images: [
        { title: "Supreme Estia Baner - Luxury Interior", image: "/assets/Supreme Estia/supreme estia cover.jpeg" },
        { title: "Supreme Estia - Warm Living Room", image: "/assets/Supreme Estia/project1.webp" },
        { title: "Supreme Estia - Modular Kitchen", image: "/assets/Supreme Estia/project2.webp" },
        { title: "Supreme Estia - Living Room Design", image: "/assets/Supreme Estia/project3.webp" },
        { title: "Supreme Estia - Living Space", image: "/assets/Supreme Estia/project6.webp" },
        { title: "Supreme Estia - Interior Design", image: "/assets/Supreme Estia/project7.webp" },
        { title: "Supreme Estia - Comfortable Bedroom", image: "/assets/Supreme Estia/project8.webp" },
        { title: "Supreme Estia - Luxury TV Cabinet", image: "/assets/Supreme Estia/project9.webp" },
        { title: "Supreme Estia - Bedroom Decor", image: "/assets/Supreme Estia/project10.webp" },
        { title: "Supreme Estia - Kids Bedroom", image: "/assets/Supreme Estia/project12.webp" },
        { title: "Supreme Estia - Modern Kitchen", image: "/assets/Supreme Estia/projectGa3.webp" },
        { title: "Supreme Estia - Kitchen Interior", image: "/assets/Supreme Estia/projectGa4.webp" },
        { title: "Supreme Estia - Children's Room", image: "/assets/Supreme Estia/projectGa5.webp" },
      ],
    },

    // Ekta Elite Project
    {
      title: "Ekta Elite",
      subtitle: "Residential Interior Design",
      images: [
        { title: "Ekta Elite - Residential Interior", image: "/assets/ekta-cover.jpg" },
        { title: "Ekta Elite - Living Space", image: "/assets/ekta-living (1).jpg" },
        { title: "Ekta Elite - Living Room", image: "/assets/ekta-living (2).jpg" },
        { title: "Ekta Elite - Master Bedroom", image: "/assets/ekta-bedroom (1).jpg" },
        { title: "Ekta Elite - Bedroom Decor", image: "/assets/ekta-bedroom (2).jpg" },
        { title: "Ekta Elite - Bedroom Design", image: "/assets/ekta-bedroom (3).jpg" },
        { title: "Ekta Elite - Modern Kitchen", image: "/assets/ekta-kitchen (1).jpg" },
        { title: "Ekta Elite - Kitchen Interior", image: "/assets/ekta-kitchen (2).jpg" },
        { title: "Ekta Elite - Modular Kitchen", image: "/assets/ekta-kitchen (3).jpg" },
      ],
    },

    // 2BHK Hinjewadi - Global Inspira
    {
      title: "2BHK Hinjewadi - Global Inspira",
      subtitle: "Residential Interior Design",
      images: [
        { title: "Global Inspira - Interior Design", image: "/assets/2bhk Hinjewadi - global inspira/2.png" },
        { title: "Global Inspira - Interior Design", image: "/assets/2bhk Hinjewadi - global inspira/4.png" },
        { title: "Global Inspira - Common Wash Room", image: "/assets/2bhk Hinjewadi - global inspira/COMMON WASH ROOM 2.png" },
        { title: "Global Inspira - Interior Design", image: "/assets/2bhk Hinjewadi - global inspira/file_00000000bb5c7207870ae06c4b854f3f.png" },
        { title: "Global Inspira - Kids Room", image: "/assets/2bhk Hinjewadi - global inspira/kids room.png" },
        { title: "Global Inspira - Living Balcony", image: "/assets/2bhk Hinjewadi - global inspira/LIVING  BALCONY 1.png" },
        { title: "Global Inspira - Living Balcony", image: "/assets/2bhk Hinjewadi - global inspira/LIVING  BALCONY 2.png" },
        { title: "Global Inspira - Living Room", image: "/assets/2bhk Hinjewadi - global inspira/living room (1).png" },
        { title: "Global Inspira - Living Room", image: "/assets/2bhk Hinjewadi - global inspira/living room.png" },
        { title: "Global Inspira - Master Bedroom Wardrobe", image: "/assets/2bhk Hinjewadi - global inspira/master's bedroom - wardrobe .png" },
        { title: "Global Inspira - Master Bedroom", image: "/assets/2bhk Hinjewadi - global inspira/master's bedroom.png" },
      ],
    },

    // Metro Park Balewadi Project
    {
      title: "Metro Park Balewadi",
      subtitle: "Residential Interior Design",
      images: [
        { title: "Metro Park Balewadi - Contemporary Home", image: "/assets/prashant (1).png" },
        { title: "Metro Park Balewadi - Modern Interior", image: "/assets/prashant (2).png" },
        { title: "Metro Park Balewadi - Interior Details", image: "/assets/prashant (3).png" },
        { title: "Metro Park Balewadi - Living Space", image: "/assets/prashant (4).png" },
      ],
    },

    // Tulpule's Pet Care Clinic
    {
      title: "Tulpule's Pet Care Clinic",
      subtitle: "Commercial Interior Design",
      images: [
        { title: "Pet Care Clinic - Interior", image: "/assets/Tulpule's Pet Care clinic/2.png" },
        { title: "Pet Care Clinic - Consultation Space", image: "/assets/Tulpule's Pet Care clinic/consult- dog cat.png" },
        { title: "Pet Care Clinic - Clinic Interior", image: "/assets/Tulpule's Pet Care clinic/IMG-20260318-WA0024.jpg" },
        { title: "Pet Care Clinic - Reception", image: "/assets/Tulpule's Pet Care clinic/reception .png" },
        { title: "Pet Care Clinic - Reception", image: "/assets/Tulpule's Pet Care clinic/reception- 2.2.png" },
        { title: "Pet Care Clinic - Reception", image: "/assets/Tulpule's Pet Care clinic/reception.png" },
        { title: "Pet Care Clinic - Reception", image: "/assets/Tulpule's Pet Care clinic/reception2.2.png" },
        { title: "Pet Care Clinic - Staircase Passage", image: "/assets/Tulpule's Pet Care clinic/staircase passage.png" },
      ],
    },

    // Kalpataru Jade - Old Project
    {
      title: "Kalpataru Jade",
      subtitle: "Residential Interior Design",
      images: [
        { title: "Kalpataru Jade - Living Room", image: "/assets/harshal-cover.jpg" },
        { title: "Kalpataru Jade - Lounge Space", image: "/assets/harshal-living (2).jpg" },
        { title: "Kalpataru Jade - Dining Area", image: "/assets/harshal-living (1).jpg" },
        { title: "Kalpataru Jade - Master Bedroom", image: "/assets/harshal bedroom (2).jpg" },
        { title: "Kalpataru Jade - Bedroom Detail", image: "/assets/harshal bedroom (1).jpg" },
        { title: "Kalpataru Jade - Bedroom Design", image: "/assets/harshal bedroom (3).jpg" },
        { title: "Kalpataru Jade - Kitchen", image: "/assets/harshal kitchen.png" },
        { title: "Kalpataru Jade - Vanity Design", image: "/assets/harsha others (1).jpg" },
        { title: "Kalpataru Jade - Pooja + Study Area", image: "/assets/harsha others (2).jpg" },
        { title: "Kalpataru Jade - Pooja Unit", image: "/assets/harsha others (3).jpg" },
        { title: "Kalpataru Jade - Interior Details", image: "/assets/harsha others (4).jpg" },
      ],
    },
  ];

  return (
    <div className="w-full bg-warm-beige/20 p-4 mt-20 rounded-4xl">
      <div className="mx-auto lg:px-4">
        <h2 className="text-5xl lg:text-5xl mt-8 mb-12 font-medium text-medium-brown">
          Interior Design <span className="text-dark-brown">Gallery</span>
        </h2>

        {sections.map((section) => (
          <ProjectSection
            key={section.title}
            title={section.title}
            subtitle={section.subtitle}
            images={section.images}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
