"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export const projects = [
    {
        title: "CloudPhy-Inter IIT-Ropar",
        description: "Leveraged YOLOv5 for precise identification and classification of diverse hospital monitors in cropped images. Employed OCR techniques to intelligently extract characters from monitors and Potrace for heart rate graph digitization.",
        link: "https://github.com/amasick",
    },
    {
        title: "Academics Portal",
        description: "Created a complete academic portal with admin, faculty, and student command line interfaces. Achieved multi-functionality with grade upload, transcript generation, course offer, register, and secure login. Tested rigorously with 99% code coverage.",
        link: "https://github.com/amasick",
    },
    {
        title: "Railease - An App for Booking Rail Tickets",
        description: "Designed a railway reservation system that guarantees reliable ticket bookings, with a strong emphasis on synchronization and scalability, capable of handling a high load of up to 4000 bookings per second.",
        link: "https://github.com/amasick",
    },
    {
        title: "ICD Code Prediction",
        description: "Implemented a novel method using the LLaMA 3 70B model to contextually understand medical notes and dynamically identify relevant ICD codes, reducing clinical coding workload by 90%.",
        link: "https://github.com/amasick",
    }
];


const ProjectCard = ({ project, offset }) => (
    <motion.div
        className={`bg-black bg-opacity-80 border-2 border-purple-500 p-6 rounded-lg shadow-lg transition-all duration-300 h-full flex flex-col justify-between`}
        style={{
            width: offset === 0 ? '400px' : '350px',
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
            opacity: offset === 0 ? 1 : 0.7, 
            x: 0,
            scale: offset === 0 ? 1 : 0.9,
            rotateY: offset * 45, // Add 3D rotation effect
            translateX: offset * 100 // Adjust horizontal position
        }}
        transition={{ duration: 0.5 }}
    >
        <div>
            <h3 className={`text-xl font-bold mb-2 ${offset === 0 ? 'text-purple-400' : 'text-gray-300'}`}>{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
        </div>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors inline-block text-center`}
        >
            View Project
        </a>
    </motion.div>
);

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextProject = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, []);

    const prevProject = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }, []);

    useEffect(() => {
        const slideInterval = 3000; // 3 seconds
        let timer;

        const startTimer = () => {
            timer = setInterval(() => {
                if (!isHovering) {
                    nextProject();
                }
            }, slideInterval);
        };

        startTimer();

        return () => clearInterval(timer);
    }, [nextProject, isHovering]);

    return (
        <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="projects">
            {/* Dynamic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Projects
                </h2>
                <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
                     onMouseEnter={() => setIsHovering(true)}
                     onMouseLeave={() => setIsHovering(false)}>
                    <button
                        onClick={prevProject}
                        className="absolute left-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        &lt;
                    </button>
                    
                    <div className="flex justify-center items-center w-full perspective-1000">
                        {[-1, 0, 1].map((offset) => {
                            const index = (currentIndex + offset + projects.length) % projects.length;
                            return (
                                <ProjectCard 
                                    key={index} 
                                    project={projects[index]} 
                                    offset={offset}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextProject}
                        className="absolute right-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;