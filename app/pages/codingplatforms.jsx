"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const CodingProfiles = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [codeforcesData, setCodeforcesData] = useState(null);

  useEffect(() => {
    // Fetch LeetCode data
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get('https://leetcode-stats-api.herokuapp.com/ama_sick');
        setLeetcodeData(response.data);
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
      }
    };

    // Fetch Codeforces data
    const fetchCodeforcesData = async () => {
      try {
        const response = await axios.get('https://codeforces.com/api/user.info?handles=kaushik_159');
        setCodeforcesData(response.data.result[0]);
      } catch (error) {
        console.error('Error fetching Codeforces data:', error);
      }
    };

    fetchLeetCodeData();
    fetchCodeforcesData();
  }, []);

  const StatCard = ({ title, value, color }) => (
    <motion.div
      className={`bg-${color}-900 p-4 rounded-lg shadow-lg`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="coding-profiles">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Coding Profiles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LeetCode Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">LeetCode</h3>
            {leetcodeData ? (
              <div className="grid grid-cols-2 gap-4">
                <StatCard title="Total Solved" value={leetcodeData.totalSolved} color="yellow" />
                <StatCard title="Easy Solved" value={leetcodeData.easySolved} color="green" />
                <StatCard title="Medium Solved" value={leetcodeData.mediumSolved} color="yellow" />
                <StatCard title="Hard Solved" value={leetcodeData.hardSolved} color="red" />
                <StatCard title="Acceptance Rate" value={`${leetcodeData.acceptanceRate}%`} color="blue" />
                <StatCard title="Ranking" value={leetcodeData.ranking} color="purple" />
              </div>
            ) : (
              <p>Loading LeetCode data...</p>
            )}
            <a
              href="https://leetcode.com/u/ama_sick/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors"
            >
              View LeetCode Profile
            </a>
          </motion.div>

          {/* Codeforces Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-red-400">Codeforces</h3>
            {codeforcesData ? (
              <div className="grid grid-cols-2 gap-4">
                <StatCard title="Rank" value={codeforcesData.rank} color="red" />
                <StatCard title="Max Rank" value={codeforcesData.maxRank} color="purple" />
                <StatCard title="Rating" value={codeforcesData.rating} color="blue" />
                <StatCard title="Max Rating" value={codeforcesData.maxRating} color="green" />
              </div>
            ) : (
              <p>Loading Codeforces data...</p>
            )}
            <a
              href="https://codeforces.com/profile/kaushik_159"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
            >
              View Codeforces Profile
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;