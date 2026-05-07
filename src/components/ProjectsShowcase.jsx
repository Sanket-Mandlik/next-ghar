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
