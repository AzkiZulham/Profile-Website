"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillItem {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

const MySkills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: SkillItem[] = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and high-performance user interfaces with modern technologies and best practices.",
      icon: "/image/frontend.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      description: "Building robust, scalable server-side applications and APIs with focus on performance and security.",
      icon: "/image/backend.png",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      description: "Implementing CI/CD pipelines, containerization, and cloud solutions for seamless deployment and scalability.",
      icon: "/image/devops.png",
      technologies: ["Docker", "AWS", "Git", "CI/CD", "Linux"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className="w-full bg-white py-20 lg:py-32" id="skills">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            MY SKILLS
          </motion.h1>
          
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
            Full-stack web development with industrial engineering precision. 
            Building scalable, efficient digital solutions from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <Image
                      src={skill.icon}
                      alt={skill.title}
                      width={40}
                      height={40}
                      className="object-contain filter invert"
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed text-center mb-6 font-light">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIndex * 0.1 + 0.8 }}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-900/10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;