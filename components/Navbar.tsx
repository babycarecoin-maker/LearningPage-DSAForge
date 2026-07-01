'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, MapPin, Download } from 'lucide-react';

const navLinks = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Safety', href: '#safety' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
      delay: 0.2,
    },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' as const },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.4, ease: 'easeOut' as const, staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-glass border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 py-2 sm:py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
              </div>
            </motion.div>
            <span className="font-heading font-bold text-lg sm:text-xl text-secondary-800">
              Raahico
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-secondary-600 font-medium hover:text-primary transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 rounded-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/partner"
                className="px-5 py-2.5 text-secondary-700 font-medium hover:text-primary transition-colors"
              >
                Become a Partner
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Download className="w-4 h-4" />
              Download App
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-800" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-800" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-secondary-700 font-medium hover:text-primary hover:bg-primary/5 rounded-lg sm:rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-3 sm:pt-4 border-t border-gray-200/50">
                <Link
                  href="/partner"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 text-secondary-700 font-medium hover:bg-secondary-50 rounded-lg sm:rounded-xl transition-colors"
                >
                  Become a Partner
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-primary text-white font-semibold rounded-lg sm:rounded-xl shadow-lg shadow-primary/25"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download App
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
