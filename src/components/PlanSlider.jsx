import { motion } from "framer-motion";

const plans = Array.from({ length: 8 }, (_, i) => `/assets/plan (${i + 1}).webp`);

const PlanSlider = () => {
  return (
    <div className="overflow-hidden w-full py-10 bg-soft-white">
      <motion.div
        className="flex space-x-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate image set to enable seamless looping */}
        {[...plans, ...plans].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Plan ${index + 1}`}
            className="h-80 w-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PlanSlider;
