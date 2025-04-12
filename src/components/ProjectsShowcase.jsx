import React, { useState } from "react";

const ProjectsShowcase = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const projects = [
    { id: 1, title: "Cozy Living Room", image: "/assets/project1.jpeg", category: "Living & Dining" },
    { id: 2, title: "Modern Dining", image: "/assets/project4.jpeg", category: "Living & Dining" },
    { id: 3, title: "Master Bedroom", image: "/assets/project5.jpeg", category: "Bedroom" },
    { id: 4, title: "Guest Bedroom", image: "/assets/project6.jpeg", category: "Bedroom" },
    { id: 5, title: "Modular Kitchen", image: "/assets/project7.jpeg", category: "Kitchen" },
    { id: 6, title: "Kids Playroom", image: "/assets/project8.jpeg", category: "Kids Bedroom" },
    { id: 7, title: "Kids Playroom", image: "/assets/project9.jpeg", category: "Kids Bedroom" },
    { id: 8, title: "Kids Playroom", image: "/assets/project10.jpeg", category: "Kids Bedroom" },
    { id: 9, title: "Kids Playroom", image: "/assets/project11.jpeg", category: "Kids Bedroom" },
    { id: 12, title: "Kids Playroom", image: "/assets/project12.png", category: "Kids Bedroom" },
    { id: 19, title: "Kids Playroom", image: "/assets/project13.png", category: "Kids Bedroom" },
    { id: 12, title: "Kids Playroom", image: "/assets/project14.jpeg", category: "Kids Bedroom" },
    { id: 13, title: "Kids Playroom", image: "/assets/project14.jpeg", category: "Kids Bedroom" },
    { id: 14, title: "Kids Playroom", image: "/assets/project14.jpeg", category: "Kids Bedroom" },
    { id: 15, title: "Kids Playroom", image: "/assets/project14.jpeg", category: "Kids Bedroom" },
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

  return (
    <div className="w-full bg-warm-beige/20 p-4 mt-20 rounded-2xl">
      <div className="mx-auto px-4 lg:px-0">
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
                className="w-[26vw] h-[40vh] object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center rounded-2xl">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={closeFullScreen}
          >
            ✖
          </button>
          <button
            className="absolute left-6 text-white text-4xl"
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
            className="absolute right-6 text-white text-4xl"
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
