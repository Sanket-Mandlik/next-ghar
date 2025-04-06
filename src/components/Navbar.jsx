import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/whyus", label: "Why - Us?" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contactus", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-[10px] md:mb-8 z-50 bg-soft-white shadow-lg shadow-warm-beige/50 rounded-2xl border-t-3 border-gold mx-auto md:w-[90%] w-[95%] py-2 px-6 flex justify-between items-center">
      {/* Logo - Clickable */}
      <Link href="/" passHref legacyBehavior>
        <a className="text-xl font-heading font-semibold text-transparent bg-gradient-to-r via-dark-brown from-dark-brown to-dark-brown bg-clip-text">
          Make My Ghar
        </a>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-dark-brown font-medium relative transition group ${
                router.pathname === link.href ? "active-link" : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-[-2px] h-[1.5px] bg-gold transition-all duration-300 ${
                  router.pathname === link.href ? "w-full" : "w-0"
                } group-hover:w-full`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button - Desktop only */}
      <Link
        href="/contactus"
        className="hidden md:block bg-gradient-to-br from-gold via-dark-brown to-dark-brown text-pure-white px-6 py-3 rounded-xl text-md font-semibold hover:bg-dark-brown transition shadow-lg"
      >
        Get Started Now
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-dark-brown text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6">
          <button
            className="absolute top-6 right-6 text-3xl text-dark-brown"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <ul className="text-center space-y-4 text-xl font-medium text-dark-brown">
            <li key="home">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`relative transition group ${
                  router.pathname === "/" ? "active-link" : ""
                }`}
              >
                Home
                <span
                  className={`absolute left-0 bottom-[-2px] h-[1.5px] bg-gold transition-all duration-300 ${
                    router.pathname === "/" ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </Link>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative transition group ${
                    router.pathname === link.href ? "active-link" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[1.5px] bg-gold transition-all duration-300 ${
                      router.pathname === link.href ? "w-full" : "w-0"
                    } group-hover:w-full`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA - Mobile */}
          <Link
            href="/contactus"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-gradient-to-br from-gold via-dark-brown to-dark-brown text-pure-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Get Started Now
          </Link>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-brown text-2xl hover:text-gold transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-brown text-2xl hover:text-gold transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-brown text-2xl hover:text-gold transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
