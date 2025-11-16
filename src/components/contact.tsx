"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// LUCIDE ICONS
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  // Contact Info with lucide-react icons
  const contactInfo = [
    {
      icon: <Mail size={22} className="text-white" />,
      title: "Email",
      value: "azkizulham.amongs@gmail.com",
      link: "mailto:azkizulham.amongs@gmail.com",
    },
    {
      icon: <Phone size={22} className="text-white" />,
      title: "Phone",
      value: "+62 812-8938-8310",
      link: "tel:+6281289388310",
    },
    {
      icon: <MapPin size={22} className="text-white" />,
      title: "Location",
      value: "Indonesia",
      link: "#",
    }
  ];

  const socialIcons = [
    { icon: <Github size={20} />, link: "#" },
    { icon: <Linkedin size={20} />, link: "#" },
    { icon: <Instagram size={20} />, link: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-32" id="contact">
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
            GET IN TOUCH
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gray-900 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20"
        >
          
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                I&apos;m always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I&apos;ll respond ASAP.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* FORM — tetap sama seperti punya kamu */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg space-y-8"
            >
              
              {/* NAME & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none"
                  placeholder="What's this about?"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* SUBMIT */}
              <div className="text-right pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 disabled:bg-gray-400 transition-all duration-200 shadow-lg inline-flex items-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message →
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
