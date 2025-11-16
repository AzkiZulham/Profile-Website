"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PT. Aspex Kumbong (Korindo Group)",
    role: "Production Staff",
    period: "2019 - 2025",
    description: "Managed and supervised daily operations in the paper production division, ensuring quality control, production efficiency, and workplace safety compliance.",
    technologies: ["Process Optimization", "Quality Control", "Team Management", "Safety Compliance"],
    achievements: [
      "Improved production efficiency by 15% through process optimization",
      "Maintained 99% quality control compliance rate",
      "Led safety training programs for 50+ employees"
    ]
  },
  {
    company: "Freelance Web Developer",
    role: "Full-Stack Developer",
    period: "2025 - Present",
    description: "Designed and developed responsive websites for various clients using modern frameworks such as Next.js, Tailwind CSS, and Express.js. Focused on creating fast, accessible, and user-friendly digital experiences.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
    achievements: [
      "Delivered 10+ client projects with 100% satisfaction rate",
      "Reduced website load times by 40% through optimization",
      "Implemented responsive designs for 5000+ monthly users"
    ]
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section id="experience" className="w-full bg-white py-20 lg:py-32">
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
            EXPERIENCE
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
            From industrial production to digital creation. My unique journey brings engineering precision to web development.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1/2 z-10 hidden lg:block"></div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} ml-12 lg:ml-0`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Company & Role */}
                    <div className="mb-6">
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.8 }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p 
                        className="text-lg font-semibold text-gray-700 mb-1"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 1 }}
                      >
                        {exp.company}
                      </motion.p>
                      <motion.p 
                        className="text-sm text-gray-500 font-medium"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 1.2 }}
                      >
                        {exp.period}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-lg text-gray-600 leading-relaxed mb-6 font-light"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 1.4 }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Technologies */}
                    {exp.technologies && (
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 1.6 }}
                      >
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Skills & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Key Achievements */}
                    {exp.achievements && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 1.8 }}
                      >
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Timeline Date - Desktop */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12'} hidden lg:block`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-2xl font-bold text-gray-900 mt-2"
                  >
                    {exp.period}
                  </motion.div>
                </div>

                {/* Timeline Date - Mobile */}
                <div className="lg:hidden ml-12">
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Transition Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              From Production Lines to Code Lines
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light mb-6">
              My background in industrial engineering brings a unique perspective to web development - 
              focusing on efficiency, process optimization, and delivering high-quality, scalable solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              EXPLORE MY WORK
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}