import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
    <div className="fixed  left-1/2 transform -translate-x-1/2 z-50 w-full pointer-events-none">
    <nav className="pointer-events-auto mx-auto  mt-4 lg:mt-2 lg:w-[90%] w-[95%] py-2.5 px-5 bg-soft-white shadow-lg shadow-warm-beige/50 rounded-2xl border-t-4 border-gold flex justify-between items-center">
  
        {/* Logo - Clickable */}
        <Link href="/" passHref legacyBehavior>
  <a className="flex items-center space-x-2">
    <img src="/assets/mmglogo.png" alt="Make My Ghar Logo" className="h-10 mb-1 w-auto" />
    <span className="text-2xl font-heading font-semibold text-transparent bg-gradient-to-r via-dark-brown from-dark-brown to-dark-brown bg-clip-text">
      Make My Ghar
    </span>
  </a>
</Link>


        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-13">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-dark-brown text-lg  font-medium relative transition group ${
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
          className="hidden lg:block bg-gradient-to-br from-gold via-dark-brown to-dark-brown text-pure-white px-6 py-3 rounded-xl text-md font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:from-gold hover:via-medium-brownbrown hover:to-dark-brown shadow-lg"
          >
          Get Started Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-dark-brown text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-soft-white bg-opacity-95 z-40 overflow-y-auto flex flex-col items-center pt-55 pb-12 space-y-6">
          <button
              className="absolute top-5 right-5 text-3xl text-dark-brown"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="text-center space-y-5 text-xl font-medium text-dark-brown">
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
  aria-label="Visit Make My Ghar on Facebook"
  title="Facebook"
  className="text-dark-brown text-2xl hover:text-gold transition"
>
  <FaFacebookF />
</a>

<a
  href="https://www.instagram.com/make_my_ghar.co.in/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Make My Ghar on Instagram"
  title="Instagram"
  className="text-dark-brown text-2xl hover:text-gold transition"
>
  <FaInstagram />
</a>

             
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
