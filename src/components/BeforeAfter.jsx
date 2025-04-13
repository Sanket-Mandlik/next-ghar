'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const categories = {
  Before: [{ image: '/assets/before1.jpeg', title: 'Before Renovation', subtitle: 'Original Layout' }],
  Render: [{ image: '/assets/render1.jpg', title: '3D Render', subtitle: 'Visual Plan' }],
  'After 1': [{ image: '/assets/after1.png', title: 'Design Option 1', subtitle: 'Living Room' }],
  'After 2': [{ image: '/assets/after2.png', title: 'Design Option 2', subtitle: 'Kitchen & Dining' }],
  'After 3': [{ image: '/assets/after3.jpeg', title: 'Design Option 3', subtitle: 'Full View' }],
};

const categoryKeys = Object.keys(categories);

const BeforeAfter = () => {
  const [selectedCategory, setSelectedCategory] = useState('Render');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentProjects = categories[selectedCategory];

  const slideRefs = useRef([]);
  const intervalRef = useRef(null);

  const changeSlide = () => {
    const nextIndex = (currentImageIndex + 1) % currentProjects.length;
    const currentSlide = slideRefs.current[currentImageIndex];
    const nextSlide = slideRefs.current[nextIndex];

    if (!currentSlide || !nextSlide) return;

    // Animate the transition effect (wavy effect)
    gsap.set(nextSlide, { opacity: 0, zIndex: 2 });

    gsap.to(currentSlide, {
      clipPath: 'circle(0% at 50% 50%)',
      duration: 1.5,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(currentSlide, { zIndex: 1 });
        setCurrentImageIndex(nextIndex);
      },
    });

    // Wavy transition effect for the next image
    gsap.to(nextSlide, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      clipPath: 'circle(150% at 50% 50%)',
    });
  };

  const autoPlay = () => {
    intervalRef.current = setInterval(() => {
      const currentCategoryIndex = categoryKeys.indexOf(selectedCategory);
      const isLastImage = currentImageIndex === currentProjects.length - 1;

      if (isLastImage) {
        const nextCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
        setSelectedCategory(categoryKeys[nextCategoryIndex]);
        setCurrentImageIndex(0);
      } else {
        changeSlide();
      }
    }, 4000);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    autoPlay();
    return () => clearInterval(intervalRef.current);
  }, [selectedCategory, currentImageIndex]);

  const handleCategoryChange = (category) => {
    clearInterval(intervalRef.current);
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  return (
    <div className="w-full px-3 lg:px-0 lg:mx-auto mt-30 lg:w-4/5">
      <h2 className="text-5xl lg:text-5xl font-montserrat text-medium-brown font-medium mb-6">
        <span className="text-dark-brown text-5xl">We Give</span> Many Options
      </h2>

      <div className="relative w-full h-[550px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl shadow-warm-beige/50">
        {/* Slide Layers */}
        {currentProjects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${project.image})`,
              zIndex: index === currentImageIndex ? 2 : 1,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Text Overlay */}
        <div className="absolute hidden lg:block bottom-24 left-1/2 transform -translate-x-1/2 bg-warm-beige/30 backdrop-blur-sm rounded-xl px-6 py-4 z-10 text-center">
  <h2 className="text-soft-white text-xl font-medium">
    {currentProjects[currentImageIndex].title}
  </h2>
  <p className="text-black text-sm">
    {currentProjects[currentImageIndex].subtitle}
  </p>
</div>


        {/* Category Buttons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-3 z-20 bg-warm-beige/40 backdrop-blur-sm px-6 py-2 min-w-[80vw] sm:min-w-[50vw] lg:min-w-0 justify-center rounded-full shadow-md">
          {categoryKeys.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                category === selectedCategory
                  ? 'bg-gold text-white'
                  : 'text-dark-brown hover:bg-gold/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
