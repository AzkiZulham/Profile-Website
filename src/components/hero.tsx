"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-25 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-20 items-center">
          
          {/* Text Content - Full Width Emphasis */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
              <Typography
                variant="h1"
                className="
                  font-black tracking-tight leading-tight
                  text-4xl        /* mobile */
                  sm:text-5xl     /* small devices */
                  md:text-6xl     /* tablets */
                  lg:text-7xl     /* laptops */
                  xl:text-8xl     /* desktop besar */
                  2xl:text-[110px] /* layar 4K */
                "
              >
                <span className="block text-gray-900">AZKI</span>
                <span className="block text-gray-900">ZULHAM</span>
                <span className="block text-gray-600">AMONGSAUFA</span>
              </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Full-Stack Developer
                  </span>
                  <span className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Based in Indonesia
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Typography
                variant="h6"
                className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
              >
                Crafting digital experiences with modern technology. 
                Specialized in building fast, scalable, and user-friendly web applications.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button
                variant="contained"
                className="!bg-gray-900 !text-white !rounded-lg !px-12 !py-4 hover:!bg-gray-800 !font-bold !text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                href="#contact"
                size="large"
              >
                GET IN TOUCH
              </Button>
              
              <Button
                variant="outlined"
                className="!border-gray-900 !text-gray-900 !rounded-lg !px-12 !py-4 hover:!bg-gray-900 hover:!text-white !font-bold !text-lg transform hover:scale-105 transition-all duration-200"
                href="#projects"
                size="large"
              >
                VIEW WORK
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">4+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Exp</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section - Full Width Impact */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[600px] lg:h-[800px]">
              <Image
                fill
                alt="Azki Zulham Amongsaufa - Full Stack Developer"
                src="/image/Profile.jpeg"
                className="object-cover rounded-none lg:rounded-l-3xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l lg:bg-gradient-to-l from-white/0 to-white/20"></div>
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-bold text-gray-900">Available for</div>
                    <div className="text-sm text-gray-600">New Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Hero;