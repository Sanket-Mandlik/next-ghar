import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const MotionLink = motion(Link);


const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: "easeOut" } },
});

const ContactUs = () => {
  return (
    <div
      className="lg:w-4/5 lg:mx-auto mx-4 mt-24 relative rounded-4xl shadow-xl shadow-warm-beige/50 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/mesh-198.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 lg:p-8 lg:px-16  lg:py-24">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Section - Heading */}
          <motion.div
            className="lg:w-1/2 p-6 pb-12 pt-12 lg:pt-0 lg:pb-0 lg:p-0 l  text-left"
            variants={fadeInUp(0.2)}
          >
            <h2 className="text-5xl font-medium  bg-gradient-to-r from-soft-white via-warm-beige to-warm-beige bg-clip-text text-transparent mb-3">Contact Us</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gold mt-2 mb-4 rounded-full"
            />
            <p className="text-2xl lg:text-3xl font-montserrat font-medium bg-gradient-to-r from-warm-beige via-warm-beige to-soft-white bg-clip-text text-transparent">
              Book A Free Design Consultation
            </p>


            <MotionLink
              href="/contactus"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block px-6 py-2.5 bg-gradient-to-b to-warm-beige from-soft-white text-dark-brown font-semibold rounded-2xl hover:bg-medium-brown hover:text-gold transition-all"
            >
              Contact Us Now
            </MotionLink>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div
            className="lg:w-1/2 pb-13 lg:py-0 p-8 lg:p-0 "
            variants={fadeInUp(0.4)}
          >
            {/* Address */}
            <div className="flex items-start mb-8 gap-3">
              <FaMapMarkerAlt className="text-white text-xl flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-lg bg-gradient-to-r from-warm-beige to-soft-white bg-clip-text text-transparent leading-relaxed">
                  72/32 Manas Bungalow, Gulmohar Path, Off Law College Rd., Pune 411004{" "}
                  <br />
                  <a
                    href="https://www.google.com/maps/place/Manas+bunglow/@18.5115354,73.8269061,16z/data=!4m10!1m2!2m1!1smanas+bunglow!3m6!1s0x3bc2bf19794aaa1b:0xf6ba7af397580291!8m2!3d18.5111558!4d73.8281243!15sCg1tYW5hcyBidW5nbG93kgESYXBhcnRtZW50X2J1aWxkaW5n4AEA!16s%2Fg%2F11ryhfk9vn!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
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
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white text-xl flex-shrink-0" />
                <a
                  href="tel:+918329547818"
                  className="text-lg font-medium bg-gradient-to-r to-warm-beige from-soft-white bg-clip-text text-transparent hover:text-white transition-colors"
                >
                  +91 8329547818
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-white text-2xl flex-shrink-0" />
                <a
                  href="https://wa.me/918329547818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium bg-gradient-to-r to-warm-beige from-soft-white bg-clip-text text-transparent hover:text-white transition-colors"
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