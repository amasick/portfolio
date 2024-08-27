// "use client";
// import Image from "next/image";
// import { TextGenerateEffect } from "../components/ui/text-generate-effect";
// import img from '../../public/Images/aman.jpg'
// // /home/kaushik/Desktop/resume_projects/next-portfolio-main/public/Images/

// const About = () => {
//   const words = `
//   I’m Aman Kaushik, an IIT Ropar graduate with a B.Tech in Electrical Engineering, specializing in Full Stack Development and AI/ML. With hands-on experience at leading companies like Infinity Learn and KOSH, I’ve developed cutting-edge solutions that drive significant impact. At Infinity Learn, I created a lead-to-sale prediction model and custom dashboards, optimizing workflows by 90%. At KOSH, I enhanced medical note understanding using advanced AI models, reducing clinical coding time from hours to minutes.

// My technical skills span C++, Python, Java, SQL, TensorFlow, PyTorch, Flask, Docker, and cloud platforms like AWS and Google Cloud. Whether it’s building robust back-end systems, automating processes, or developing AI-driven applications, I’m passionate about delivering high-quality, scalable solutions.

// Looking for a dynamic developer who can bring innovation and efficiency to your projects? Let’s collaborate to turn your vision into reality.
//   `;
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center" id="about">
//       <h1 className="text-4xl md:text-6xl mb-8 text-white">
//         About me
//       </h1>
//       <div className="mx-4 md:mx-16 text-center flex flex-col md:flex-row items-center gap-x-24">
//         <Image src={img} alt="img" className="rounded-[30px] border-white border-2 p-2" width={400} height={300} />
//         <TextGenerateEffect words={words} className="mb-4 md:mb-0 md:mr-8" />
//       </div>
//     </div>
//   );
// };

// export default About;
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img from '../../public/Images/aman.jpg';

const About = () => {
  const words = `
  I'm Aman Kaushik, an IIT Ropar graduate with a B.Tech in Electrical Engineering, specializing in Full Stack Development and AI/ML. With hands-on experience at leading companies like Infinity Learn and KOSH, I've developed cutting-edge solutions that drive significant impact. At Infinity Learn, I created a lead-to-sale prediction model and custom dashboards, optimizing workflows by 90%. At KOSH, I enhanced medical note understanding using advanced AI models, reducing clinical coding time from hours to minutes.

My technical skills span C++, Python, Java, SQL, TensorFlow, PyTorch, Flask, Docker, and cloud platforms like AWS and Google Cloud. Whether it's building robust back-end systems, automating processes, or developing AI-driven applications, I'm passionate about delivering high-quality, scalable solutions.

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
            <Image 
              src={img} 
              alt="Aman Kaushik" 
              className="rounded-[30px] border-purple-500 border-2 p-2 shadow-lg shadow-purple-500/50" 
              width={400} 
              height={300} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1"
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-xl">
              <TextGenerateEffect words={words} className="text-gray-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;