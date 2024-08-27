'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    company: "Infinity Learn",
    role: "AI/ML Engineer",
    period: "June 2024 - Present",
    color: "blue",
    logo: "/Images/infinity-logo.svg",
    website: "https://infinitylearn.com/"
  },
  {
    company: "Kosh.ai",
    role: "ML Engineer intern",
    period: "March 2024 - June 2024",
    color: "green",
    logo: "/Images/kosh-ai.svg",
    website: "https://www.kosh.ai/"
  },
  {
    company: "Evervent Pvt Ltd",
    role: "SDE Intern",
    period: "May 2023-July 2023",
    color: "red",
    logo: "/Images/evervent-logo.svg",
    website: "https://evervent.in/"
  }
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextExperience = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  }, []);

  const prevExperience = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  }, []);

  useEffect(() => {
    const slideInterval = 3000; // 3 seconds
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        if (!isHovering) {
          nextExperience();
        }
      }, slideInterval);
    };

    startTimer(); // Start the timer immediately

    return () => clearInterval(timer);
  }, [nextExperience, isHovering]);

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h1>
        <div className="relative w-full max-w-4xl flex items-center justify-center">
          <button
            onClick={prevExperience}
            className="absolute left-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
          >
            &lt;
          </button>
          
          <div className="flex justify-center items-center w-full perspective-1000">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + experiences.length) % experiences.length;
              const exp = experiences[index];
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-500 mx-4 ${
                    offset === 0
                      ? 'scale-100 opacity-100 z-20 rotate-y-0'
                      : offset < 0
                        ? 'scale-75 opacity-60 -rotate-y-45 -translate-x-1/2'
                        : 'scale-75 opacity-60 rotate-y-45 translate-x-1/2'
                  }`}
                  style={{ 
                    width: offset === 0 ? '400px' : '350px',
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`bg-black bg-opacity-80 border-2 p-6 rounded-lg h-80 flex flex-col justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 ${
                    offset === 0 ? `hover:bg-white hover:text-black hover:border-${exp.color}-500` : ''
                  }`}>
                    <div className="h-16 relative">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div>
                      <h2 className={`text-2xl text-${exp.color}-500 font-bold mb-2`}>{exp.company}</h2>
                      <p className="mb-2 text-lg">{exp.role}</p>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>
                    {offset === 0 && (
                      <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors">
                          Learn More
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextExperience}
            className="absolute right-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;