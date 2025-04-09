import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does 3 bhk interior design cost in Pune?",
    answer:
      "The cost for 3 BHK interior design in Pune typically ranges from ₹15 lakh to ₹25 lakh depending on design style, materials, and furniture. Premium interiors with modular kitchen, wardrobes, and false ceiling may cost upwards of ₹18–25 lakh.",
  },
  {
    question: "What is a good budget for interior design?",
    answer:
      "A good budget for quality interior design in Pune is between ₹10–₹18 lakh for a 2 or 3 BHK. This allows for designer finishes, premium materials, modular furniture, and custom elements for a modern home.",
  },
  {
    question: "What is the interior cost of 4 BHK in Pune?",
    answer:
      "Interior design for a 4 BHK in Pune generally costs ₹18–25 lakh or more, depending on style, furnishings, and space customization. Luxury homes may go even higher with imported materials and bespoke furniture.",
  },
  {
    question: "Does interior design include furniture?",
    answer:
      "Yes, premium interior design packages include modular and custom furniture such as wardrobes, beds, sofas, dining sets, and more — tailored to your home's layout and design theme.",
  },
  {
    question: "Is 10 lakh enough for interior design?",
    answer:
      "Yes, ₹10 lakh is a good budget for a 2 or 3 BHK in Pune. It covers premium finishes, modern modular furniture, decorative lighting, and space planning for a stylish, functional home.",
  },
  {
    question: "Should you hire an interior design company in Pune?",
    answer:
      "Absolutely. Hiring an interior design company in Pune helps bring your vision to life with expert planning and efficient execution. Make My Ghar ensures a hassle-free experience while saving you time, money, and costly mistakes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="mx-auto md:w-4/5 rounded-2xl p-2 bg-gradient-to-bl from-medium-brown via-warm-beige to-gold shadow-lg mt-30 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/mesh-189.png')" }}
    >
      <div className=" bg-soft-white rounded-2xl px-10 py-15">
        <h2 className="text-5xl font-medium text-dark-brown mb-16">
          Frequently Asked <span className="text-gold">Questions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-medium-brown/20 rounded-lg pb-10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-md text-dark-brown">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gold" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-medium-brown mt-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
