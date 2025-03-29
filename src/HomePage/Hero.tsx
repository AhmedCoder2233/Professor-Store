'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Reusable Animated Diamond Component
  const AnimatedDiamond = ({ size = 'base', center = false }) => (
    <motion.div 
      className={`relative ${size === 'lg' ? 'w-48 h-48' : size === 'md' ? 'w-32 h-32' : 'w-10 h-10'} ${center ? 'mx-auto' : ''}`}
    >
      <motion.div
        className="absolute inset-0 bg-red-600 transform rotate-45"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 360],
          transition: {
            duration: size === 'lg' ? 20 : size === 'md' ? 15 : 8,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      />
      <motion.div
        className={`absolute ${size === 'lg' ? 'inset-6' : size === 'md' ? 'inset-4' : 'inset-2'} bg-red-500 transform rotate-45`}
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [360, 0],
          transition: {
            duration: size === 'lg' ? 15 : size === 'md' ? 12 : 6,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      />
      <motion.div
        className={`absolute ${size === 'lg' ? 'inset-12' : size === 'md' ? 'inset-8' : 'inset-4'} bg-red-400 transform rotate-45`}
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 360],
          transition: {
            duration: size === 'lg' ? 10 : size === 'md' ? 8 : 4,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      />
    </motion.div>
  );

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="flex flex-col items-center text-center w-full"
            >
              <AnimatedDiamond size="md" center />
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="text-5xl font-bold text-white mt-8"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  PROFESSOR
                </span>{' '}
                <span className="text-white">STORE</span>
              </motion.h1>

              <motion.div 
                className="w-64 h-1.5 bg-gray-800 mt-8 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-700"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: '100%',
                    transition: { duration: 2, ease: 'linear' }
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed w-full z-40 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="flex items-center gap-3"
          >
            <AnimatedDiamond />
            <motion.span 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
            >
              PROFESSOR STORE
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, type: 'spring' }}
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-6 bg-gray-900 bg-opacity-95">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-red-400 text-lg"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: 'spring' }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center overflow-hidden h-[860px] sm:h-[650px]"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover blur-sm"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center sm:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <AnimatedDiamond size="lg" center />
            
            {/* Enhanced Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  PROFESSOR
                </span>{' '}
                <span className="text-white">STORE</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                <span className="text-red-300">MINECRAFT</span> CREATIVE STUDIO
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Premium video edits & thumbnails that make your content <span className="text-red-300 font-semibold">stand out</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-lg shadow-lg shadow-red-500/20 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW PORTFOLIO
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-900 hover:bg-opacity-30 font-bold rounded-lg transition-all"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(127, 29, 29, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                GET STARTED
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroHeader;