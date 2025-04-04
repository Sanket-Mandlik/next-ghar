import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative mb-6 md:mt-6 flex z-50  justify-center">
      {/* Gradient Shadow Pseudo-Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-warm-beige/50 before:to-medium-brown/50 before:blur-xl before:opacity-50 before:z-10"></div>

      <div className="container w-full md:w-9/10 mx-auto flex bg-white rounded-full py-3 md:py-2 px-6 md:px-10 justify-between items-center z-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-sans font-normal text-transparent bg-gradient-to-r via-dark-brown from-dark-brown to-dark-brown bg-clip-text">
          Make My Ghar
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12">
          <li>
            <Link href="/" className="text-dark-brown font-medium hover:text-dark-brown transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-dark-brown font-medium hover:text-dark-brown transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-dark-brown font-medium hover:text-dark-brown transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-dark-brown font-medium hover:text-dark-brown transition">
              Projects
            </Link>
          </li>
        </ul>

        {/* CTA Button - Visible Only on Desktop */}
        <Link href="/contactus" className="hidden md:block bg-gradient-to-br from-warm-beige via-medium-brown to-medium-brown text-pure-white px-6 py-3 rounded-xl text-md font-semibold hover:bg-dark-brown transition shadow-lg">
          Get Started Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-brown text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-40 flex flex-col items-center justify-center`}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-dark-brown"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <ul className="text-center space-y-8 text-2xl font-medium text-dark-brown">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
        </ul>

        {/* CTA Button in Mobile Menu */}
        <Link
          href="/contactus"
          className="mt-6 bg-gradient-to-br from-warm-beige via-medium-brown to-medium-brown text-pure-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          Get Started Now
        </Link>
      
      </div>
    </nav>
  );
};

export default Navbar;