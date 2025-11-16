"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
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

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "Industrial Engineering", level: 95 }
  ];

  return (
    <section id="about" className="w-full min-h-screen bg-white py-20 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight"
              >
                ABOUT ME
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-gray-900"
              ></motion.div>
            </div>

            {/* Main Description */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-xl lg:text-xl text-gray-600 leading-relaxed font-light">
                Hi, I&#39;m <span className="font-semibold text-gray-900">Azki Zulham</span>, an industrial engineering graduate with a strong passion for web development and digital innovation.
              </p>
              
              <p className="text-xl lg:text-xl text-gray-600 leading-relaxed font-light">
                With over <span className="font-semibold text-gray-900">4 years of professional experience</span> in production and process control at a major manufacturing company, I bring a structured, analytical approach to building efficient and scalable web applications.
              </p>

              <p className="text-xl lg:text-xl text-gray-600 leading-relaxed font-light">
                I specialize in modern web technologies including <span className="font-semibold text-gray-900">HTML, CSS, TypeScript, React, Next.js, and Node.js</span>, enabling me to craft high-performance digital solutions from concept to deployment.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">4+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">IE</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Engineering Background</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">FS</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Full-Stack</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills & Visual Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Skills Progress Bars */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                    <span className="text-lg font-bold text-gray-900">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.7, duration: 1, ease: "easeOut" }}
                      className="bg-gray-900 h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Unique Value Proposition */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-3">Engineering Mindset × Code</h4>
              <p className="text-gray-600 leading-relaxed">
                My industrial engineering background gives me a unique advantage in creating optimized, 
                efficient, and scalable digital solutions that solve real business problems.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20 lg:mt-20"
        >
          <p className="text-2xl lg:text-3xl text-gray-600 font-light mb-8">
            Ready to bring your digital ideas to life?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-900 text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            LET&#39;S TALK
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}