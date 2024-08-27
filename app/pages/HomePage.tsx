// "use client";
// import React from "react";
// import { SparklesCore } from "../components/ui/sparkles";


// const HomePage = () => {
//     return (
//         <div id="home">
//             <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
//                 <div className="w-full absolute inset-0 h-screen">
//                     <SparklesCore
//                         id="tsparticlesfullpage"
//                         background="transparent"
//                         minSize={10}
//                         maxSize={30}
//                         particleDensity={10}
//                         className="w-full h-full"
//                         particleColor="#FFFFFF"
//                     />
//                 </div>
//                 <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
//                     Aman Kaushik
//                 </h1>
//                 <p className="text-white text-3xl">AI/ML Engineer</p>
//             </div>
//         </div>
//     )
// }

// export default HomePage

"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { motion } from "framer-motion";

const HomePage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    return (
        <div id="home" className="relative h-screen w-full bg-black overflow-hidden">
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

            <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-white mb-4 tracking-wider">
                        Aman Kaushik
                    </h1>
                    <p className="text-purple-400 text-2xl md:text-4xl font-light mb-8">
                        AI/ML Engineer
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300"
                    >
                        Explore My Work
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                className="hidden md:block bg-violet-500 h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none z-50"
                variants={variants}
                animate="default"
                transition={{ ease: "linear", duration: 0 }}
            />

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-sm mb-2">Scroll to explore</p>
                <motion.div
                    animate={{
                        y: [0, 24, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    ▼
                </motion.div>
            </div>
        </div>
    );
};

export default HomePage;
