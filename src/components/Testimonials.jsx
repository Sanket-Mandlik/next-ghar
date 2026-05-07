import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className={`text-lg ${i < rating ? "text-gold" : "text-gold/20"}`} />
      ))}
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ankit Verma",
      role: "3BHK Owner, Baner",
      text: "I had a great experience with Make My Ghar. I needed a quotation for a 3BHK in Baner — Shriyaa helped us finalize the design, source materials, and complete the project on time. Very smooth process.",
    },
    {
      name: "Rohan Mehta",
      role: "Wakad Resident",
      text: "We contacted Make My Ghar for a kids' room and modular kitchen revamp in Wakad. They really listened to our needs and came up with a smart, functional plan. Very happy with the result!",
    },
    {
      name: "Priya Sharma",
      role: "Kothrud Homeowner",
      text: "From the first call to final handover, it was a seamless experience. We got our new 2BHK in Kothrud done beautifully—modern and cozy. They respected our timeline and budget.",
    }
  ];

  return (
    <div className="mt-30 mb-20">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="w-full"
      >
        <motion.div variants={fadeInUp()} className="mb-12">
           <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/50"></span>
           </div>
          <h2 className="text-5xl font-montserrat text-medium-brown font-medium tracking-tight leading-tight">
            What Our <span className="font-serif italic text-dark-brown">Clients</span> Say?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp(0.1 * i)} 
              className="relative group"
            >
              <div className="h-full bg-white border border-warm-beige/20 p-8 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(168,124,95,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(168,124,95,0.2)] transition-all duration-500 flex flex-col">
                <div className="mb-6 flex justify-end">
                  <FaQuoteLeft className="text-gold/20 text-3xl group-hover:text-gold/40 transition-colors duration-500" />
                </div>
                
                <div className="flex-grow">
                  <p className="text-lg text-dark-brown/90 leading-relaxed italic mb-6 font-medium">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-warm-beige/10">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-dark-brown tracking-tight">{t.name}</h4>
                    <FaCheckCircle className="text-gold text-[10px]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-medium-brown font-medium uppercase tracking-wider">{t.role}</p>
                    <StarRating />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
