'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const categories = {
  Before: [
    {
      image: '/assets/before1.jpeg',
      title: 'Before Renovation',
      subtitle: 'Original Layout',
    },
  ],
  Render: [
    {
      image: '/assets/render1.jpg',
      title: '3D Render',
      subtitle: 'Visual Plan',
    },
  ],
  'After 1': [
    {
      image: '/assets/after1.png',
      title: 'After Renovation - Phase 1',
      subtitle: 'Living Room',
    },
  ],
  'After 2': [
    {
      image: '/assets/after2.png',
      title: 'After Renovation - Phase 2',
      subtitle: 'Kitchen & Dining',
    },
  ],
  'After 3': [
    {
      image: '/assets/after3.jpeg',
      title: 'Final Outcome',
      subtitle: 'Full View',
    },
  ],
};

const BeforeAfter = () => {
  const [selectedCategory, setSelectedCategory] = useState('Render');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideRefs = useRef([]);
  const currentProjects = categories[selectedCategory];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % currentProjects.length;
      const currentSlide = slideRefs.current[currentImageIndex];
      const nextSlide = slideRefs.current[nextIndex];

      if (!currentSlide || !nextSlide) return;

      gsap.set(nextSlide, { clipPath: 'circle(0% at 50% 50%)', zIndex: 2 });
      gsap.set(currentSlide, { zIndex: 1 });

      gsap.to(nextSlide, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => {
          setCurrentImageIndex(nextIndex);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, currentProjects.length]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  return (
    <div className="relative w-full h-[82vh] overflow-hidden rounded-2xl">
      {/* Slides */}
      {currentProjects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className="absolute w-full h-full bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${project.image})`,
            zIndex: index === currentImageIndex ? 2 : 1,
            clipPath: index === currentImageIndex ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          }}
        />
      ))}

      {/* Category Buttons */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-1 rounded-full transition ${
              category === selectedCategory
                ? 'bg-yellow-600 text-white'
                : 'bg-brown-200 text-brown-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl text-center max-w-[90%]">
        <h2 className="text-xl font-bold text-brown-900">
          {currentProjects[currentImageIndex].title}
        </h2>
        <p className="text-brown-800">
          {currentProjects[currentImageIndex].subtitle}
        </p>
      </div>
    </div>
  );
};

export default BeforeAfter;
