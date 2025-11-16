"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    title: "E-commerce Web T-Shop",
    text: "I had the pleasure of working with Azki on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations. The e-commerce platform they built has significantly improved our online sales and customer experience.",
    name: "Dewi - Founder T-Shop",
    position: "Owner @ T-Shop",
    image: "/image/Dewi.png",
    avatar: "/image/Dewi.png",
    rating: 5,
    projectType: "E-commerce Development"
  },
  {
    title: "Photography Portfolio Website",
    text: "Azki built our photography portfolio website with stunning galleries and a seamless user experience. The attention to detail and understanding of our brand vision was exceptional. We've received numerous compliments from clients about our professional online presence.",
    name: "Adam Kalalo - Founder",
    position: "Photographer @ Adam Kalalo",
    image: "/image/Adam.png",
    avatar: "/image/Adam.png",
    rating: 5,
    projectType: "Portfolio Website"
  },
  {
    title: "Wedding Organizer Website",
    text: "Azki's work on our wedding organizer website was exceptional. They delivered a beautiful and functional site that perfectly captured our vision. The booking system integration and responsive design have made it easy for our clients to engage with our services.",
    name: "Dina - Founder",
    position: "Founder @ Wedding Organizer",
    image: "/image/Dina.png",
    avatar: "/image/Dina.png",
    rating: 5,
    projectType: "Business Website"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-32" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            CLIENT TESTIMONIALS
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gray-900 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Don&apos;t take my word for it. Don&apos;t just take my word for it. Here&apos;s what clients say about working with me to bring their digital visions to life.
          </motion.p>
        </motion.div>

        {/* Testimonial Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Project Type */}
                <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.projectType}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {testimonial.title}
                </h3>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light italic">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-lg text-gray-500">{testimonial.position}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-6 pt-4">
              {/* Avatar Selector */}
              <div className="flex gap-3">
                {testimonials.map((t, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      idx === activeIndex ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <Image
                      src={t.avatar}
                      alt={`Avatar ${idx + 1}`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-full h-full"
                    />
                    {idx === activeIndex && (
                      <motion.div
                        className="absolute -inset-1 border-2 border-gray-900 rounded-full"
                        layoutId="activeAvatar"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex gap-2 ml-auto">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <span className="text-xl">←</span>
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <span className="text-xl">→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-900 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}