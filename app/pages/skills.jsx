"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", level: 95, icon: "🐍" },
            { name: "Java", level: 90, icon: "☕" },
            { name: "C++", level: 85, icon: "🔍" },
            { name: "SQL", level: 90, icon: "📊" },
            { name: "JavaScript", level: 80, icon: "💻" }
        ]
    },
    {
        category: "AI / Machine Learning",
        skills: [
            { name: "TensorFlow", level: 90, icon: "🧠" },
            { name: "PyTorch", level: 85, icon: "🔥" },
            { name: "Scikit-learn", level: 95, icon: "📈" },
            { name: "LLM Orchestration", level: 90, icon: "🦙" },
            { name: "Multi-Agent Systems", level: 95, icon: "🤖" }
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "AWS Services", level: 90, icon: "☁️" },
            { name: "Docker", level: 85, icon: "🐳" },
            { name: "GitHub Actions", level: 80, icon: "🔄" },
            { name: "AWS Bedrock", level: 85, icon: "🏔️" },
            { name: "AWS Lambda", level: 90, icon: "λ" }
        ]
    },
    {
        category: "Web Development",
        skills: [
            { name: "React", level: 80, icon: "⚛️" },
            { name: "FastAPI", level: 90, icon: "⚡" },
            { name: "REST APIs", level: 95, icon: "🔄" },
            { name: "HTML/CSS", level: 75, icon: "🎨" },
            { name: "NextJS", level: 75, icon: "▲" }
        ]
    },
    {
        category: "Data Engineering",
        skills: [
            { name: "Pandas", level: 95, icon: "🐼" },
            { name: "NumPy", level: 90, icon: "🔢" },
            { name: "ETL Pipelines", level: 85, icon: "🔄" },
            { name: "PostgreSQL", level: 90, icon: "🐘" },
            { name: "Data Visualization", level: 85, icon: "📊" }
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

const SkillBar = ({ skill }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
        >
            <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                    <span className="text-xl mr-2">{skill.icon}</span>
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

const CertificationCard = ({ cert, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-purple-900 bg-opacity-20 border border-purple-500 border-opacity-30 p-4 rounded-lg"
        >
            <h3 className="text-lg font-medium text-purple-300">{cert.name}</h3>
            <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <span className="text-xs bg-purple-800 bg-opacity-50 text-purple-200 px-2 py-1 rounded-full">
                    {cert.year}
                </span>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("Programming Languages");

    const selectedCategoryData = skillsData.find(category => category.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="skills">
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
                    Skills & Certifications
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Skills Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-black bg-opacity-70 border border-purple-500 border-opacity-30 rounded-xl p-6 shadow-xl shadow-purple-500/10">
                            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Technical Skills</h3>
                            
                            {/* Category Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {skillsData.map((category, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedCategory(category.category)}
                                        className={`px-3 py-1 rounded-full text-sm transition-all ${
                                            selectedCategory === category.category
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-purple-900 bg-opacity-30 text-purple-300 hover:bg-opacity-50'
                                        }`}
                                    >
                                        {category.category}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Skills Bars */}
                            <div className="mt-6">
                                {selectedCategoryData.skills.map((skill, idx) => (
                                    <SkillBar key={idx} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-black bg-opacity-70 border border-purple-500 border-opacity-30 rounded-xl p-6 h-full shadow-xl shadow-purple-500/10">
                            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Certifications</h3>
                            
                            <div className="space-y-4">
                                {certifications.map((cert, idx) => (
                                    <CertificationCard key={idx} cert={cert} index={idx} />
                                ))}
                            </div>

                            {/* Achievements Section */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4 text-purple-300">Achievements</h3>
                                
                                <ul className="space-y-3">
                                    <motion.li 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className="flex items-center"
                                    >
                                        <span className="text-purple-500 mr-2">🏆</span>
                                        <span className="text-gray-300">Knight on LeetCode (Top 2%)</span>
                                    </motion.li>
                                    <motion.li 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="flex items-center"
                                    >
                                        <span className="text-purple-500 mr-2">👑</span>
                                        <span className="text-gray-300">Expert on CodeForces (1600+)</span>
                                    </motion.li>
                                    <motion.li 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="flex items-center"
                                    >
                                        <span className="text-purple-500 mr-2">🎓</span>
                                        <span className="text-gray-300">AIR-EWS 723 in JEE Advanced</span>
                                    </motion.li>
                                    <motion.li 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="flex items-center"
                                    >
                                        <span className="text-purple-500 mr-2">📊</span>
                                        <span className="text-gray-300">98.5%ile in JEE Mains</span>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
