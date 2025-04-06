import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    propertyType: "",
    area: "",
    interiorType: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({
          name: "",
          number: "",
          propertyType: "",
          area: "",
          interiorType: "",
        });
      } else {
        setResponseMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResponseMessage("Failed to submit the form. Please try again.");
    }
  };

  return (
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
          value={formData.propertyType}
          onChange={handleChange}
          className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
          required
        >
          <option value="" disabled>
            Property Type
          </option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
        </select>
        <select
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
          required
        >
          <option value="" disabled>
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
        value={formData.interiorType}
        onChange={handleChange}
        className="w-full p-2 md:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
        required
      >
        <option value="" disabled>
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
        Get Free Consultation
      </button>

      {/* Response Message */}
      {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;