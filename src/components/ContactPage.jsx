import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTag } from "react-icons/fa";
import { motion, useInView } from "framer-motion"; // Import framer-motion and useInView
import { useRef } from "react"; // Import useRef for section references
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you! We will get in touch with you soon.");
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
    }
  };

  // Refs for sections
  const contactDetailsRef = useRef(null);
  const contactFormRef = useRef(null);

  // InView hooks for animations
  const isContactDetailsInView = useInView(contactDetailsRef, { once: true });
  const isContactFormInView = useInView(contactFormRef, { once: true });

  return (
    <div className="bg-soft-white lg:w-4/5 mx-auto min-h-screen">
      <div className="mx-auto px-4 lg:px-0 pt-60 2xl">
        {/* Contact Us Heading */}
        <motion.div
          className="text-center mb-30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-medium">
            <span className="text-dark-brown">Contact</span>{" "}
            <span className="text-medium-brown">Us</span>
          </h1>
          <h2 className="text-lg font-medium leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent mt-4">
            Reach out to Make My Ghar for any interior design queries.
          </h2>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          ref={contactDetailsRef}
          className="text-white p-4 mb-20 rounded-2xl bg-gradient-to-br from-warm-beige/70 to-medium-brown/70 shadow-lg shadow-warm-beige/50"
          style={{
            backgroundImage: "url('/assets/mesh-994.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isContactDetailsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            {/* Left Section - Contact Details */}
            <motion.div
              className="lg:w-1/2 flex flex-col p-4 lg:px-6 justify-center gap-2"
              initial={{ x: -100, opacity: 0 }}
              animate={isContactDetailsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl mt-6 lg:text-5xl font-medium mb-10">Get in Touch</h3>
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <FaMapMarkerAlt className="text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg leading-relaxed bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent">
                    72/32 Manas Bungalow, Gulmohar Path, Off Law College Rd., Pune 411004
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Manas+bunglow/@18.5115354,73.8269061,16.27z/data=!4m10!1m2!2m1!1smanas+bunglow!3m6!1s0x3bc2bf19794aaa1b:0xf6ba7af397580291!8m2!3d18.5111558!4d73.8281243!15sCg1tYW5hcyBidW5nbG93kgESYXBhcnRtZW50X2J1aWxkaW5n4AEA!16s%2Fg%2F11ryhfk9vn!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white border-b border-white pb-1 hover:text-soft-white transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-6">
                <FaPhoneAlt className="text-xl flex-shrink-0" />
                <a
                  href="tel:+9183295478180"
                  className="text-lg font-medium bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent hover:text-soft-white transition-colors"
                >
                  +91 8329547818
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 mb-6 lg:mb-0">
                <FaWhatsapp className="text-2xl flex-shrink-0" />
                <a
                  href="https://wa.me/9183295478180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent hover:text-soft-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 border-2 border-warm-beige/50 rounded-full px-6 py-2.5 mt-6 mb-4 lg:mt-0 lg:mb-0 self-start lg:self-end max-w-max">
                <a
                  href="https://www.instagram.com/make_my_ghar.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-white hover:text-soft-white transition-colors"
                >
                  <FaInstagram className="text-2xl " />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-white hover:text-soft-white transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-white hover:text-soft-white transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </motion.div>

            {/* Right Section - Map */}
            <motion.div
              className="lg:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              animate={isContactDetailsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.707994917537!2d73.8269061!3d18.5111558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf19794aaa1b%3A0xf6ba7af397580291!2sManas%20Bungalow%2C%20Gulmohar%20Path%2C%20Off%20Law%20College%20Rd.%2C%20Pune%20411004!5e0!3m2!1sen!2sin!4v1614311234567!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          ref={contactFormRef}
          className="bg-soft-white px-4 lg:px-6 py-8 mt-30 mb-10 rounded-2xl shadow-warm-beige/50 shadow-lg"
          style={{
            backgroundImage: "url('/assets/mesh-488.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isContactFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Left Section - Offers Text */}
            <motion.div
              className="lg:w-1/3 text-white px-4 py-6"
              initial={{ x: -100, opacity: 0 }}
              animate={isContactFormInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl lg:text-4xl text-dark-brown mt-2 font-medium mb-8">Special Offers</h3>
              <div className="flex flex-col gap-6">
                <p className="text-md mb-8 font-normal text-gold leading-relaxed">
                  Get exclusive discounts and offers on our interior design services. Transform your house into a dream home today!
                </p>

                {/* Offer 1 */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-10 h-10 flex items-center px-3 justify-center rounded-full bg-gold"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    <FaTag className="text-soft-white text-lg" />
                  </motion.div>
                  <p className="text-md font-medium text-dark-brown leading-relaxed">
                    Get 20% off on your first interior design project!
                  </p>
                </div>

                {/* Offer 2 */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-10 h-10 flex items-center px-3 justify-center rounded-full bg-gold"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    <FaTag className="text-soft-white text-lg" />
                  </motion.div>
                  <p className="text-md font-medium text-dark-brown leading-relaxed">
                    Free consultation for all bookings this month!
                  </p>
                </div>

                {/* Offer 3 */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-10 h-10 flex items-center px-3 justify-center rounded-full bg-gold"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    <FaTag className="text-soft-white text-lg" />
                  </motion.div>
                  <p className="text-md font-medium text-dark-brown leading-relaxed">
                    Exclusive discounts for returning customers!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Contact Form */}
            <motion.div
              className="lg:w-2/3 bg-white px-6 py-8 rounded-2xl"
              initial={{ x: 100, opacity: 0 }}
              animate={isContactFormInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-dark-brown mb-6">
                Know the cost of making interiors for your{" "}
                <span className="text-medium-brown">house</span>
              </h3>
              <p className="hidden lg:block text-md font-medium text-black mb-6">
                Get a free consultation & estimate{" "}
                <span className="text-gray-400">for your project</span>
              </p>
              <ContactForm onSubmit={handleFormSubmit} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;