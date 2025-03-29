'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiGlobe, FiMapPin } from 'react-icons/fi';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-3xl text-red-400" />,
      title: "Email Us",
      value: "xyz@gmail.com",
      link: "mailto:contact@yourdesignstudio.com"
    },
    {
      icon: <FiMessageSquare className="text-3xl text-red-400" />,
      title: "Discord",
      value: "Call_Me_Professor",
      link: "https://discord.com/users/yourdesignstudio"
    },
    {
      icon: <FiGlobe className="text-3xl text-red-400" />,
      title: "Website",
      value: "yourdesignstudio.com",
      link: "https://yourdesignstudio.com"
    },
    {
      icon: <FiMapPin className="text-3xl text-red-400" />,
      title: "Location",
      value: "Pakistan",
      link: "https://maps.google.com?q=San+Francisco"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss your design needs? Reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
        />
      </div>
    </section>
  );
};