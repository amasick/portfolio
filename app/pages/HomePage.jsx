"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { motion } from "framer-motion";

const HomePage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
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
        "AI Engineer",
        "Entrepreneur", 
        "Tech Blogger",
        "Builder of Intelligent Systems",
        "Problem Solver"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }, 2500);
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    className="text-center max-w-4xl"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-lg md:text-xl mb-3 tracking-wide"
                    >
                        Hey, I&apos;m
                    </motion.p>

                    <motion.h1 
                        variants={itemVariants}
                        className="md:text-7xl text-4xl lg:text-8xl font-bold text-white mb-2 tracking-wider"
                    >
                        Aman Kaushik
                    </motion.h1>
                    
                    {/* Animated role */}
                    <motion.div 
                        variants={itemVariants}
                        className="h-14 overflow-hidden mt-2 mb-6"
                    >
                        <motion.span
                            key={currentSkillIndex}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="block text-purple-400 text-2xl md:text-4xl font-light h-14 flex items-center justify-center"
                        >
                            {skills[currentSkillIndex]}
                        </motion.span>
                    </motion.div>

                    {/* One-liner */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        I build intelligent systems, write about AI, run an AI solutions agency, 
                        and believe great technology should inspire everyone — not just engineers.
                    </motion.p>

                    {/* Badges */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        {[
                            "🧠 AI Engineer @ HCLTech",
                            "🚀 Founder, NexloreAI",
                            "✍️ Tech Blogger",
                            "🎓 IIT Ropar Graduate",
                        ].map((badge, idx) => (
                            <span key={idx} className="px-4 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm backdrop-blur-sm">
                                {badge}
                            </span>
                        ))}
                    </motion.div>
                    
                    {/* CTA Buttons */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg shadow-purple-500/20"
                        >
                            Explore My World
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 rounded-full text-lg font-semibold hover:bg-purple-900 hover:bg-opacity-20 transition duration-300"
                        >
                            Let&apos;s Connect
                        </motion.a>
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-10 flex justify-center gap-6"
                    >
                        {[
                            { name: "GitHub", href: "https://github.com/amasick", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                            { name: "LinkedIn", href: "https://www.linkedin.com/in/sde-amankaushik/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                            { name: "X / Twitter", href: "https://x.com/ama_sick", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                                title={social.name}
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social.icon} />
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
                <p className="text-sm mb-2 text-gray-500">Scroll to explore</p>
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
