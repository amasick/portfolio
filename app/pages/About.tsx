"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from '../../public/Images/aman.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden" id="about">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl mb-14 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Who I Am
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-x-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 md:mb-0 flex-shrink-0"
          >
            <div className="relative">
              <Image 
                src={img} 
                alt="Aman Kaushik" 
                className="rounded-[30px] border-purple-500 border-2 p-2 shadow-lg shadow-purple-500/50" 
                width={380} 
                height={380} 
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="space-y-5">
              <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed">
                I&apos;m an <span className="text-white font-semibold">AI Engineer</span> with 2+ years of experience building intelligent systems that actually make a difference. From architecting multi-agent AI pipelines that saved 5 full-time employees&apos; worth of work, to building an AI solutions agency — I live at the intersection of <span className="text-purple-400">engineering and entrepreneurship</span>.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed">
                I graduated from <span className="text-white font-semibold">IIT Ropar</span>, have worked with companies like HCLTech, Infinity Learn, and Kosh.ai, and I&apos;m currently building <span className="text-purple-400 font-semibold">NexloreAI</span> — an AI solutions agency helping businesses harness the power of artificial intelligence.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed">
                Beyond the screen, you&apos;ll find me on a <span className="text-white font-semibold">basketball court</span>, going for a run, or planning my next travel adventure. I also love <span className="text-purple-400">writing blogs</span> about AI, tech, and the lessons I learn along the way. I believe in sharing knowledge openly — the best ideas come from conversations, not gatekeeping.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-400 text-base italic">
                &quot;Build things that excite you, share what you learn, and never stop exploring.&quot;
              </motion.p>

              {/* Interest tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
                {[
                  "🧠 AI / ML",
                  "🚀 Entrepreneurship", 
                  "✍️ Blogging",
                  "🏀 Basketball",
                  "🏃 Running",
                  "✈️ Travel",
                  "☁️ AWS",
                  "🐍 Python"
                ].map((tag, index) => (
                  <span key={index} className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
