import React, { useState } from "react";
import Image from "next/image";

const ProjectsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const projects = [
    // Ekta Elite Project
    { id: "ekta-cover", title: "Ekta Elite - Residential Interior", image: "/assets/ekta-cover.jpg" },
    { id: "ekta-living1", title: "Ekta Elite - Living Space", image: "/assets/ekta-living (1).jpg" },
    { id: "ekta-living2", title: "Ekta Elite - Living Room", image: "/assets/ekta-living (2).jpg" },
    { id: "ekta-bedroom1", title: "Ekta Elite - Master Bedroom", image: "/assets/ekta-bedroom (1).jpg" },
    { id: "ekta-bedroom2", title: "Ekta Elite - Bedroom Decor", image: "/assets/ekta-bedroom (2).jpg" },
    { id: "ekta-bedroom3", title: "Ekta Elite - Bedroom Design", image: "/assets/ekta-bedroom (3).jpg" },
    { id: "ekta-kitchen1", title: "Ekta Elite - Modern Kitchen", image: "/assets/ekta-kitchen (1).jpg" },
    { id: "ekta-kitchen2", title: "Ekta Elite - Kitchen Interior", image: "/assets/ekta-kitchen (2).jpg" },
    { id: "ekta-kitchen3", title: "Ekta Elite - Modular Kitchen", image: "/assets/ekta-kitchen (3).jpg" },

    // Kalpataru Jade Project
    { id: "harsha-others3", title: "Kalpataru Jade - Pooja Unit", image: "/assets/harsha others (3).jpg" },
    { id: "harsha-others4", title: "Kalpataru Jade - Interior Details", image: "/assets/harsha others (4).jpg" },

    // Metro Park Balewadi Project
    { id: "prashant1", title: "Metro Park Balewadi - Contemporary Home", image: "/assets/prashant (1).png" },
    { id: "prashant2", title: "Metro Park Balewadi - Modern Interior", image: "/assets/prashant (2).png" },
    { id: "prashant3", title: "Metro Park Balewadi - Interior Details", image: "/assets/prashant (3).png" },
    { id: "prashant4", title: "Metro Park Balewadi - Living Space", image: "/assets/prashant (4).png" },

    // Supreme Estia Baner
    { id: "supreme-1", title: "Supreme Estia Baner - Luxury Interior", image: "/assets/supreme estia cover.jpeg" },

    // Other Projects
    { id: "proj-1", title: "Supreme Estia - Cozy Living Room", image: "/assets/after4.webp" },
    { id: "proj-3", title: "Supreme Estia - Living Room Design", image: "/assets/project6.webp" },
    { id: "proj-4", title: "Supreme Estia - Master Bedroom", image: "/assets/project5.webp" },
    { id: "proj-5", title: "Supreme Estia - Bedroom Decor", image: "/assets/project10.webp" },
    { id: "proj-6", title: "Supreme Estia - Comfortable Bedroom", image: "/assets/project8.webp" },
    { id: "proj-7", title: "Supreme Estia - Luxury TV Cabinet", image: "/assets/project9.webp" },
    { id: "proj-8", title: "Supreme Estia - Media Unit", image: "/assets/projectGa2.webp" },
    { id: "proj-9", title: "Supreme Estia - TV Unit Design", image: "/assets/project11.webp" },
    { id: "proj-10", title: "Supreme Estia - Modular Kitchen", image: "/assets/project2.webp" },
    { id: "proj-11", title: "Supreme Estia - Modern Kitchen", image: "/assets/projectGa3.webp" },
    { id: "proj-12", title: "Supreme Estia - Kitchen Interior", image: "/assets/projectGa4.webp" },
    { id: "proj-13", title: "Supreme Estia - Kids Bedroom", image: "/assets/project12.webp" },
    { id: "proj-14", title: "Supreme Estia - Children's Room", image: "/assets/projectGa5.webp" },
    { id: "proj-15", title: "Supreme Estia - Kids Space", image: "/assets/project19.webp" },
    { id: "proj-16", title: "Supreme Estia - Living Space", image: "/assets/project13.webp" },
    { id: "proj-17", title: "Supreme Estia - Functional Living", image: "/assets/project14.webp" },
    { id: "proj-18", title: "Supreme Estia - Modern Hall", image: "/assets/projectGa6.webp" },

    // Gurangs Project
    { id: "gurangs-1", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_000000000a6472098d662727c31aec82.png" },
    { id: "gurangs-2", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000198471fa9a4498835b0991d7.png" },
    { id: "gurangs-3", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_000000001fa471fda8be11e429706883.png" },
    { id: "gurangs-4", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_0000000022547208b3f932cdd181ee80.png" },
    { id: "gurangs-5", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_0000000080e87207ab4eb0444db7092c.png" },
    { id: "gurangs-6", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000829471faabcc61f405414e98.png" },
    { id: "gurangs-7", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_0000000088c071fab4d72271937c0672.png" },
    { id: "gurangs-8", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000a118720890df7780ba4fb83e.png" },
    { id: "gurangs-9", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000a7e07207a2d6f4c29e5d6ab5.png" },
    { id: "gurangs-10", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000c47471fd83dd07aaa152bf28.png" },
    { id: "gurangs-11", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000c958720896d0b4342a236931.png" },
    { id: "gurangs-12", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000cfe072089bab2c59159d22a1.png" },
    { id: "gurangs-13", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000d528720882cc488b9df680e6.png" },
    { id: "gurangs-14", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000f3ec71fa9c6c2aadec1e5b64 (1).png" },
    { id: "gurangs-15", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000f3ec71fa9c6c2aadec1e5b64.png" },
    { id: "gurangs-16", title: "Gurangs Project - Interior Design", image: "/assets/gurangs/file_00000000fc0c720990a8f4331f197dd1.png" },

    // Pet Project
    { id: "pet-1", title: "Pet Project - Interior", image: "/assets/pet/2.png" },
    { id: "pet-2", title: "Pet Project - Consultation Space", image: "/assets/pet/consult- dog cat.png" },
    { id: "pet-3", title: "Pet Project - Clinic Interior", image: "/assets/pet/IMG-20260318-WA0024.jpg" },
    { id: "pet-4", title: "Pet Project - Reception", image: "/assets/pet/reception .png" },
    { id: "pet-5", title: "Pet Project - Reception", image: "/assets/pet/reception- 2.2.png" },
    { id: "pet-6", title: "Pet Project - Reception", image: "/assets/pet/reception.png" },
    { id: "pet-7", title: "Pet Project - Reception", image: "/assets/pet/reception2.2.png" },
    { id: "pet-8", title: "Pet Project - Staircase Passage", image: "/assets/pet/staircase passage.png" },

    // Some Project
    { id: "some-1", title: "Some Project - Interior Design", image: "/assets/someproject/2.png" },
    { id: "some-2", title: "Some Project - Interior Design", image: "/assets/someproject/4.png" },
    { id: "some-3", title: "Some Project - Common Wash Room", image: "/assets/someproject/COMMON WASH ROOM 2.png" },
    { id: "some-4", title: "Some Project - Interior Design", image: "/assets/someproject/file_00000000bb5c7207870ae06c4b854f3f.png" },
    { id: "some-5", title: "Some Project - Kids Room", image: "/assets/someproject/kids room.png" },
    { id: "some-6", title: "Some Project - Living Balcony", image: "/assets/someproject/LIVING  BALCONY 1.png" },
    { id: "some-7", title: "Some Project - Living Balcony", image: "/assets/someproject/LIVING  BALCONY 2.png" },
    { id: "some-8", title: "Some Project - Living Room", image: "/assets/someproject/living room (1).png" },
    { id: "some-9", title: "Some Project - Living Room", image: "/assets/someproject/living room.png" },
    { id: "some-10", title: "Some Project - Master Bedroom Wardrobe", image: "/assets/someproject/master's bedroom - wardrobe .png" },
    { id: "some-11", title: "Some Project - Master Bedroom", image: "/assets/someproject/master's bedroom.png" },
  ];

  const openFullScreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
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
    <div className="w-full bg-warm-beige/20 p-4 mt-20 rounded-4xl">
      <div className="mx-auto lg:px-4">
        {/* Heading */}
        <h2 className="text-5xl lg:text-5xl mt-8 mb-6 font-medium text-medium-brown">
          Interior Design <span className="text-dark-brown">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
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
      </div>

      {/* Fullscreen Viewer */}
      {isFullScreen && currentIndex !== null && (
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

          {/* Show arrows only on md+ screens */}
          <button
            className="hidden md:block absolute left-6 text-white text-4xl z-50 p-4"
            onClick={prevImage}
          >
            ◀
          </button>
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={projects[currentIndex].image}
              alt="Fullscreen"
              fill
              className="object-contain rounded-2xl transition-opacity duration-300"
              sizes="90vw"
            />
            {/* Optional Title Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm">
              {projects[currentIndex].title}
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
    </div>
  );
};

export default ProjectsShowcase;
