import { FaWhatsapp, FaPhone, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:w-4/5 lg:mx-auto px-4 mx-0 lg:px-0 bg-gradient-to-br from-medium-brown/90 via-medium-brown/90 to-warm-beige text-soft-white mt-20 pt-10 pb-4 lg:rounded-t-2xl shadow-2xl shadow-warm-beige ">
      <div className="px-4 lg:px-15  py-5 lg:py-10 mx-auto grid grid-cols-1 lg:grid-cols-8 gap-10">
        
        {/* Logo & About */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl mt-15 font-medium">Make My Ghar</h2>
          <p className="mt-2 text-md">Transforming spaces with elegance and precision.</p>
        </div>

        {/* Grouped Sections */}
        <div className="lg:col-span-5 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 text-center lg:text-left">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 lg:space-y-3 text-sm">
              <li><a href="#" className="hover:text-warm-beige transition">About Us</a></li>
              <li><a href="#" className="hover:text-warm-beige transition">Our Services</a></li>
              <li><a href="#" className="hover:text-warm-beige transition">Projects</a></li>
              <li><a href="#" className="hover:text-warm-beige transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-md mt-4">123 Summer Street, Design Avenue, Mumbai - 400302, India</p>
            <p className="text-sm mt-1 pt-2 mb-4">Email: contact@makemyghar.com</p>

            {/* Call Button & Social Icons in One Row */}
            <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 px-4 py-2 bg-soft-white text-dark-brown rounded-lg hover:bg-medium-brown hover:text-pure-white transition"
              >
              Call Us  <FaPhone /> 
              </a>
              <div className="flex gap-4 mt-2 text-2xl">
                <a href="https://wa.me/919876543210" className="hover:text-warm-beige transition"><FaWhatsapp /></a>
                <a href="#" className="hover:text-warm-beige transition"><FaInstagram /></a>
                <a href="#" className="hover:text-warm-beige transition"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm opacity-80 mt-5 pt-5 w-full lg:w-2/5 mx-auto border-t border-soft-white">
        © {new Date().getFullYear()} Make My Ghar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
