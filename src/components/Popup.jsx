import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    location: "",
    startDate: "",
  });

  const [isDateFocused, setIsDateFocused] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    setRotation((prev) => prev + 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage(data.message);
      if (response.ok) {
        setFormData({ name: "", number: "", location: "", startDate: "" });
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <AnimatePresence>
      <div key="popup">
        <motion.div
          className="fixed inset-0 z-50 flex justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Backdrop Blur Layer */}
          <motion.div
            className="absolute inset-0 backdrop-blur-md justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
  
          {/* Sliding Panel */}
          <motion.div
            className="relative z-10 w-full lg:w-3/4 h-full lg:p-10 lg:gap-10 flex flex-col lg:flex-row bg-soft-white justify-center items-center shadow-xl overflow-y-auto"
            style={{ left: 0 }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            {/* Close button and content here */}
            <motion.button
    className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full border-4 border-gold text-dark-brown text-3xl font-bold hover:text-medium-brown transition-colors z-50"
    onClick={onClose}
    whileHover={{ rotate: 90 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    &times;
  </motion.button>

            {/* Your existing left and right sections */}
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex-row items-center p-4 justify-center text-white  relative">
            <div className="mb-8">
                <h2 className="text-5xl lg:text-6xl lg:px-6 pt-3 lg:pt-8 text-start font-medium mb-4">
                  <span className="text-dark-brown">Contact</span>{" "}
                  <span className="text-medium-brown">Us</span>
                </h2>
                <p className="hidden lg:block text-lg font-medium px-6 leading-relaxed bg-gradient-to-r from-dark-brown to-gold bg-clip-text text-transparent">
                  Reach out to us for any queries or book a free consultation.
                </p>
              </div>

              <div
                className="px-8 py-10 shadow-lg shadow-warm-beige/50 rounded-2xl bg-gradient-to-br from-warm-beige/70 to-medium-brown/70"
                style={{
                  backgroundImage: "url('/assets/mesh-626.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hidden lg:flex items-start gap-4 mb-6">
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

                <div className="flex items-center gap-4 mb-4 lg:mb-8">
                  <FaPhoneAlt className="text-xl flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-lg font-medium bg-gradient-to-r from-soft-white to-warm-beige bg-clip-text text-transparent hover:text-soft-white transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex items-center gap-4 lg:mb-10">
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

                <div className="hidden lg:flex items-center justify-end gap-5">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-md text-white hover:text-soft-white transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-md text-white hover:text-soft-white transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-md text-white hover:text-soft-white transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-1/2 bg-soft-white px-6 py-4 mb-2 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none relative flex flex-col justify-center  ">
              <h2 className="text-2xl text-start pb-6 lg:pb-0 lg:text-3xl mt-3 lg:mt-8 font-semibold text-dark-brown lg:text-left">
                Know the cost of making interiors for your <span className="text-medium-brown">house</span>
              </h2>
              <p className="hidden lg:block text-md pb-6 lg:pb-12 mt-1 lg:mt-2 font-medium text-black text-start lg:text-left">
                Get a free consultation & estimate <span className="text-gray-400">for your project</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                    placeholder="Enter Your Name"
                    required
                  />
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                    placeholder="Enter Your Contact No."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                <div className="relative w-full">
  {/* Fake Placeholder */}
  {!formData.startDate && !isDateFocused && (
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black pointer-events-none transition-opacity duration-200">
      Select start date
    </span>
  )}

  <input
    type="date"
    id="startDate"
    name="startDate"
    value={formData.startDate}
    onChange={handleChange}
    onFocus={() => setIsDateFocused(true)}
    onBlur={() => setIsDateFocused(false)}
    className={`w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none bg-transparent ${
      formData.startDate || isDateFocused ? "text-black" : "text-transparent"
    }`}
    required
  />
</div>



                  <select
                    id="area"
                    name="area"
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                    required
                  >
                    <option value="" disabled selected>
                      Select Property Type 
                    </option>
                    <option value="500">2 Bhk</option>
                    <option value="1000">3 Bhk</option>
                    <option value="1000+">4 Bhk+</option>
                    <option value="1000+">Villa</option>
                    <option value="1000+">Commercial</option>
                  </select>
                </div>

                <select
                  id="interiorType"
                  name="interiorType"
                  onChange={handleChange}
                  className="w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
                  required
                >
                  <option value="" disabled selected>
                    Select Interior Budget
                  </option>
                  <option value="budget">Between ₹10 L - 15 Lakhs</option>
                  <option value="premium">Between ₹15 L - 18 Lakhs</option>
                  <option value="luxury">Above ₹18 Lakhs</option>
                </select>

                <button
                  type="submit"
                  className="w-1/2 px-4 lg:px-6 bg-soft-white shadow-xl shadow-warm-beige/50 bg-gradient-to-br from-gold via-dark-brown to-dark-brown text-soft-white py-2 lg:py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
                >
                  Submit
                </button>
                </form>

                {responseMessage && (
                  <p className="mt-4 text-center text-lg font-medium text-dark-brown">
                    {responseMessage}
                  </p>
                )}
              </div> {/* End of Right Section - Form */}
            </motion.div> {/* End of Sliding Panel */}
          </motion.div> {/* End of Main Flex Container */}
          </div>
      </AnimatePresence>
    );
  };

export default Popup;
