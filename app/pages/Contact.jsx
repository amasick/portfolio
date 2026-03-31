"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMail, IconBrandLinkedin, IconBrandInstagram, IconBrandX, IconBrandMedium } from '@tabler/icons-react';

const ContactLink = ({ href , icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center p-4 rounded-lg bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={40} className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
    </motion.div>
    <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
  </motion.a>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const contactLinks = [
    { href: "https://medium.com/@amasick", icon: IconBrandMedium, label: "Medium" },
    { href: "https://x.com/ama_sick", icon: IconBrandX, label: "Twitter" },
    { href: "https://www.instagram.com/ama_sick/", icon: IconBrandInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/sde-amankaushik/", icon: IconBrandLinkedin, label: "LinkedIn" },
    { href: "mailto:amankaushik0159@gmail.com", icon: IconMail, label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-center text-lg mb-12 max-w-xl mx-auto"
        >
          Whether you want to collaborate on a project, discuss AI, explore a business idea, or just say hello — I&apos;d love to hear from you.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center mb-12"
        >
          {contactLinks.map((link, index) => (
            <ContactLink 
              key={index}
              href={link.href} 
              icon={link.icon} 
              label={link.label}
            />
          ))}
        </motion.div>

        <motion.form
          action="https://getform.io/f/bxojgqea"
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-lg mx-auto bg-white/5 border border-white/10 p-6 rounded-xl"
        >
          <div className="mb-4">
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="w-full px-3 py-2 bg-black bg-opacity-50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="w-full px-3 py-2 bg-black bg-opacity-50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              placeholder="Tell me about your idea, ask a question, or just say hi..."
              className="w-full px-3 py-2 bg-black bg-opacity-50 border border-gray-600 rounded-md text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 px-4 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;