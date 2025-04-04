import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const TopSection = () => {
  return (
    <div className="w-full h-8 overflow-hidden"> {/* Parent container with fixed height */}
      <div className="bg-medium-brown z-10 text-white w-full h-7 flex justify-evenly items-center animate-slideDown">
        <a href="https://instagram.com/your-handle" className="flex items-center space-x-2 hover:text-golden-warm transition">
          <FaInstagram className="text-xl" />
          <span>@yourhandle</span>
        </a>

        <a href="https://wa.me/your-whatsapp-number" className="flex items-center space-x-2 hover:text-golden-warm transition">
          <FaWhatsapp className="text-xl" />
          <span>WhatsApp Us</span>
        </a>

        <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-golden-warm transition">
          <FaPhoneAlt className="text-xl" />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
};

export default TopSection;
