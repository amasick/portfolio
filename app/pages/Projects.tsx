"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export const projects = [
    {
        title: "Blockchain API",
        description: "Developed backend application that uses AlchemyAPI to get different details of an account. User authentication is handled via JSON Web Tokens (JWT) and signature verification using metamask and ethers. Protected route from DDOS attack.",
        link: "https://github.com/amasick",
    },
    {
        title: "Share-Image-AI",
        description: "Developed web application that uses AI to generate images based on text prompts, users can create photos to share. React.js for the frontend and Node.js with Express.js for the backend. MongoDB managed the NoSQL database, and Cloudinary facilitated the storage of raw images.",
        link: "https://github.com/amasick",
    },
    {
        title: "Chatter's Paradise",
        description: "Designed application using React.js for the frontend, backed by Node.js with Express.js for dynamic backend support. MongoDB served as the NoSQL database, while the incorporation of the Socket.IO library for real-time chat capabilities.",
        link: "https://github.com/amasick",
    },
    {
        title: "Quaerere",
        description: "Quaerere is a full-stack web application that harnesses the capabilities of the Metaphor API to provide an enhanced web search experience.",
        link: "https://github.com/amasick",
    },
    {
        title: "E-Commerce API",
        description: "This project is an example of a simple E-Commerce API built using FastAPI and MongoDB. It provides endpoints to manage products and orders in an e-commerce application.",
        link: "https://github.com/amasick",
    },
    {
        title: "JS-Chain",
        description: "Implementing and understanding core blockchain topics like mining and hashing using JavaScript",
        link: "https://github.com/amasick",
    },
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