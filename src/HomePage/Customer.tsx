'use client';

import { motion } from 'framer-motion';

export const CustomerReviewsSection = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "CEO, TechStart Inc.",
      content: "The logo designs exceeded our expectations. The team delivered creative concepts that perfectly captured our brand identity."
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      content: "Working with this design team was a game-changer for our social media presence. Their thumbnails increased our CTR by 40%."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "The video reels helped us showcase our product features in an engaging way, leading to a 25% boost in conversions."
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      content: "Their artwork transformed our brand visuals. We've received countless compliments on the new designs."
    },
    {
      name: "David Kim",
      role: "Founder, StartupXYZ",
      content: "The Minecraft trailers they created for our game went viral, driving thousands of new players to our platform."
    },
    {
      name: "Michael Santh",
      role: "Founder, Ikorna",
      content: "The Minecraft trailers they created for our game went viral, driving thousands of new players to our platform."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          What Our <span className="text-red-400">Clients Say</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="text-xl italic text-gray-300 mb-6">
                "{review.content}"
              </div>
              <div className="text-white">
                <p className="text-2xl font-bold">{review.name}</p>
                <p className="text-gray-400">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};