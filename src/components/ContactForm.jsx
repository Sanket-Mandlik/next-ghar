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


  const [isDateFocused, setIsDateFocused] = useState(false);


  
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
    <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-10">
      {/* Name and Contact Number */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
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

      {/* Property Type and Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
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
          value={formData.area}
          onChange={handleChange}
          className="w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
          required
        >
          <option value="" disabled>
            Select Property Type
          </option>
          <option value="2 bhk">2 Bhk</option>
          <option value="3 bhk">3 Bhk</option>
          <option value="4 bhk+">4 Bhk+</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>
       

      {/* Type of Interior */}
      <select
        id="interiorType"
        name="interiorType"
        value={formData.interiorType}
        onChange={handleChange}
        className="w-full p-2 lg:p-3 border-b-2 border-gold focus:outline-none placeholder-black"
        required
      >
        <option value="" disabled>
          Select Interior Budget
        </option>
        <option value="premium"> Between ₹10 L - 15 Lakhs</option>
        <option value="luxury">Between ₹15 L - 18 Lakhs</option>
        <option value="luxury">Above ₹18 Lakhs  </option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="lg:w-1/3  px-4 lg:px-6 bg-soft-white shadow-xl shadow-warm-beige/50 bg-gradient-to-br from-gold via-dark-brown to-dark-brown text-soft-white py-2 lg:py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
      >
        Get Free Consultation
      </button>

      {/* Response Message */}
      {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;