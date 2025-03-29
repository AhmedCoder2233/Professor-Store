'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import type { LegacyRef } from 'react';

export const ThumbnailsSection = () => {
  const thumbnails = [
    '/thumb1.jpg',
    '/thumb2.jpg',
  ];
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % thumbnails.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${current * 100}%`,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    });
  }, [current]);

  return (
    <section id="thumbnails" className="py-20 bg-gray-900 overflow-hidden">
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

        <div className="relative">
          <motion.div
            ref={sliderRef as LegacyRef<HTMLDivElement>}
            className="flex"
            animate={controls}
          >
            {[...thumbnails, thumbnails[0]].map((thumb, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-4"
                style={{ aspectRatio: '16/9', maxWidth: '800px' }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
                  <motion.img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      Thumbnail {(index % thumbnails.length) + 1}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const VideosSection = () => {
  const videos = ['/short1.mp4', '/short2.mp4', '/short3.mp4', '/short4.mp4', '/short5.mp4'];
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const sliderVideos = [...videos, ...videos, ...videos, ...videos, ...videos];

  useEffect(() => {
    videoRefs.current = sliderVideos.map(() => null);
    
    const animate = async () => {
      const sliderWidth = sliderRef.current?.offsetWidth || 0;
      const totalWidth = sliderWidth * videos.length;
      
      while (true) {
        await controls.start({
          x: -totalWidth,
          transition: { duration: 40, ease: 'linear' }
        });
        controls.set({ x: 0 });
      }
    };

    animate();

  }, []);

  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <section className="py-12 bg-gray-900 overflow-hidden">
      <h2 className="text-6xl font-bold text-center mb-8 text-white">
        Our <span className="text-red-400">Video Reels</span>
      </h2>

      <div className="relative mx-auto" style={{ maxWidth: '1600px' }}>
        <motion.div 
          ref={sliderRef}
          className="flex"
          animate={controls}
        >
          {sliderVideos.map((video, index) => (
            <div 
              key={`${video}-${index}`}
              className="flex-shrink-0 px-4"
              style={{ width: '320px' }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '9/16' }}>
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
export const ArtSection = () => {
  const logo = [
    '/logo1.png',
    '/logo2.jpg',
    '/logo3.jpg',
    '/logo4.jpg',
    '/logo5.jpg',
  ];
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % logo.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${current * 100}%`,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    });
  }, [current]);

  return (
    <section id="thumbnails" className="py-20 bg-gray-900 overflow-hidden">
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

        <div className="relative">
          <motion.div
            ref={sliderRef as LegacyRef<HTMLDivElement>}
            className="flex"
            animate={controls}
          >
            {[...logo, logo[0]].map((thumb, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-4"
                style={{ aspectRatio: '1/1', maxWidth: '800px' }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
                  <motion.img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      Thumbnail {(index % logo.length) + 1}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export const MinecraftTrailerSection = () => {
  const trailers = [
    '/tailer2.mp4',
    '/tailer.mp4'
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
          <span className="text-green-400">Minecraft</span> Trailers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trailers.map((trailer, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-2xl">
              <video
                src={trailer}
                autoPlay
                loop
                className="w-full h-auto"
                style={{ aspectRatio: '16/9' }}
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