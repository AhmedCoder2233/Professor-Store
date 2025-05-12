"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// Static Thumbnail Section
export const ThumbnailsSection = () => {
  const thumbnails = ["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our <span className="text-red-400">Top Thumbnails</span>
        </motion.h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {thumbnails.map((thumb, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 max-w-md"
              style={{ aspectRatio: "16/9" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl h-full mx-4">
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    Thumbnail {index + 1}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Infinite Video Slider Section
export const VideosSection = () => {
  const videos = [
    "/short1.mp4",
    "/short2.mp4",
    "/short3.mp4",
    "/short4.mp4",
    "/short5.mp4",
  ];
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current = [...videos, ...videos].map(() => null);

    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, []);

  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <section className="py-12 bg-gray-900 overflow-hidden">
      <h2 className="text-6xl font-bold text-center mb-8 text-white">
        Our <span className="text-red-400">Video Reels</span>
      </h2>

      <div className="relative">
        <motion.div ref={sliderRef} className="flex" animate={controls}>
          {[...videos, ...videos].map((video, index) => (
            <div
              key={`${video}-${index}`}
              className="flex-shrink-0 px-4"
              style={{ width: "300px" }}
            >
              <div
                className="relative rounded-lg overflow-hidden shadow-lg"
                style={{ aspectRatio: "9/16" }}
              >
                <video
                  ref={setVideoRef(index)}
                  src={video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                  <span className="text-sm font-medium text-white">
                    Video {(index % videos.length) + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Static Logo Section
export const ArtSection = () => {
  const logos = [
    "/logo1.png",
    "/logo2.jpg",
    "/logo3.jpg",
    "/logo4.jpg",
    "/logo5.jpg",
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our <span className="text-red-400">Logo Designs/Arts</span>
        </motion.h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4"
              style={{ aspectRatio: "1/1" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    Logo {index + 1}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const ServerIcons = () => {
  const Icons = [
    "/again.png",
    "/icon.png",
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our <span className="text-red-400">Server Icons</span>
        </motion.h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {Icons.map((logo, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4"
              style={{ aspectRatio: "2/2" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    Icon {index + 1}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Minecraft Trailer Section (unchanged)
export const MinecraftTrailerSection = () => {
  const trailers = ["/tailer2.mp4", "/tailer.mp4"];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          <span className="text-green-400">Minecraft</span> Trailers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trailers.map((trailer, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-2xl">
              <video
                src={trailer}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto"
                style={{ aspectRatio: "16/9" }}
              />
              <div className="bg-black p-4">
                <h3 className="text-xl font-bold text-white">
                  Minecraft Trailer {index + 1}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
