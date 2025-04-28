'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "HCLTech",
    role: "Senior Software Engineer",
    period: "November 2024 - Present",
    color: "purple",
    logo: "/Images/hcl-logo.svg",
    website: "https://www.hcltech.com/",
    description: "Architected AI-driven Credit Memorandum system using CrewAI, reducing manual effort by 5 FTEs and turnaround time by 90%. Built PipelinePulse multi-agent system with AWS Bedrock delivering 3-4× faster migration across 75,000+ ETL jobs.",
    technologies: ["AWS Bedrock", "CrewAI", "LLM Orchestration", "NLP", "OCR", "AWS Lambda"]
  },
  {
    company: "Infinity Learn",
    role: "Software Engineer",
    period: "June 2024 - December 2024",
    color: "blue",
    logo: "/Images/infinity-logo.svg",
    website: "https://infinitylearn.com/",
    description: "Developed a lead-to-sale prediction model using ensemble techniques, reducing manual sales workload by 90%. Implemented custom dashboards using MetaBase for actionable product team insights.",
    technologies: ["Random Forest", "Logistic Regression", "MetaBase", "Data Analysis", "Feature Engineering"]
  },
  {
    company: "Kosh.ai",
    role: "ML/AI + Backend Intern",
    period: "March 2024 - August 2024",
    color: "green",
    logo: "/Images/kosh-ai.svg",
    website: "https://www.kosh.ai/",
    description: "Implemented novel method with LLaMA 3 70B to understand medical notes and identify ICD codes, outperforming existing PLM-ICD methods. Reduced clinical coding time from 2-3 hours to 2 minutes.",
    technologies: ["LLaMA 3", "LLMs", "ICD Coding", "Medical NLP", "External Knowledge Integration"]
  },
  {
    company: "Evervent Pvt Ltd",
    role: "SDE Intern",
    period: "May 2023 - July 2023",
    color: "red",
    logo: "/Images/evervent-logo.svg",
    website: "https://evervent.in/",
    description: "Collaborated on full-stack development projects, focusing on event management solutions. Implemented responsive UI components and backend API integrations.",
    technologies: ["Java", "SQL", "Web Development", "API Integration", "UI/UX"]
  }
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextExperience = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevExperience = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const slideInterval = 5000; // 5 seconds
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        if (!isHovering) {
          nextExperience();
        }
      }, slideInterval);
    };

    startTimer();

    return () => clearInterval(timer);
  }, [nextExperience, isHovering]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden" id="experience">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Professional Experience
        </motion.h1>
        
        <div className="relative w-full max-w-5xl flex items-center justify-center px-4">
          <button
            onClick={prevExperience}
            disabled={isAnimating}
            className="absolute left-2 md:left-8 z-20 bg-purple-900 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 hover:text-purple-400 transition-colors transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex justify-center items-center w-full perspective-1000">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + experiences.length) % experiences.length;
              const exp = experiences[index];
              return (
                <motion.div
                  key={index}
                  className={`transition-all duration-500 mx-2 md:mx-4 ${
                    offset === 0
                      ? 'scale-100 opacity-100 z-20 rotate-y-0'
                      : offset < 0
                        ? 'scale-75 opacity-40 -rotate-y-45 -translate-x-1/2'
                        : 'scale-75 opacity-40 rotate-y-45 translate-x-1/2'
                  }`}
                  style={{ 
                    width: offset === 0 ? '500px' : '350px',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: offset === 0 ? 1 : 0.4, scale: offset === 0 ? 1 : 0.75 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`bg-black bg-opacity-80 border-2 p-6 rounded-lg flex flex-col justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 ${
                    offset === 0 ? `border-${exp.color}-500 h-96` : 'border-gray-700 h-80'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 relative mr-4">
                        <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div>
                        <h2 className={`text-2xl text-${exp.color}-500 font-bold`}>{exp.company}</h2>
                        <p className="text-lg">{exp.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                      {offset === 0 && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-gray-300 mb-4"
                        >
                          {exp.description}
                        </motion.p>
                      )}
                      
                      {offset === 0 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap gap-2 mb-4"
                        >
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    
                    {offset === 0 && (
                      <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-colors"
                        >
                          Visit Company
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={nextExperience}
            disabled={isAnimating}
            className="absolute right-2 md:right-8 z-20 bg-purple-900 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 hover:text-purple-400 transition-colors transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="mt-12 flex justify-center">
          {experiences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`h-3 w-3 rounded-full mx-1 transition-all ${
                currentIndex === idx ? 'bg-purple-500 w-6' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
