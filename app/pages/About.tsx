"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img from '../../public/Images/aman.jpg';

const About = () => {
  const words = `
  I'm Aman Kaushik, an IIT Ropar graduate with a B.Tech in Electrical Engineering, specializing in Full Stack Development and AI/ML Engineering. With professional experience at HCLTech, Infinity Learn, and KOSH, I've developed cutting-edge solutions that drive significant business impact.

  At HCLTech as a Senior Software Engineer, I architected an AI-driven Credit Memorandum generation pipeline using CrewAI, automating financial statement analysis and ratio computation for Commonwealth Bank of Australia. I orchestrated specialized AI agents to perform financial analyses, reducing manual effort by 5 FTEs and slashing turnaround time by 90%. I also built PipelinePulse, a multi-agent system using AWS Bedrock that delivered 3-4× faster migration throughput across 75,000+ ETL jobs.

  At Infinity Learn, I created a lead-to-sale prediction model using ensemble techniques, reducing manual sales workload by 90%, and implemented custom dashboards providing actionable insights for the product team.

  At KOSH, I enhanced medical note understanding using the LLaMA 3 70B model, reducing clinical coding time from hours to minutes and demonstrating a 90% reduction in workload.

  My technical skills span C++, Python, Java, SQL, TensorFlow, PyTorch, LangChain, LLM Orchestration, FastAPI, Docker, and cloud platforms like AWS and Google Cloud. I'm proficient with AWS services including Sagemaker, Lambda, EC2, RDS, and S3.

  I'm a Knight on LeetCode (top 2% globally), an Expert on CodeForces, and ranked in the top 0.1% of JEE Advanced test-takers (AIR-EWS 723).

  Looking for a dynamic developer who can bring innovation and efficiency to your projects? Let's collaborate to turn your vision into reality.
  `;

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden" id="about">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl mb-12 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center gap-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 md:mb-0"
          >
            <div className="relative">
              <Image 
                src={img} 
                alt="Aman Kaushik" 
                className="rounded-[30px] border-purple-500 border-2 p-2 shadow-lg shadow-purple-500/50" 
                width={400} 
                height={300} 
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1"
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-xl">
              <TextGenerateEffect words={words} className="text-gray-300 leading-relaxed" />
              <div className="mt-6 flex flex-wrap gap-2">
                {["AWS", "ML/AI", "Python", "LLM", "React", "Java", "Multi-Agent Systems"].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
