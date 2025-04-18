import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";

const Process = () => {
  const [counter, setCounter] = useState(0);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const timeline = ["Day 1", "Day 7", "1 to 2 Weeks", "4th Week", "2 to 3 Months", "Day 45"];

  const highlightPayment = (text) =>
    text.includes("payment") ? (
      <>
        {text.split("payment")[0]}
        <span className="bg-gradient-to-br font-medium to-warm-beige from-soft-white text-transparent bg-clip-text">payment</span>
        {text.split("payment")[1]}
      </>
    ) : (
      text
    );

  return (
    <div
      className="w-full rounded-2xl shadow-xl shadow-warm-beige/50 p-6 lg:p-8 flex flex-col gap-8 relative"
      style={{
        backgroundImage: "url('/assets/mesh-994.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Bar */}
      <div className="w-full flex justify-between items-start z-10">
        <div className="flex flex-col items-start space-y-1">
          <p className="text-md mb-3 text-gold/80">
            What is the process for doing home interior?
          </p>
          <h1 className="text-6xl  lg:text-6xl lg:py-0 pt-20 pb-10 font-normal bg-gradient-to-r from-white via-warm-beige to-gold text-transparent bg-clip-text">
            Process - Perfected
          </h1>
        </div>

        <div className="flex-col hidden lg:block items-end space-y-6 mt-8">
          <div className="flex space-x-4">
          <a
  href="https://www.instagram.com/make_my_ghar.co.in/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Make My Ghar on Instagram"
  title="Instagram"
>
  <FaInstagram className="text-soft-white text-2xl" />
</a>

<a
  href="https://www.facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Make My Ghar on Facebook"
  title="Facebook"
>
  <FaFacebook className="text-soft-white text-2xl" />
</a>

          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 z-10 mt-5 lg:px-2">
        {[
          {
            number: 1,
            name: "Initiation",
            description: [
              "Initial 5% payment",
              "Site measurements and brief capture",
            ],
          },
          {
            number: 2,
            name: "Discussion",
            description: [
              "Next 5% payment",
              "Design concepts & floor plan discussion (PPT)",
        
            ],
          },
          {
            number: 3,
            name: "Quote",
            description: [
        
              "3D renders and visual options shared",
              "Material preferences for walls/furniture",
              "Quote revision (if needed)",
            ],
          },
          {
            number: 4,
            name: "Finalization",
            description: [
              "Design confirmation",
              "40% payment towards execution",
            ],
          },
          {
            number: 5,
            name: "Execution",
            description: [
              "Vendor assignment (15 Days)",
              "Detailed site meeting with final 3Ds and working drawings",
            ],
          },
          {
            number: 6,
            name: "Handover",
            description: [
              "Final 50% payment before handover",
              "Project completion and handover",
            ],
          },
        ].map((process, index, array) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-start relative space-y-3"
          >
            {/* Step Number */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 border-2 border-warm-beige text-soft-white flex items-center justify-center rounded-full font-bold text-lg"
            >
              {process.number}
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl lg:text-xl font-medium bg-gradient-to-r from-soft-white to-warm-beige text-transparent bg-clip-text">
              Step {process.number}: {process.name}
            </h3>

            {/* Description List */}
            <ul className="space-y-1 text-md lg:text-sm text-warm-beige font-normal list-none">
              {process.description.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-warm-beige">-</span>
                  <span>{highlightPayment(point)}</span>
                </li>
              ))}
            </ul>

            {/* Arrow and Timeline on Top Right */}
            {index < array.length - 1 && (
              <motion.div
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-2 top-2 flex items-center gap-2"
              >
                <span className="text-medium-brown text-sm font-normal">
                  {timeline[index]}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
