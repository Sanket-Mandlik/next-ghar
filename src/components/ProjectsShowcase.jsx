import React, { useState } from "react";

const ProjectsShowcase = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const projects = [
    { id: 1, title: "Cozy Living Room", image: "/assets/after4.jpeg" },
    { id: 2, title: "Cozy Living Room", image: "/assets/projectga1.png" },
    { id: 3, title: "Cozy Living Room", image: "/assets/project6.jpeg" },
    { id: 4, title: "Master Bedroom", image: "/assets/project5.jpeg" },
    { id: 5, title: "Master Bedroom", image: "/assets/project10.jpeg" },
    { id: 6, title: "Master Bedroom", image: "/assets/project8.jpeg" },
    { id: 7, title: "Luxury TV Cabinet", image: "/assets/project9.jpeg" },
    { id: 8, title: "Luxury TV Cabinet", image: "/assets/projectGa2.png" },
    { id: 9, title: "Luxury TV Cabinet", image: "/assets/project11.jpeg" },
    { id: 10, title: "Modular Kitchen", image: "/assets/project2.jpeg" },
    { id: 11, title: "Modular Kitchen", image: "/assets/projectGa3.jpeg" },
    { id: 12, title: "Modular Kitchen", image: "/assets/projectGa4.png" },
    { id: 13, title: "Kids Bedroom", image: "/assets/project12.jpg" },
    { id: 14, title: "Kids Bedroom", image: "/assets/projectGa5.jpg" },
    { id: 15, title: "Kids Bedroom", image: "/assets/project19.png" },
    { id: 16, title: "Living Space", image: "/assets/project13.png" },
    { id: 17, title: "Living Space", image: "/assets/project14.jpeg" },
    { id: 18, title: "Living Space", image: "/assets/projectGa6.png" },
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
              className="cursor-pointer group transform transition duration-300 hover:scale-105 rounded-2xl overflow-hidden"
              onClick={() => openFullScreen(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full lg:w-[26vw] lg:h-[40vh] object-cover rounded-2xl group-hover:shadow-[0_0_8px_3px_rgba(139,69,19,0.8)] transition-shadow duration-300"
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
          <img
            src={currentImage}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] rounded-2xl transition-opacity duration-300"
          />
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
