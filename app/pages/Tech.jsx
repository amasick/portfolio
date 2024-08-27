"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { IconBrandCpp, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandAws } from '@tabler/icons-react';
const techStack = [
    { icon: IconBrandCpp, name: "C++", expertise: "Expert", color: "bg-blue-100" },
    { icon: IconBrandPython, name: "Python", expertise: "Expert", color: "bg-yellow-100" },
    { icon: IconBrandJavascript, name: "JavaScript", expertise: "Expert", color: "bg-yellow-200" },
    { icon: IconBrandNextjs, name: "Next.js", expertise: "Advanced", color: "bg-gray-200" },
    { icon: IconBrandNodejs, name: "Node.js", expertise: "Advanced", color: "bg-green-100" },
    { icon: IconBrandMongodb, name: "MongoDB", expertise: "Advanced", color: "bg-green-200" },
    { icon: IconBrandAws, name: "AWS", expertise: "Intermediate", color: "bg-orange-100" },
    { icon: null, name: "Spring Boot", expertise: "Intermediate", color: "bg-lime-100" },
    { icon: null, name: "Machine Learning", expertise: "Advanced", color: "bg-purple-100" },
    { icon: null, name: "LLM", expertise: "Intermediate", color: "bg-indigo-100" },
];

const TechCard = ({ tech, offset }) => {
    const Icon = tech.icon;
    return (
        <motion.div
            className={`${tech.color} p-6 rounded-lg text-black text-center aspect-w-1 aspect-h-1 w-64 h-64 flex flex-col justify-center items-center`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
                opacity: offset === 0 ? 1 : 0.7, 
                x: 0,
                scale: offset === 0 ? 1 : 0.9,
                rotateY: offset * 45,
                translateX: offset * 100
            }}
            transition={{ duration: 0.5 }}
        >
            {Icon && <Icon size={60} className='mb-4' />}
            <p className="font-bold text-xl mb-2">{tech.name}</p>
            <p className="text-sm">{tech.expertise}</p>
        </motion.div>
    );
};

const Tech = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextTech = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, []);

    const prevTech = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + techStack.length) % techStack.length);
    }, []);

    useEffect(() => {
        const slideInterval = 3000; // 3 seconds
        let timer;

        const startTimer = () => {
            timer = setInterval(() => {
                if (!isHovering) {
                    nextTech();
                }
            }, slideInterval);
        };

        startTimer();

        return () => clearInterval(timer);
    }, [nextTech, isHovering]);

    return (
        <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="tech">
            {/* Dynamic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Tech Stack
                </h2>
                <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
                     onMouseEnter={() => setIsHovering(true)}
                     onMouseLeave={() => setIsHovering(false)}>
                    <button
                        onClick={prevTech}
                        className="absolute left-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        &lt;
                    </button>
                    
                    <div className="flex justify-center items-center w-full perspective-1000">
                        {[-1, 0, 1].map((offset) => {
                            const index = (currentIndex + offset + techStack.length) % techStack.length;
                            return (
                                <TechCard 
                                    key={index} 
                                    tech={techStack[index]} 
                                    offset={offset}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextTech}
                        className="absolute right-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tech;