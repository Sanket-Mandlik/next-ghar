import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    location: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get in touch with you soon.");
    setFormData({ name: "", number: "", location: "" });
    onClose(); // Close the popup after submission
  };

  return (
    <AnimatePresence>
            <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-soft-white rounded-3xl p-2 shadow-lg w-9/10 md:w-9/10 lg:w-4/5 xl:w-2/3 overflow-y-auto max-h-screen"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Popup content */}
  
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-dark-brown text-2xl font-bold hover:text-medium-brown transition-all z-10"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-white p-4 mb-2 rounded-3xl md:rounded-3xl relative">
              {/* Top Section - Heading and Description */}
              <div className="mb-8">
                             <h2 className="text-5xl md:text-6xl md:px-6 pt-3 md:pt-8 text-start font-medium mb-4">
                  <span className="text-dark-brown">Contact</span>{" "}
                  <span className="text-medium-brown">Us</span>
                </h2>
                              <p className="hidden md:block text-lg font-medium px-6 leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent">
                  Reach out to us for any queries or to book a free consultation.
                </p>
              </div>

              {/* Bottom Section - Address, Contact Details, and Social Icons */}
              <div
                className="px-8 py-10  shadow-lg shadow-warm-beige/50 rounded-2xl bg-gradient-to-br from-warm-beige/70 to-medium-brown/70"
                style={{
                  backgroundImage: "url('/assets/mesh-626.png')", // Add background image here
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Address */}
                               <div className="hidden md:flex items-start gap-4 mb-6">
                  <FaMapMarkerAlt className="text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg leading-relaxed bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent">
                      123 Summer Street, Design Avenue, Mumbai-400231, India
                    </p>
                    <a
                      href="https://www.google.com/maps?q=123+Street+Name,City,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white border-b border-white pb-1 hover:text-soft-white transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 mb-4 md:mb-8">
                  <FaPhoneAlt className="text-xl flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-lg font-medium bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent hover:text-soft-white transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 mb-10">
                  <FaWhatsapp className="text-2xl flex-shrink-0" />
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent hover:text-soft-white transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-end gap-5">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-white hover:text-soft-white transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-white hover:text-soft-white transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-white hover:text-soft-white transition-colors"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

{/* Right Section - Form */}
            <div             className="w-full md:w-1/2 bg-soft-white px-6 py-4 mb-2 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none relative flex flex-col justify-between">
                                               <h2 className="text-2xl text-start pb-6 md:pb-0 md:text-3xl mt-3 md:mt-8 font-semibold text-dark-brown  md:text-left">
                            Know the cost of making interiors for your <span className="text-medium-brown">house</span>
                          </h2>
                                                    <p className="hidden md:block text-md pb-6 md:pb-12 mt-1 md:mt-2 font-medium text-black text-center md:text-left">
                            Get a free consultation & estimate <span className="text-gray-400">for your project</span>
                          </p>
                          
                          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                            {/* Name and Contact Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                                placeholder="Enter Your Name"
                                required
                              />
                              <input
                                type="text"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                                placeholder="Enter Your Contact No."
                                required
                              />
                            </div>
                          
                            {/* Property Type and Area */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                              <select
                                id="propertyType"
                                name="propertyType"
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                                required
                              >
                                <option value="" disabled selected>
                                  Property Type
                                </option>
                                <option value="commercial">Commercial</option>
                                <option value="residential">Residential</option>
                              </select>
                              <select
                                id="area"
                                name="area"
                                onChange={handleChange}
                                className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                                required
                              >
                                <option value="" disabled selected>
                                  Select Area (Sq.Ft.)
                                </option>
                                <option value="500">Up to 500</option>
                                <option value="1000">500 - 1000</option>
                                <option value="1000+">1000+</option>
                              </select>
                            </div>
                          
                            {/* Type of Interior */}
                            <select
                              id="interiorType"
                              name="interiorType"
                              onChange={handleChange}
                              className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                              required
                            >
                              <option value="" disabled selected>
                                Select Interior Type
                              </option>
                              <option value="premium">Classic - Upto ₹10 Lakhs</option>
        <option value="luxury">Premium - Between ₹10L-30L</option>
        <option value="luxury">Luxury - ₹30 Lakhs + </option>
                            </select>
                          
                            {/* Submit Button */}
                            <button
                              type="submit"
                              className="w-1/2 px-4 md:px-6 bg-soft-white shadow-xl shadow-warm-beige/50 bg-gradient-to-br from-gold via-dark-brown to-dark-brown text-soft-white py-2 md:py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
                            >
                              Submit
                            </button>
                          </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;