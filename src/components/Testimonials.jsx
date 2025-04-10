import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const StarRating = () => (
  <div className="flex gap-1 mt-4">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
  </div>
);

const Testimonials = () => {
  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      className="mt-30 text-dark-brown"
    >
      <motion.div variants={fadeInUp()}>
        <h2 className="text-5xl font-montserrat text-medium-brown font-medium mb-6">
          <span className="text-dark-brown">What Our</span> Clients Say?
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Testimonial 1 */}
        <motion.div 
          variants={fadeInUp(0.2)} 
          className="bg-soft-white text-dark-brown border-3 border-gold px-8 py-10 rounded-2xl shadow-[0_4px_20px_rgba(234,216,195,0.5)]"
        >
          <FaQuoteLeft className="text-warm-beige text-3xl mb-6" />
          <motion.p variants={fadeInUp(0.4)} className="text-lg font-medium italic py-4">
            "I had a great experience with Make My Ghar. I needed a quotation for a 3BHK in Baner — Shriyaa helped us finalize the design, source materials, and complete the project on time. Very smooth process."
          </motion.p>
          <motion.p variants={fadeInUp(0.6)} className="mt-4 font-semibold text-dark-brown">
            — Ankit Verma
          </motion.p>
          <StarRating />
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div 
          variants={fadeInUp(0.4)} 
          className="bg-soft-white text-dark-brown border-3 border-gold px-8 py-10 rounded-2xl shadow-[0_4px_20px_rgba(234,216,195,0.5)]"
        >
          <FaQuoteLeft className="text-warm-beige text-3xl mb-6" />
          <motion.p variants={fadeInUp(0.6)} className="text-lg  font-medium italic py-4">
            "We contacted Make My Ghar for a kids' room and modular kitchen revamp in Wakad. They really listened to our needs and came up with a smart, functional plan. Very happy with the result!"
          </motion.p>
          <motion.p variants={fadeInUp(0.8)} className="mt-4 font-semibold text-dark-brown">
            — Rohan Mehta
          </motion.p>
          <StarRating />
        </motion.div>

        {/* Testimonial 3 */}
        <motion.div 
          variants={fadeInUp(0.6)} 
          className="bg-soft-white text-dark-brown border-3 border-gold px-8 py-10 rounded-2xl shadow-[0_4px_20px_rgba(234,216,195,0.5)]"
        >
          <FaQuoteLeft className="text-warm-beige  text-3xl mb-6" />
          <motion.p variants={fadeInUp(0.8)} className="text-lg italic font-medium py-4">
            "From the first call to final handover, it was a seamless experience. We got our new 2BHK in Kothrud done beautifully—modern and cozy. They respected our timeline and budget."
          </motion.p>
          <motion.p variants={fadeInUp(1)} className="mt-4 font-semibold text-dark-brown">
            — Priya Sharma
          </motion.p>
          <StarRating />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
