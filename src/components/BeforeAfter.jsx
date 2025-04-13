'use client';
import React, { useEffect, useRef, useState } from 'react';

const categories = {
  Before: [{ image: '/assets/before1.jpeg', title: 'Before Renovation', subtitle: 'Original Layout' }],
  Render: [{ image: '/assets/render1.jpg', title: '3D Render', subtitle: 'Visual Plan' }],
  'After 1': [{ image: '/assets/after1.png', title: 'Design Option 1', subtitle: 'Living Room' }],
  'After 2': [{ image: '/assets/after2.png', title: 'Design Option 2', subtitle: 'Kitchen & Dining' }],
  'After 3': [{ image: '/assets/after3.jpeg', title: 'Design Option 3', subtitle: 'Full View' }],
};

const categoryKeys = Object.keys(categories);

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => resolve(img);
  });

const BeforeAfter = () => {
  const [selectedCategory, setSelectedCategory] = useState('Render');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);
  const animationRef = useRef(null);

  const runSimpleReveal = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    const prevImage = await loadImage(categories[selectedCategory][currentImageIndex - 1]?.image || categories[selectedCategory][0].image);
    const newImage = await loadImage(categories[selectedCategory][currentImageIndex].image);

    // Clear the canvas and draw the previous image
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(prevImage, 0, 0, width, height);

    let alpha = 0;
    const fadeIn = () => {
      alpha += 0.02;

      // Draw the new image with fading in effect
      ctx.globalAlpha = alpha;
      ctx.drawImage(newImage, 0, 0, width, height);

      if (alpha < 1) {
        animationRef.current = requestAnimationFrame(fadeIn);
      } else {
        ctx.globalAlpha = 1;
      }
    };

    fadeIn();
  };

  useEffect(() => {
    runSimpleReveal();
  }, [selectedCategory, currentImageIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentCategoryIndex = categoryKeys.indexOf(selectedCategory);
      const nextCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
      setSelectedCategory(categoryKeys[nextCategoryIndex]);
      setCurrentImageIndex(0); // Reset to the first image
    }, 4000);

    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    clearInterval(intervalRef.current);
    cancelAnimationFrame(animationRef.current);
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  return (
    <div className="w-full px-3 lg:px-0 lg:mx-auto mt-30 lg:w-4/5">
      <h2 className="text-5xl lg:text-5xl font-montserrat text-medium-brown font-medium mb-6">
        <span className="text-dark-brown text-5xl">We Give</span> Many Options
      </h2>

      <div className="relative w-full h-[550px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl shadow-warm-beige/50">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />

        <div className="absolute hidden lg:block bottom-24 left-1/2 transform -translate-x-1/2 bg-warm-beige/30 backdrop-blur-sm rounded-xl px-6 py-4 z-10 text-center">
          <h2 className="text-soft-white text-xl font-medium">
            {categories[selectedCategory][currentImageIndex].title}
          </h2>
          <p className="text-black text-sm">{categories[selectedCategory][currentImageIndex].subtitle}</p>
        </div>

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
