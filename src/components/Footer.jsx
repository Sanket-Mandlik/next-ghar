import { FaWhatsapp, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-0 bg-gradient-to-br from-medium-brown/90 via-medium-brown/90 to-warm-beige text-soft-white mt-12 pt-6 pb-4 shadow-2xl shadow-warm-beige">
      <div className="px-6 lg:px-20 py-6 lg:py-10 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
        
        {/* Left Section (40%) - Logo & About */}
        <div className="lg:col-span-4 text-center lg:text-left">
          <Image 
            src="/assets/mmglogo.webp" 
            alt="Make My Ghar Logo" 
            width={180}
            height={80}
            className="h-20 w-auto mx-auto lg:mx-0" 
          />
          <h2 className="text-4xl text-dark-brown  mt-2 font-medium tracking-tight">
            Make My Ghar
          </h2>
          <p className="mt-3 text-light-gray font-medium text-md leading-relaxed max-w-md">
            Transforming spaces with elegance and precision. Specialized in premium interior design solutions in Pune.
          </p>
        </div>

        {/* Middle Section (20%) - Quick Links */}
        <div className="lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold mb-4 text-dark-brown">Quick Links</h3>
          <ul className="space-y-3 text-md font-medium">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-gold transition-colors">Projects Gallery</Link></li>
            <li><Link href="/contactus" className="hover:text-gold transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        {/* Right Section (40%) - Contact & Socials */}
        <div className="lg:col-span-4 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-dark-brown">Get In Touch</h3>
          <p className="text-lg leading-relaxed mb-3">
            72/32 Manas Bungalow, Gulmohar Path,<br />
            Off Law College Rd., Pune 411004
          </p>
          <p className="text-md font-medium mb-6">Email: contact@makemyghar.com</p>

          <div className="flex flex-col lg:flex-row items-center gap-6">
            <a
              href="tel:+918329547818"
              className="flex items-center gap-3 px-6 py-2.5 bg-soft-white text-dark-brown rounded-2xl font-bold hover:bg-gold hover:text-soft-white transition-all shadow-lg"
            >
              Call Us <FaPhone />
            </a>

            <div className="flex gap-5 items-center text-2xl">
              <a href="https://wa.me/918329547818" className="hover:text-gold transition-transform hover:scale-110"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/makemyghar.co/" className="hover:text-gold transition-transform hover:scale-110"><FaInstagram /></a>
              <a href="https://www.facebook.com/makemyghar127" className="hover:text-gold transition-transform hover:scale-110"><FaFacebook /></a>
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
