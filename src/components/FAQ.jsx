import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer interior designing, modular kitchens, custom renovations, and more—each project tailored to your needs.",
  },
  {
    id: 2,
    question: "How do I start a project?",
    answer:
      "Simply contact us via phone or our website, and we'll schedule a consultation to understand your vision.",
  },
  {
    id: 3,
    question: "What is your project turnaround time?",
    answer:
      "Turnaround times vary by project complexity, but we always strive to deliver quality work promptly.",
  },
  {
    id: 4,
    question: "Do you offer customization?",
    answer:
      "Yes, every design is custom-made to reflect your unique style and functional requirements.",
  },
  {
    id: 5,
    question: "How do you ensure quality?",
    answer:
      "We use top-tier materials and collaborate with experienced craftsmen to guarantee flawless execution.",
  },
  {
    id: 6,
    question: "Which areas do you serve?",
    answer:
      "We serve clients nationwide, offering both in-person and remote consultation services.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-4/5 mx-auto mt-20 bg-soft-white p-8 rounded-xl shadow-md">
      <h2 className="text-3xl md:text-4xl font-montserrat font-medium text-dark-brown mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow p-4 cursor-pointer"
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center bg-golden rounded-full text-white font-bold mr-4">
                {faq.id}
              </div>
              <h3 className="text-lg font-semibold text-dark-brown">
                {faq.question}
              </h3>
            </div>
            <AnimatePresence>
              {openFaq === faq.id && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-md text-medium-brown mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
