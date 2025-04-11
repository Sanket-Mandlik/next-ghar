import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    "question": "How much does 3 bhk interior design cost in Pune?",
    "answer": "The cost of 3 BHK interior design in Pune generally ranges from ₹15 lakh to ₹25 lakh. This depends on the design theme, materials used, and customization. If you're looking for the best interiors in Pune, many top designers offer personalized solutions that include modular kitchens, wardrobes, false ceilings, and smart storage — often costing upwards of ₹18–25 lakh."
  },
  {
    "question": "What is a good budget for interior design?",
    "answer": "A good budget for quality interior design in Pune ranges between ₹10–₹18 lakh for a 2 or 3 BHK home. This budget typically covers designer finishes, premium materials, modular furniture, and customized solutions. Many architects in Pune offer interior design packages within this range, ensuring both aesthetics and functionality tailored to your lifestyle."
  },
  {
    "question": "What is the interior cost of 4 BHK in Pune?",
    "answer": "The interiors costing for a 4 BHK in Pune typically ranges from ₹18–25 lakh or more, depending on the design style, materials, and customization. For those seeking premium design, interiors costing may go higher due to features like imported materials, bespoke furniture, modular setups, and designer lighting for a fully personalized experience."
  },
  {
    "question": "Does interior design include furniture?",
    "answer": "Yes, a professional interior designer typically includes furniture as part of the overall design package. This often involves modular and custom furniture such as beds, wardrobes, sofas, and dining sets. A skilled interior designer ensures that all furniture is planned, selected, and installed to perfectly complement your home's layout and style."
  },
  {
    "question": "Is 10 lakh enough for interior design?",
    "answer": "Yes, ₹10 lakh is a reasonable budget for interior design of a 2 or 3 BHK in Pune. It covers modern modular furniture, lighting, premium finishes, and efficient design. With the right team, you can still achieve some of the best interiors in Pune within this budget through smart planning and cost-effective materials."
  },
  {
    "question": "Should you hire an interior design company in Pune?",
    "answer": "Absolutely. Hiring a trusted interior design company is the key to achieving the best interiors in Pune. Professionals bring design expertise, space optimization, and execution quality. Companies like Make My Ghar ensure a seamless process with attention to detail, timely delivery, and value for money."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
    className="lg:mx-auto mx-4 lg:w-4/5 rounded-2xl p-0 bg-gradient-to-bl from-medium-brown via-warm-beige to-gold  mt-30 bg-none  bg-cover bg-center"
    >
    
      <div className="bg-soft-white rounded-2xl px-6 lg:px-10 py-10 lg:pb-16">
        <h2 className="text-4xl lg:text-5xl font-medium text-dark-brown mb-12 lg:mb-20">
          Frequently Asked <span className="text-gold">Questions</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b-2 border-medium-brown/20 rounded-lg pb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="font-medium text-lg text-dark-brown group-hover:text-gold transition-colors">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
