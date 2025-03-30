'use client';

import { motion } from 'framer-motion';

export const CustomerReviewsSection = () => {
  const reviews = [
    {
      content:
        "The video editing transformed our raw footage into a cinematic masterpiece. The pacing, transitions, and color grading were all perfect.",
      service: "Alex",
    },
    {
      content:
        "Our click-through rates doubled after using these thumbnails. The editor perfectly captured the video's most engaging moments.",
      service: "James",
    },
    {
      content:
        "The trailer edited for our game generated massive hype. The editor knew exactly which moments would hook our audience.",
      service: "Michael Dank",
    },
    {
      content:
        "Consistent, high-quality edits delivered on tight deadlines. Our weekly content has never looked better.",
      service: "Jimmy",
    },
    {
      content:
        "The logo animations created for our intro sequences gave our brand instant recognition. Simple but extremely effective.",
      service: "Anderson",
    },
    {
      content:
        "The Video animations created for our intro sequences gave our brand instant recognition. Simple but extremely effective.",
      service: "David",
    },
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
                <p className="text-2xl font-bold">{review.service}</p>
                <p className="text-gray-400">{review.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};