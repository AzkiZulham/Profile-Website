"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AzkiZulham",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.3.1-2.8 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18 6.3 19 6.6 19 6.6c.6 1.5.1 2.5.1 2.8.8.8 1.2 1.9 1.2 3.2 0 4.7-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/azkizulham/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.6v-5.4c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.8 1.4-.1.3-.1.6-.1 1v5.2H9.75s.05-8.4 0-9.3h3.6v1.3c.5-.7 1.3-1.7 3.2-1.7 2.4 0 4.2 1.6 4.2 5.1v4.6zM5.34 8.64c-1.2 0-2.04-.8-2.04-1.8 0-1.03.83-1.8 2.08-1.8s2.04.77 2.04 1.8c-.04 1-.83 1.8-2.08 1.8h-.01zM3.54 20.45h3.6V11.1h-3.6v9.35zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.27 0-3.68.01-4.96.07-4.08.2-6.02 2.15-6.22 6.22-.06 1.28-.07 1.69-.07 4.96s.01 3.68.07 4.96c.2 4.07 2.14 6.02 6.22 6.22 1.28.06 1.69.07 4.96.07s3.68-.01 4.96-.07c4.08-.2 6.02-2.15 6.22-6.22.06-1.28.07-1.69.07-4.96s-.01-3.68-.07-4.96c-.2-4.07-2.14-6.02-6.22-6.22-1.28-.06-1.69-.07-4.96-.07zm0 5.18a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 9.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8zm5.02-11.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Azki Zulham
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light max-w-md">
              Full-Stack Developer passionate about creating digital solutions that make a difference. 
              Let&apos;s build something amazing together.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <p className="text-gray-400">azkizulham.amongs@gmail.com</p>
              <p className="text-gray-400">+62 812-8938-8310</p>
              <p className="text-gray-400">Indonesia</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-4 font-light">
                Follow me on social media or reach out for collaborations.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-200 text-white"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Azki Zulham Amongsaufa. All rights reserved.
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </motion.a>
          </div>

          {/* Made With Love */}
          <div className="text-gray-400 text-sm">
            <p>Built with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}