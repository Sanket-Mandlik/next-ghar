import React, { useState } from "react";
import Image from "next/image";

const ProjectsShowcase = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const projects = [
    // Ekta Project
    { id: "ekta-cover", title: "Ekta Project", image: "/assets/ekta-cover.jpg" },
    { id: "ekta-living1", title: "Ekta Living", image: "/assets/ekta-living (1).jpg" },
    { id: "ekta-living2", title: "Ekta Living", image: "/assets/ekta-living (2).jpg" },
    { id: "ekta-bedroom1", title: "Ekta Bedroom", image: "/assets/ekta-bedroom (1).jpg" },
    { id: "ekta-bedroom2", title: "Ekta Bedroom", image: "/assets/ekta-bedroom (2).jpg" },
    { id: "ekta-cover", title: "Residential Interior", image: "/assets/ekta-cover.jpg" },
    { id: "ekta-living1", title: "Living Space", image: "/assets/ekta-living (1).jpg" },
    { id: "ekta-living2", title: "Living Space", image: "/assets/ekta-living (2).jpg" },
    { id: "ekta-bedroom1", title: "Bedroom Design", image: "/assets/ekta-bedroom (1).jpg" },
    { id: "ekta-bedroom2", title: "Bedroom Design", image: "/assets/ekta-bedroom (2).jpg" },
    // Residential Project 1
    { id: "res1-cover", title: "Residential Interior", image: "/assets/ekta-cover.jpg" },
    { id: "res1-living1", title: "Living Space", image: "/assets/ekta-living (1).jpg" },
    { id: "res1-living2", title: "Living Space", image: "/assets/ekta-living (2).jpg" },
    { id: "res1-bedroom1", title: "Bedroom Design", image: "/assets/ekta-bedroom (1).jpg" },
    { id: "res1-bedroom2", title: "Bedroom Design", image: "/assets/ekta-bedroom (2).jpg" },
    { id: "res1-bedroom3", title: "Bedroom Design", image: "/assets/ekta-bedroom (3).jpg" },
    { id: "res1-kitchen1", title: "Modern Kitchen", image: "/assets/ekta-kitchen (1).jpg" },
    { id: "res1-kitchen2", title: "Modern Kitchen", image: "/assets/ekta-kitchen (2).jpg" },
    { id: "res1-kitchen3", title: "Modern Kitchen", image: "/assets/ekta-kitchen (3).jpg" },

    // Premium Residence Project
    { id: "harsha-others3", title: "Interior Details", image: "/assets/harsha others (3).jpg" },
    { id: "harsha-others4", title: "Interior Details", image: "/assets/harsha others (4).jpg" },

    // Contemporary Residence Project
    { id: "prashant1", title: "Contemporary Home", image: "/assets/prashant (1).png" },
    { id: "prashant2", title: "Modern Interior", image: "/assets/prashant (2).png" },
    { id: "prashant3", title: "Interior Details", image: "/assets/prashant (3).png" },
    { id: "prashant4", title: "Living Space", image: "/assets/prashant (4).png" },

    // Other Projects
    { id: 1, title: "Cozy Living Room", image: "/assets/after4.webp" },
    { id: 2, title: "Modern Interior", image: "/assets/projectga1.webp" },
    { id: 3, title: "Living Room Design", image: "/assets/project6.webp" },
    { id: 4, title: "Master Bedroom", image: "/assets/project5.webp" },
    { id: 5, title: "Bedroom Decor", image: "/assets/project10.webp" },
    { id: 6, title: "Comfortable Bedroom", image: "/assets/project8.webp" },
    { id: 7, title: "Luxury TV Cabinet", image: "/assets/project9.webp" },
    { id: 8, title: "Media Unit", image: "/assets/projectGa2.webp" },
    { id: 9, title: "TV Unit Design", image: "/assets/project11.webp" },
    { id: 10, title: "Modular Kitchen", image: "/assets/project2.webp" },
    { id: 11, title: "Modern Kitchen", image: "/assets/projectGa3.webp" },
    { id: 12, title: "Kitchen Interior", image: "/assets/projectGa4.webp" },
    { id: 13, title: "Kids Bedroom", image: "/assets/project12.webp" },
    { id: 14, title: "Children's Room", image: "/assets/projectGa5.webp" },
    { id: 15, title: "Kids Space", image: "/assets/project19.webp" },
    { id: 16, title: "Living Space", image: "/assets/project13.webp" },
    { id: 17, title: "Functional Living", image: "/assets/project14.webp" },
    { id: 18, title: "Modern Hall", image: "/assets/projectGa6.webp" },
  ];

  const openFullScreen = (image) => {
    setCurrentImage(image);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = projects.findIndex((p) => p.image === currentImage);
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentImage(projects[nextIndex].image);
  };

  const prevImage = () => {
    const currentIndex = projects.findIndex((p) => p.image === currentImage);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentImage(projects[prevIndex].image);
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
    <div className="w-full bg-warm-beige/20 p-4 mt-20 rounded-2xl">
      <div className="mx-auto lg:px-4">
        {/* Heading */}
        <h2 className="text-5xl lg:text-5xl mt-8 mb-6 font-medium text-medium-brown">
          Interior Design <span className="text-dark-brown">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative cursor-pointer group transform transition duration-300 hover:scale-105 rounded-2xl overflow-hidden h-[40vh]"
              onClick={() => openFullScreen(project.image)}
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
      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={closeFullScreen}
          >
            ✖
          </button>

          {/* Show arrows only on md+ screens */}
          <button
            className="hidden md:block absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            ◀
          </button>
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={currentImage}
              alt="Fullscreen"
              fill
              className="object-contain rounded-2xl transition-opacity duration-300"
              sizes="90vw"
            />
          </div>
          <button
            className="hidden md:block absolute right-6 text-white text-4xl"
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
