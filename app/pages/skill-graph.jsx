"use client";

import React, { useState, useEffect } from 'react';
import { Radar, Bar, Doughnut, Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title
} from 'chart.js';
import { motion } from 'framer-motion';
import axios from 'axios';

ChartJS.register(
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title
);

const DynamicCodingStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch GitHub data
        const githubResponse = await axios.get('https://api.github.com/users/amasick');
        setGithubData(githubResponse.data);

        // Fetch LeetCode data (using unofficial API)
        const leetcodeResponse = await axios.get('https://leetcode-stats-api.herokuapp.com/ama_sick');
        setLeetcodeData(leetcodeResponse.data);

        // Fetch Codeforces data
        const codeforcesResponse = await axios.get('https://codeforces.com/api/user.info?handles=kaushik_159');
        setCodeforcesData(codeforcesResponse.data.result[0]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // GitHub Language Usage Data
  const languageData = {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'Other'],
    datasets: [{
      data: [45, 25, 15, 10, 5], // Replace with actual data from GitHub API
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    }],
  };

  // LeetCode Problem Solving Data
  const leetcodeProblemData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      label: 'Problems Solved',
      data: [leetcodeData.easySolved, leetcodeData.mediumSolved, leetcodeData.hardSolved],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    }],
  };

  // Codeforces Rating History (mock data, replace with actual data if available)
  const codeforcesRatingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Codeforces Rating',
      data: [1200, 1250, 1300, 1350, 1400, codeforcesData.rating],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden" id="coding-stats">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Coding Statistics
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">GitHub Language Usage</h3>
            <Doughnut data={languageData} options={{ responsive: true }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">LeetCode Problems Solved</h3>
            <Bar data={leetcodeProblemData} options={{ responsive: true }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Codeforces Rating History</h3>
            <Line data={codeforcesRatingData} options={{ responsive: true }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Overall Statistics</h3>
            <ul className="list-disc list-inside">
              <li>GitHub Repositories: {githubData.public_repos}</li>
              <li>GitHub Followers: {githubData.followers}</li>
              <li>LeetCode Total Solved: {leetcodeData.totalSolved}</li>
              <li>LeetCode Ranking: {leetcodeData.ranking}</li>
              <li>Codeforces Rating: {codeforcesData.rating}</li>
              <li>Codeforces Max Rating: {codeforcesData.maxRating}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCodingStats;