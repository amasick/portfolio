"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { IconBrandCpp, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandAws, IconBrandReact, IconDatabase, IconCode, IconBrain, IconCloud, IconDeviceLaptop } from '@tabler/icons-react';

const TechData = [
    {
        category: "Programming Languages",
        icon: IconCode,
        color: "bg-blue-100",
        skills: [
            { name: "C++", level: 95, icon: IconBrandCpp },
            { name: "Python", level: 95, icon: IconBrandPython },
            { name: "Java", level: 90, icon: null },
            { name: "SQL", level: 90, icon: IconDatabase },
            { name: "JavaScript", level: 85, icon: IconBrandJavascript }
        ]
    },
    {
        category: "AI / Machine Learning",
        icon: IconBrain,
        color: "bg-purple-100",
        skills: [
            { name: "Multi-Agent Systems", level: 95, icon: null },
            { name: "TensorFlow", level: 90, icon: null },
            { name: "Scikit-learn", level: 95, icon: null },
            { name: "LangChain", level: 90, icon: null },
            { name: "PyTorch", level: 85, icon: null },
            { name: "HuggingFace", level: 85, icon: null },
            { name: "LLM Orchestration", level: 90, icon: null }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: IconCloud,
        color: "bg-orange-100",
        skills: [
            { name: "AWS Services", level: 90, icon: IconBrandAws },
            { name: "AWS Lambda", level: 90, icon: null },
            { name: "AWS S3", level: 90, icon: null },
            { name: "AWS EC2", level: 85, icon: null },
            { name: "AWS RDS", level: 85, icon: null },
            { name: "AWS Bedrock", level: 85, icon: null },
            { name: "AWS SageMaker", level: 85, icon: null },
            { name: "Docker", level: 85, icon: null },
            { name: "GitHub Actions", level: 80, icon: null }
        ]
    },
    {
        category: "Web Development",
        icon: IconDeviceLaptop,
        color: "bg-yellow-200",
        skills: [
            { name: "REST APIs", level: 95, icon: null },
            { name: "FastAPI", level: 90, icon: null },
            { name: "Node.js", level: 85, icon: IconBrandNodejs },
            { name: "Next.js", level: 80, icon: IconBrandNextjs },
            { name: "React", level: 80, icon: IconBrandReact },
            { name: "MongoDB", level: 85, icon: IconBrandMongodb }
        ]
    },
    {
        category: "Data Engineering",
        icon: IconDatabase,
        color: "bg-green-100",
        skills: [
            { name: "Pandas", level: 95, icon: null },
            { name: "NumPy", level: 90, icon: null },
            { name: "ETL Pipelines", level: 85, icon: null },
            { name: "PostgreSQL", level: 90, icon: null },
            { name: "Data Visualization", level: 85, icon: null },
            { name: "OpenCV", level: 85, icon: null },
            { name: "YOLO", level: 80, icon: null },
            { name: "Tesseract", level: 80, icon: null }
        ]
    }
];

const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: 2023 },
    { name: "AWS Data Engineering", issuer: "Amazon Web Services", year: 2023 },
    { name: "AWS Machine Learning", issuer: "Amazon Web Services", year: 2024 },
    { name: "Java - Zero to Hero", issuer: "Udemy", year: 2022 },
    { name: "Full Stack Development", issuer: "Udemy", year: 2022 },
    { name: "Python Programming", issuer: "Udemy", year: 2021 }
];

const TechBar = ({ skill }) => {
    const Icon = skill.icon;
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
        >
            <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                    {Icon ? 
                        <Icon size={20} className="mr-2 text-purple-400" /> : 
                        <span className="w-5 h-5 mr-2"></span>
                    }
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                </div>
                <span className="text-xs font-medium text-purple-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
            </div>
        </motion.div>
    );
};

const TechCard = ({ tech, offset, isActive }) => {
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
            <p className="font-bold text-xl mb-2">{tech.category}</p>
            <p className="text-sm">{tech.skills.length} Skills</p>
            {isActive && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-2"
                >
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm">
                        View Skills
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
};

const CertificationCard = ({ cert }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 rounded-lg border border-purple-500 hover:border-purple-300 transition-colors"
        >
            <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
            <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-400">{cert.issuer}</span>
                <span className="text-sm text-purple-400">{cert.year}</span>
            </div>
        </motion.div>
    );
};

const Tech = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [viewMode, setViewMode] = useState('carousel'); // 'carousel', 'skills', 'certs'
    const [selectedCategory, setSelectedCategory] = useState(null);

    const nextTech = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TechData.length);
    }, []);

    const prevTech = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TechData.length) % TechData.length);
    }, []);

    const showSkills = (index) => {
        setSelectedCategory(index);
        setViewMode('skills');
    };

    const showCertifications = () => {
        setViewMode('certs');
    };

    const backToCarousel = () => {
        setViewMode('carousel');
        setSelectedCategory(null);
    };

    useEffect(() => {
        const slideInterval = 3000; // 3 seconds
        let timer;

        const startTimer = () => {
            timer = setInterval(() => {
                if (!isHovering && viewMode === 'carousel') {
                    nextTech();
                }
            }, slideInterval);
        };

        startTimer();

        return () => clearInterval(timer);
    }, [nextTech, isHovering, viewMode]);

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

                {/* Navigation */}
                <div className="flex justify-center mb-8">
                    <motion.button
                        onClick={backToCarousel}
                        className={`mx-2 px-4 py-2 rounded-lg ${viewMode === 'carousel' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Categories
                    </motion.button>
                    <motion.button
                        onClick={showCertifications}
                        className={`mx-2 px-4 py-2 rounded-lg ${viewMode === 'certs' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Certifications
                    </motion.button>
                </div>

                {/* Category Carousel */}
                {viewMode === 'carousel' && (
                    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
                         onMouseEnter={() => setIsHovering(true)}
                         onMouseLeave={() => setIsHovering(false)}>
                        <button
                            onClick={prevTech}
                            className="absolute left-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110 text-2xl font-bold"
                        >
                            &lt;
                        </button>
                        
                        <div className="flex justify-center items-center w-full perspective-1000">
                            {[-1, 0, 1].map((offset) => {
                                const index = (currentIndex + offset + TechData.length) % TechData.length;
                                return (
                                    <div key={index} onClick={() => offset === 0 && showSkills(index)}>
                                        <TechCard 
                                            tech={TechData[index]} 
                                            offset={offset}
                                            isActive={offset === 0}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={nextTech}
                            className="absolute right-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110 text-2xl font-bold"
                        >
                            &gt;
                        </button>
                    </div>
                )}

                {/* Skills View */}
                {viewMode === 'skills' && selectedCategory !== null && (
                    <div className="w-full max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center mb-6">
                                {TechData[selectedCategory].icon && (
                                    <TechData[selectedCategory].icon size={30} className="text-purple-500 mr-3" />
                                )}
                                <h3 className="text-2xl font-bold text-purple-400">
                                    {TechData[selectedCategory].category}
                                </h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {TechData[selectedCategory].skills.map((skill, idx) => (
                                    <TechBar key={idx} skill={skill} />
                                ))}
                            </div>
                            
                            <div className="mt-8 text-center">
                                <motion.button
                                    onClick={backToCarousel}
                                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Back to Categories
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Certifications View */}
                {viewMode === 'certs' && (
                    <div className="w-full max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-purple-400 mb-6">Certifications</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {certifications.map((cert, idx) => (
                                    <CertificationCard key={idx} cert={cert} />
                                ))}
                            </div>
                            
                            <div className="mt-8 text-center">
                                <motion.button
                                    onClick={backToCarousel}
                                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Back to Categories
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Statistics Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
                >
                    <div className="bg-gray-900 p-4 rounded-lg border border-purple-800">
                        <div className="text-3xl font-bold text-purple-400">5+</div>
                        <div className="text-sm text-gray-400">Tech Categories</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-purple-800">
                        <div className="text-3xl font-bold text-purple-400">30+</div>
                        <div className="text-sm text-gray-400">Technical Skills</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-purple-800">
                        <div className="text-3xl font-bold text-purple-400">6+</div>
                        <div className="text-sm text-gray-400">Certifications</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-purple-800">
                        <div className="text-3xl font-bold text-purple-400">4+</div>
                        <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Tech;
