"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export const projects = [
    {
        title: "AI-driven Credit Memorandum",
        description: "Architected an AI-driven Credit Memorandum generation pipeline using CrewAI, automating end-to-end financial statement analysis and ratio computation for Commonwealth Bank of Australia. Orchestrated specialized AI agents with CFA, CA, Data Scientist, and MS Finance profiles.",
        link: "https://github.com/amasick",
        tags: ["CrewAI", "Multi-Agent Systems", "Financial Analysis", "NLP", "AWS"],
        image: "/api/placeholder/600/400"
    },
    {
        title: "PipelinePulse",
        description: "Built a multi-agent system using AWS Bedrock agents managed by a supervisor agent. Deployed specialized agents (Greenfield, Brownfield, ServiceNow) to handle initial migration, rebuilds, and permissions, delivering 3-4× faster migration throughput across 75,000+ ETL jobs.",
        link: "https://github.com/amasick",
        tags: ["AWS Bedrock", "LLM Orchestration", "ETL", "Multi-Agent Systems", "AWS Lambda"],
        image: "/api/placeholder/600/400"
    },
    {
        title: "ICD Code Prediction System",
        description: "Implemented a novel method using the LLaMA 3 70B model to contextually understand medical notes and dynamically identify relevant ICD codes, outperforming existing PLM-ICD methods on rare codes and reducing clinical coding workload by 90%.",
        link: "https://github.com/amasick",
        tags: ["LLaMA 3", "Medical NLP", "ICD Coding", "Clinical AI", "Healthcare"],
        image: "/api/placeholder/600/400"
    },
    {
        title: "Lead-to-Sale Prediction Model",
        description: "Developed a lead-to-sale prediction model using ensemble techniques like Random Forest and Logistic Regression, reducing manual sales workload by 90% and optimizing features to enhance conversion rates. Implemented custom dashboards using MetaBase.",
        link: "https://github.com/amasick",
        tags: ["Random Forest", "Logistic Regression", "MetaBase", "ML", "BI Dashboards"],
        image: "/api/placeholder/600/400"
    },
    {
        title: "CloudPhy - Inter IIT-Ropar",
        description: "Leveraged YOLOv5 for precise identification and classification of diverse hospital monitors in cropped images. Employed OCR techniques to intelligently extract characters from monitors and Potrace for heart rate graph digitization.",
        link: "https://github.com/amasick",
        tags: ["YOLOv5", "OCR", "Computer Vision", "Potrace", "Healthcare"],
        image: "/api/placeholder/600/400"
    },
    {
        title: "Academics Portal",
        description: "Created a full-fledged academic portal with admin, faculty, and student command line interfaces. Achieved multi-functionality with grade upload, transcript generation, course offer, register, and secure login. Achieved 99% code coverage with extensive testing.",
        link: "https://github.com/amasick",
        tags: ["Java", "Gradle", "JUnit5", "PostgreSQL", "Academic Management"],
        image: "/api/placeholder/600/400"
    },
    {
        title: "Railease - Railway Reservation System",
        description: "Designed a railway reservation system that guarantees reliable ticket bookings, with a strong emphasis on synchronization and scalability, capable of handling a high load of up to 4000 bookings per second.",
        link: "https://github.com/amasick",
        tags: ["Java", "PostgreSQL", "Multithreading", "Synchronization", "High Concurrency"],
        image: "/api/placeholder/600/400"
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
            <div className="mb-4 h-40 relative overflow-hidden rounded-md">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${offset === 0 ? 'text-purple-400' : 'text-gray-300'}`}>{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {offset === 0 && project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-xs">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-full transition-colors inline-block text-center`}
        >
            View Project
        </a>
    </motion.div>
);

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'AI/ML', 'Full Stack', 'Backend', 'AWS'];

    const filterProjects = useCallback(() => {
        if (filter === 'All') {
            return projects;
        } else {
            // Simple filtering based on tags matching
            return projects.filter(project => {
                const lowercaseFilter = filter.toLowerCase();
                
                if (filter === 'AI/ML') {
                    return project.tags.some(tag => 
                        ['ml', 'ai', 'llm', 'nlp', 'multi-agent', 'yolov5', 'llama'].some(
                            keyword => tag.toLowerCase().includes(keyword)
                        )
                    );
                } else if (filter === 'Full Stack') {
                    return project.tags.some(tag => 
                        ['java', 'ui', 'portal', 'management', 'web'].some(
                            keyword => tag.toLowerCase().includes(keyword)
                        )
                    );
                } else if (filter === 'Backend') {
                    return project.tags.some(tag => 
                        ['java', 'postgresql', 'etl', 'database', 'synchronization'].some(
                            keyword => tag.toLowerCase().includes(keyword)
                        )
                    );
                } else if (filter === 'AWS') {
                    return project.tags.some(tag => 
                        ['aws', 'lambda', 'bedrock'].some(
                            keyword => tag.toLowerCase().includes(keyword)
                        )
                    );
                }
                return false;
            });
        }
    }, [filter]);

    useEffect(() => {
        setDisplayedProjects(filterProjects());
        setCurrentIndex(0);
    }, [filter, filterProjects]);

    const nextProject = useCallback(() => {
        if (isAnimating || displayedProjects.length === 0) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedProjects.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, displayedProjects.length]);

    const prevProject = useCallback(() => {
        if (isAnimating || displayedProjects.length === 0) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + displayedProjects.length) % displayedProjects.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, displayedProjects.length]);

    useEffect(() => {
        const slideInterval = 5000; // 5 seconds
        let timer;

        const startTimer = () => {
            timer = setInterval(() => {
                if (!isHovering && displayedProjects.length > 0) {
                    nextProject();
                }
            }, slideInterval);
        };

        startTimer();

        return () => clearInterval(timer);
    }, [nextProject, isHovering, displayedProjects]);

    return (
        <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="projects">
            {/* Dynamic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    Projects
                </motion.h2>

                {/* Filter buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filterName, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(filterName)}
                            className={`px-4 py-2 rounded-full transition-all ${
                                filter === filterName 
                                    ? 'bg-purple-600 text-white' 
                                    : 'bg-purple-900 bg-opacity-30 text-purple-300 hover:bg-purple-800 hover:bg-opacity-50'
                            }`}
                        >
                            {filterName}
                        </button>
                    ))}
                </motion.div>

                {displayedProjects.length > 0 ? (
                    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}>
                        <button
                            onClick={prevProject}
                            disabled={isAnimating || displayedProjects.length <= 1}
                            className="absolute left-0 z-20 bg-purple-900 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 hover:text-purple-400 transition-colors transform hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <div className="flex justify-center items-center w-full perspective-1000">
                            {displayedProjects.length > 0 && [-1, 0, 1].map((offset) => {
                                if (displayedProjects.length <= 1 && offset !== 0) return null;
                                if (displayedProjects.length === 2 && offset === -1) offset = 1;
                                
                                const index = (currentIndex + offset + displayedProjects.length) % displayedProjects.length;
                                return (
                                    <ProjectCard 
                                        key={`${index}-${offset}`} 
                                        project={displayedProjects[index]} 
                                        offset={offset}
                                    />
                                );
                            })}
                        </div>

                        <button
                            onClick={nextProject}
                            disabled={isAnimating || displayedProjects.length <= 1}
                            className="absolute right-0 z-20 bg-purple-900 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 hover:text-purple-400 transition-colors transform hover:scale-110"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-gray-400 text-lg">No projects match the selected filter.</p>
                    </div>
                )}

                {displayedProjects.length > 1 && (
                    <div className="mt-12 flex justify-center">
                        {displayedProjects.map((_, idx) => (
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
                )}

                <div className="mt-16 text-center">
                    <motion.a
                        href="https://github.com/amasick"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                        </svg>
                        View All Projects on GitHub
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
