import { FaWhatsapp, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:w-4/5 lg:mx-auto px-4 mx-0 lg:px-0 bg-gradient-to-br from-medium-brown/90 via-medium-brown/90 to-warm-beige text-soft-white mt-20 pt-10 pb-4 lg:rounded-t-2xl  shadow-2xl shadow-warm-beige ">
      <div className="px-4 lg:px-15  py-5 lg:py-10 mx-auto grid grid-cols-1 lg:grid-cols-8 gap-6">

        {/* Logo & About */}
        <div className="text-center lg:text-left lg:col-span-3">
  <Image 
    src="/assets/mmglogo.webp" 
    alt="Make My Ghar Logo" 
    width={200}
    height={96}
    className="h-24 w-auto mx-auto lg:mx-0" 
  />
  <h2 className="text-4xl lg:text-5xl mt-2 font-medium lg:text-left">
    Make My Ghar
  </h2>
  <p className="mt-4 text-light-gray font-medium text-md lg:text-left leading-relaxed">
    Transforming spaces with elegance and precision.
  </p>
</div>

        {/* Grouped Sections */}
        <div className="lg:col-span-5 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 text-center lg:text-left">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 lg:space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors py-1 inline-block">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors py-1 inline-block">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition-colors py-1 inline-block">Projects</Link></li>
              <li><Link href="/contactus" className="hover:text-gold transition-colors py-1 inline-block">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-md mt-4">72/32 Manas Bungalow, Gulmohar Path, Off Law College Rd., Pune 411004</p>
            <p className="text-sm mt-1 pt-2 mb-4">Email: contact@makemyghar.com</p>

            {/* Call Button & Social Icons in One Row */}
            <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-6">
              {/* Call Us Link – already good, but adding aria-label for clarity */}
              <a
                href="tel:+918329547818"
                className="flex items-center gap-3 px-4 py-2 bg-soft-white text-dark-brown rounded-lg hover:bg-medium-brown hover:text-pure-white transition"
                aria-label="Call us at +91 8329547818"
                title="Call Us"
              >
                Call Us <FaPhone />
              </a>

              {/* Social Links with aria-labels */}
              <div className="flex gap-4 items-center text-2xl">
                <a
                  href="https://wa.me/918329547818"
                  className="hover:text-gold transition-colors p-2"
                  aria-label="Chat with us on WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/makemyghar.co/"
                  className="hover:text-gold transition-colors p-2"
                  aria-label="Visit Make My Ghar on Instagram"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm opacity-80  w-full lg:w-2/5 mx-auto ">
        © {new Date().getFullYear()} Make My Ghar. All Rights Reserved.
      </div>

      <div className="text-center text-sm opacity-80 mt-3 pt-3 w-full lg:w-2/5 mx-auto border-t border-soft-white">
        A Project By - <a href="https://www.antrixh.com/" className="hover:text-warm-beige text-white -700 transition pb-2" style={{textDecoration: 'underline'}}>Antrixh AI</a>
      </div>
    </footer>
  );
};

export default Footer;
