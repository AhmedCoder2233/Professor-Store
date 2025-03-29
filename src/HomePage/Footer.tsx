'use client';

import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiYoutube, FiGithub } from 'react-icons/fi';

export const Footer = () => {
  const socialLinks = [
    { icon: <FiInstagram />, url: "https://instagram.com/yourstudio" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourstudio" },
    { icon: <FiYoutube />, url: "https://youtube.com/yourstudio" },
    { icon: <FiGithub />, url: "https://github.com/yourstudio" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#f87171" }}
                className="text-gray-400 text-2xl hover:text-red-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-center mb-4">
            © {new Date().getFullYear()} Your Design Studio. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="/privacy" 
              whileHover={{ color: "#f87171" }}
              className="text-gray-400 hover:text-red-400 text-sm"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms" 
              whileHover={{ color: "#f87171" }}
              className="text-gray-400 hover:text-red-400 text-sm"
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="/contact" 
              whileHover={{ color: "#f87171" }}
              className="text-gray-400 hover:text-red-400 text-sm"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};