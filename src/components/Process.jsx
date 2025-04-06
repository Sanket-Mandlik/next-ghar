import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const [counter, setCounter] = useState(0);

  const processes = [
    {
      number: 1,
      name: "Consultation",
      description:
        "Our process begins with a detailed consultation where we take the time to understand your vision, preferences, and requirements. This step ensures that we align our expertise with your expectations to create a personalized plan tailored to your needs.",
    },
    {
      number: 2,
      name: "Design",
      description:
        "In the design phase, our team of creative experts crafts a custom design that reflects your style and functionality requirements. We focus on every detail, from layout and materials to aesthetics, ensuring a perfect balance between form and function.",
    },
    {
      number: 3,
      name: "Execution",
      description:
        "Once the design is finalized, our skilled professionals bring the vision to life with precision and care. We ensure that every aspect of the project is executed to the highest standards, using quality materials and expert craftsmanship.",
    },
    {
      number: 4,
      name: "Delivery",
      description:
        "After the execution phase, we meticulously review every detail to ensure perfection. The finished project is then delivered to you, exceeding your expectations and ready to transform your space into something extraordinary.",
    },
    {
      number: 5,
      name: "Support",
      description:
        "Even after the project is completed, our commitment to you continues. We provide ongoing support and assistance to ensure your satisfaction and address any concerns, making sure your experience remains seamless and enjoyable.",
    },
  ];

  useEffect(() => {
    let start = 0;
    const end = 120;

    let incrementTime = Math.abs(Math.floor(2000 / (end - start)));
    let timer = setInterval(() => {
      start += 1;
      setCounter(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full rounded-3xl flex flex-col md:flex-row p-4 gap-4 items-center justify-center"
      style={{
        backgroundImage: "url('/assets/mesh-994.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="md:w-1/3 h-full flex flex-col items-center justify-between p-6 relative">
        <p className="absolute top-4 left-4 text-sm text-light-gray">
          Building dreams, one step at a time.
        </p>

        <h1 className="text-4xl md:text-5xl py-30 font-medium text-soft-white text-center">
        Designed Perfect' n
        </h1>

        <div className="absolute bottom-4 left-4">
          <p className="text-3xl font-bold text-soft-white">{counter}+</p>
          <p className="text-sm text-light-gray">Projects Completed</p>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-soft-white text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-soft-white text-2xl" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      {/* Right Section */}
<div className="md:w-2/3 flex flex-col justify-between bg-warm-white rounded-l-3xl p-4 h-full min-h-[400px]">
  {/* Heading */}
  <h2 className="text-4xl font-medium text-gold/50 mb-35 text-center md:text-left">
    Our 5-Step Process
  </h2>

  {/* Steps */}
  <div className="relative w-full mx-auto -pb-20">
    {/* Dashed line through center of circles */}

    <div className="flex justify-between items-center w-full z-10">
      {processes.map((process, index) => (
        <div
          key={index}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            activeProcess === index ? "scale-110" : "scale-100"
          }`}
          onMouseEnter={() => setActiveProcess(index)}
          style={{ transform: "translateY(-50%)" }} // vertically align
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 text-gold font-bold text-xl shadow-md">
            {process.number}
          </div>
          <p className="mt-2 text-soft-white font-medium text-center text-sm">
            {process.name}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Description Sticking to Bottom */}
  <div className="mt-auto pt-2 text-md text-medium-brown ">
    {processes[activeProcess]?.description}
  </div>
</div>

    </div>
  );
};

export default Process;
