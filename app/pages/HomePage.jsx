"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { motion } from "framer-motion";

const HomePage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const skills = [
        "AI/ML Engineer", 
        "Senior Software Engineer", 
        "Full Stack Developer", 
        "AWS Certified", 
        "LLM Expert"
    ];

    return (
        <div id="home" className="relative h-screen w-full bg-black overflow-hidden">
            {/* Enhanced particles background */}
            <div className="absolute inset-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 z-0"></div>

            {/* Main content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="md:text-7xl text-4xl lg:text-8xl font-bold text-white mb-4 tracking-wider"
                    >
                        Aman Kaushik
                    </motion.h1>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="relative h-12 overflow-hidden mt-2 mb-6"
                    >
                        <div className="flex flex-col transition-transform duration-500">
                            {skills.map((skill, index) => (
                                <span 
                                    key={index} 
                                    className="text-purple-400 text-2xl md:text-4xl font-light h-12 flex items-center justify-center"
                                    style={{ 
                                        transform: `translateY(${-100 * (Math.floor(Date.now() / 2000) % skills.length)}%)`,
                                        transition: 'transform 0.5s ease-in-out'
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
                            Knight on LeetCode
                        </span>
                        <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
                            Expert on CodeForces
                        </span>
                        <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
                            IIT Graduate
                        </span>
                        <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">
                            AWS Certified
                        </span>
                    </motion.div>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg shadow-purple-500/20"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 rounded-full text-lg font-semibold hover:bg-purple-900 hover:bg-opacity-20 transition duration-300"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="mt-12 flex justify-center gap-6"
                    >
                        {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((platform, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <span className="sr-only">{platform}</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.75c1.79 0 2 .007 2.718.04.655.03 1.01.14 1.243.232.312.12.534.265.768.5.234.233.38.456.5.767.092.233.202.588.232 1.242.033.719.04.929.04 2.719s-.007 2-.04 2.719c-.03.655-.14 1.01-.232 1.243-.12.312-.266.534-.5.768-.234.234-.456.38-.767.5-.233.092-.588.202-1.242.232-.719.033-.929.04-2.719.04s-2-.007-2.719-.04c-.655-.03-1.01-.14-1.243-.232-.312-.12-.534-.266-.768-.5-.234-.234-.38-.456-.5-.767-.092-.233-.202-.588-.232-1.242-.033-.719-.04-.929-.04-2.719s.007-2 .04-2.719c.03-.655.14-1.01.232-1.243.12-.312.266-.534.5-.768.234-.234.456-.38.767-.5.233-.092.588-.202 1.242-.232.719-.033.929-.04 2.719-.04z" />
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Custom cursor */}
            <motion.div
                className="hidden md:block bg-purple-500 h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
                variants={variants}
                animate="default"
                transition={{ ease: "linear", duration: 0 }}
            />

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-sm mb-2">Scroll to explore</p>
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="text-purple-400"
                >
                    ▼
                </motion.div>
            </div>
        </div>
    );
};

export default HomePage;
