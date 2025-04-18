'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactIcons() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full shadow-md shadow-warm-beige/50"
      >
        <Link
          href="https://wa.me/9183295478180" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 border-2 border-warm-beige rounded-full
                      bg-gradient-to-tr from-gold via-green-800 to-green-900  shadow-2xl shadow-warm-beige/50 text-soft-white"
        >
          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.83.74 5.48 2.16 7.86L2 30l6.36-2.08C10.53 29.26 13.19 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 26c-2.5 0-4.92-.7-7.03-2.02l-.5-.3-3.78 1.24 1.23-3.66-.33-.55A11.88 11.88 0 0 1 4 16c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12 12zm6.08-8.45c-.33-.17-1.94-.96-2.24-1.07-.3-.1-.52-.17-.74.17s-.85 1.06-1.04 1.28-.38.2-.7.07c-.33-.17-1.4-.52-2.66-1.64-.98-.87-1.63-1.94-1.82-2.27-.2-.33-.02-.5.15-.66.15-.15.33-.38.5-.57.17-.2.22-.33.33-.55.1-.2.05-.4-.03-.57-.07-.17-.74-1.78-1.01-2.43-.26-.63-.52-.55-.74-.55h-.63c-.2 0-.5.07-.76.4-.26.33-1 1-1 2.43s1.02 2.8 1.17 2.98c.15.2 2 3.06 4.84 4.29.68.29 1.2.46 1.6.6.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.31.23-.63.23-1.17.16-1.28-.07-.12-.26-.2-.6-.37z" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
