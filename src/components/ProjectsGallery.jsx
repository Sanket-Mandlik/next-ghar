"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const imageSets = [
  ["/assets/project1.jpeg", "/assets/project2.jpeg"],
  ["/assets/project3.jpeg", "/assets/project4.jpeg"],
  ["/assets/project5.jpeg", "/assets/project6.jpeg"],
  ["/assets/project7.jpeg", "/assets/project8.jpeg"],
];

const labelMap = [
  "Living & Dining", // Project One
  "Kitchen",         // Project Two
  "Bedrooms",        // Project Three
  "Kids Room",       // Project Four
];

const SlideshowSection = ({
  title,
  sectionClass,
  images,
  direction = "x",
  label,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); // Slower transition
    return () => clearInterval(interval);
  }, [images.length]);

  const translateStyle =
    direction === "y"
      ? {
          transform: `translateY(-${currentImage * 100}%)`,
          height: `${images.length * 100}%`,
        }
      : {
          transform: `translateX(-${currentImage * 100}%)`,
          width: `${images.length * 100}%`,
        };

  return (
    <div
      className={`relative overflow-hidden  text-white p-10 rounded-2xl ${sectionClass}`}
    >
      <div
        className={`absolute inset-0 flex ${
          direction === "y" ? "flex-col" : "flex"
        } transition-transform duration-[8000ms] ease-in-out`}
        style={translateStyle}
      >
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`${title} - ${i}`}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/60 z-10 rounded-2xl" />
      <div className="absolute bottom-4 left-6 z-20 text-white text-md font-medium uppercase">
        {label}
      </div>
    </div>
  );
};

export default function ProjectsGallery() {
  return (
    <div className="flex h-[82vh] w-full gap-3 px-4">
      {/* Left */}
      <SlideshowSection
        title="Project One"
        sectionClass="w-[35%] h-full"
        images={imageSets[0]}
        direction="x"
        label={labelMap[0]}
      />

      {/* Right */}
      <div className="flex flex-col w-[65%] h-full gap-3">
        {/* Top */}
        <SlideshowSection
          title="Project Two"
          sectionClass="h-[60%] w-full"
          images={imageSets[1]}
          direction="y"
          label={labelMap[1]}
        />
        {/* Bottom */}
        <div className="flex h-[40%] w-full gap-3">
          <SlideshowSection
            title="Project Three"
            sectionClass="w-1/2"
            images={imageSets[2]}
            direction="x"
            label={labelMap[2]}
          />
          <SlideshowSection
            title="Project Four"
            sectionClass="w-1/2"
            images={imageSets[3]}
            direction="y"
            label={labelMap[3]}
          />
        </div>
      </div>
    </div>
  );
}
