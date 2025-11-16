'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const highlightProject = {
  title: "E-commerce Web T-Shop",
  description: "I created an e-commerce website for a local clothing store with online shopping, a shopping cart, and digital payments. Developed a full-featured e-commerce website for a local clothing brand, enabling customers to seamlessly browse products. The platform includes inventory management, responsive design for mobile users, and an intuitive admin dashboard for order tracking and product updates.",
  tech: ["React", "Tailwind CSS", "Node.JS", "MongoDB", "GitHub"],
  image: "/image/tokobaju.png",
  link: "https://tshop.com/store",
  features: ["Online Shopping", "Shopping Cart", "Digital Payments", "Inventory Management", "Admin Dashboard"]
};

const otherProjects = [
  {
    title: "Photography Portfolio Website",
    description: "A personal portfolio website showcasing my photography work with a gallery, contact form, and blog.",
    image: "/image/photographyweb.png",
    tech: ["Next.js", "TypeScript", "Cloudinary"],
    link: "#"
  },
  {
    title: "Wedding Organizer Website",
    description: "A website for a wedding planning service, featuring vendor listings, budget tracking, and a guest RSVP system.",
    image: "/image/weddingorganizer.png",
    tech: ["React", "Express", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Restaurant Website",
    description: "A website for a restaurant featuring online reservations, menu display, and customer reviews.",
    image: "/image/restoran.png",
    tech: ["Vue.js", "Firebase", "Stripe"],
    link: "#"
  },
];

export default function PortfolioPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="w-full bg-white py-20 lg:py-32" id="portfolio">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
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
            MY PORTFOLIO
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
            Showcasing my journey in creating digital solutions that solve real-world problems. 
            From e-commerce to portfolio websites, each project tells a story of innovation and precision.
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={highlightProject.image}
                  alt={highlightProject.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Featured Project</span>
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4"
                  >
                    {highlightProject.title}
                  </motion.h2>
                </div>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {highlightProject.description}
                </motion.p>

                {/* Features */}
                <motion.div variants={itemVariants}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {highlightProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div variants={itemVariants}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {highlightProject.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="pt-4">
                  <motion.a
                    href={highlightProject.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    View Live Project
                    <span className="text-lg">→</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Other Projects</h3>
            <p className="text-xl text-gray-600 font-light">Explore more of my work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-200 group/btn"
                  >
                    View Details
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}