import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Testimonials = () => {
  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      className="lg:w-4/5 lg:mx-auto mx-3 mt-30 text-dark-brown"
    >
      <motion.div variants={fadeInUp()}>
        <h2 className="text-5xl font-montserrat text-medium-brown font-medium mb-6">
          <span className="text-dark-brown">What Our</span> Clients Say?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Testimonial 1 */}
        <motion.div 
          variants={fadeInUp(0.2)} 
          className="bg-gradient-to-bl from-warm-beige via-medium-brown to-dark-brown text-pure-white px-6 py-10 rounded-2xl shadow-lg"
        >
          <FaQuoteLeft className="text-warm-beige text-3xl mb-6" />
          <motion.p variants={fadeInUp(0.4)} className="text-lg italic py-4">
            "Make My Ghar made our dream home a reality! The design and execution were flawless."
          </motion.p>
          <motion.p variants={fadeInUp(0.6)} className="mt-4 font-semibold text-warm-beige">
            — Ankit Verma
          </motion.p>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div 
          variants={fadeInUp(0.4)} 
          className="bg-gradient-to-tl from-warm-beige/10 via-warm-beige/30 to-medium-brown/90 text-dark-brown px-6 py-10 rounded-2xl shadow-lg"
        >
          <FaQuoteLeft className="text-dark-brown text-3xl mb-6" />
          <motion.p variants={fadeInUp(0.6)} className="text-lg italic py-4">
            "Make My Ghar completely transformed our apartment! The quality exceeded our expectations."
          </motion.p>
          <motion.p variants={fadeInUp(0.8)} className="mt-4 font-semibold text-dark-brown">
            — Rohan Mehta
          </motion.p>
        </motion.div>

        {/* Testimonial 3 */}
        <motion.div 
          variants={fadeInUp(0.6)} 
          className="bg-gradient-to-tr from-medium-brown via-dark-brown to-dark-brown text-pure-white px-6 py-10 rounded-2xl shadow-lg"
        >
          <FaQuoteLeft className="text-beige text-3xl mb-6" />
          <motion.p variants={fadeInUp(0.8)} className="text-lg italic py-4">
            "A seamless experience from start to finish. Their team truly understands luxury and comfort."
          </motion.p>
          <motion.p variants={fadeInUp(1)} className="mt-4 font-semibold text-beige">
            — Priya Sharma
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
