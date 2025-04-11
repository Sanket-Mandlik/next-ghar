import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const MotionLink = motion(Link);


const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: "easeOut" } },
});

const ContactUs = () => {
  return (
    <div
      className="lg:w-4/5 lg:mx-auto mx-4 mt-20 relative rounded-2xl shadow-md overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/mesh-198.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 lg:p-8 lg:px-20 lg:py-30">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Section - Heading */}
          <motion.div
            className="lg:w-1/2 py-10 p-6 lg:p-0 lg:py-0 text-left"
            variants={fadeInUp(0.2)}
          >
            <h2 className="text-5xl lg:text-5xl font-medium mt-15 lg:mt-0 bg-gradient-to-r from-gold via-warm-beige to-soft-white bg-clip-text text-transparent mb-4">Contact Us</h2>
            <p className="text-2xl lg:text-4xl font-montserrat font-medium bg-gradient-to-r from-soft-white via-warm-beige to-soft-white bg-clip-text text-transparent">
              Book A Free Consultation
            </p>

            
            <MotionLink
  href="/contactus"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 inline-block px-6 py-2.5 bg-gradient-to-b to-warm-beige from-soft-white text-dark-brown font-semibold rounded-lg hover:bg-medium-brown hover:text-gold transition-all"
>
  Contact Us Now
</MotionLink>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div
            className="lg:w-1/2 pb-15 lg:py-0 p-8 lg:p-0 b-y-6"
            variants={fadeInUp(0.4)}
          >
            {/* Address */}
            <div className="flex items-start mb-4 gap-3">
              <FaMapMarkerAlt className="text-white text-xl flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-lg bg-gradient-to-r from-warm-beige to-soft-white bg-clip-text text-transparent leading-relaxed">
                  123 Summer Street, Design Avenue, Mumbai-400231, India{" "}
                  <a
                    href="https://www.google.com/maps?q=123+Street+Name,City,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline text-sm font-medium text-soft-white border-b border-white pb-1 hover:text-warm-beige transition-colors"
                  >
                    Get Directions To Office
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white text-xl flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-lg font-medium bg-gradient-to-r from-warm-beige to-soft-white bg-clip-text text-transparent hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-white text-2xl flex-shrink-0" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium bg-gradient-to-r from-warm-beige to-soft-white bg-clip-text text-transparent hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;