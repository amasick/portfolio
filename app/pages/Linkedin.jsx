"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const linkedInPosts = [
    "urn:li:ugcPost:7223416350101098496",
    "urn:li:share:7168615188592611328",
    // Add more LinkedIn post URNs here
];

const LinkedInPostCard = ({ postUrn, offset }) => (
    <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        style={{
            width: offset === 0 ? '504px' : '400px',
            height: offset === 0 ? '504px' : '400px',
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
            opacity: offset === 0 ? 1 : 0.6, 
            x: 0,
            scale: offset === 0 ? 1 : 0.9,
            rotateY: offset === 0 ? 0 : 45,
            translateX: offset * 50,
            zIndex: linkedInPosts.length - offset,
        }}
        transition={{ duration: 0.5 }}
    >
        <iframe 
            src={`https://www.linkedin.com/embed/feed/update/${postUrn}`}
            height="100%"
            width="100%"
            frameBorder="0"
            allowFullScreen=""
            title="Embedded post"
        ></iframe>
    </motion.div>
);

const LinkedInPosts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextPost = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % linkedInPosts.length);
    }, []);

    const prevPost = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + linkedInPosts.length) % linkedInPosts.length);
    }, []);

    useEffect(() => {
        const slideInterval = 5000; // 5 seconds
        let timer;

        const startTimer = () => {
            timer = setInterval(() => {
                if (!isHovering) {
                    nextPost();
                }
            }, slideInterval);
        };

        startTimer();

        return () => clearInterval(timer);
    }, [nextPost, isHovering]);

    return (
        <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="linkedin-posts">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Recent LinkedIn Posts
                </h2>
                <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
                     onMouseEnter={() => setIsHovering(true)}
                     onMouseLeave={() => setIsHovering(false)}>
                    <button
                        onClick={prevPost}
                        className="absolute left-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        &lt;
                    </button>
                    
                    <div className="flex justify-center items-center w-full perspective-1000">
                        {linkedInPosts.map((postUrn, index) => {
                            const offset = (index - currentIndex + linkedInPosts.length) % linkedInPosts.length;
                            return (
                                <LinkedInPostCard 
                                    key={index} 
                                    postUrn={postUrn} 
                                    offset={offset}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextPost}
                        className="absolute right-0 z-20 text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LinkedInPosts;