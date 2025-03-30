"use client";

import { motion } from "framer-motion";
import {
  FaDiscord,
  FaVideo,
  FaUsers,
  FaShieldAlt,
  FaMobile,
  FaServer,
  FaCode,
  FaRobot,
} from "react-icons/fa";
import { GiToolbox, GiPaintBrush, GiCommercialAirplane } from "react-icons/gi";
import { BsFillChatSquareTextFill } from "react-icons/bs";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaVideo className="text-4xl text-red-400" />,
      title: "Minecraft Video Editor",
      description:
        "Professional editing for your Minecraft content with effects, transitions, and cinematic touches",
    },
    {
      icon: <GiToolbox className="text-4xl text-green-400" />,
      title: "Minecraft Video Maker",
      description:
        "Full production from recording to final render with custom animations",
    },
    {
      icon: <GiPaintBrush className="text-4xl text-yellow-400" />,
      title: "Minecraft Art/Thumbnail/Banner",
      description: "Eye-catching designs to make your content stand out",
    },
    {
      icon: <FaDiscord className="text-4xl text-indigo-400" />,
      title: "Discord Partnership Manager",
      description: "Grow your community through strategic partnerships",
    },
    {
      icon: <BsFillChatSquareTextFill className="text-4xl text-blue-400" />,
      title: "Discord Member Inviter",
      description: "Automated systems to help grow your Discord community",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-400" />,
      title: "Staff/Admin/Manager",
      description: "Professional moderation and community management",
    },
    {
      icon: <GiCommercialAirplane className="text-4xl text-pink-400" />,
      title: "Social Media Manager",
      description: "Content scheduling and growth strategies",
    },
    {
      icon: <FaMobile className="text-4xl text-orange-400" />,
      title: "TikTok Shorts/Insta Reels",
      description: "Vertical video editing optimized for social platforms",
    },
    {
      icon: <FaServer className="text-4xl text-gray-400" />,
      title: "Discord Server Setup",
      description:
        "Custom bots, roles, channels, and professional configuration",
    },
    {
      icon: <GiToolbox className="text-4xl text-green-500" />,
      title: "Minecraft Server Advertisement",
      description: "Promotional content to attract players to your server",
    },
    {
      icon: <FaCode className="text-4xl text-teal-400" />,
      title: "Website Development",
      description: "Custom websites for your Minecraft server or brand",
    },
    {
      icon: <FaRobot className="text-4xl text-cyan-400" />,
      title: "Chatbot/Bots Development",
      description: "Custom bots for personal assistants, auto emailing etc.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      {/* Simple Header Navigation */}
      <header className="bg-black py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Home
            </a>
            <a href="/service-section" className="text-red-400 font-medium">
              Services
            </a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-12">
        {/* Services Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium creative solutions for Minecraft creators and community
            managers
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-400 transition-all"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
