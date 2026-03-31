"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ventures = [
  {
    title: "NexloreAI",
    role: "Founder & AI Solutions Architect",
    status: "Active",
    period: "2025 - Present",
    description:
      "Running an AI solutions agency that helps businesses integrate intelligent automation, multi-agent systems, and custom AI pipelines into their workflows. From ideation to deployment — we build AI that actually works.",
    highlights: [
      "End-to-end AI solution delivery for businesses",
      "Custom multi-agent systems & LLM pipelines",
      "Helping companies automate workflows with AI",
    ],
    link: "https://nexloreai.com",
    linkText: "Visit NexloreAI →",
    emoji: "🤖",
    logo: "https://github.com/user-attachments/assets/be97726a-61eb-4281-bb5a-dff69038189a",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "College Merchandise Business",
    role: "Founder & Operator",
    status: "Completed",
    period: "During College",
    description:
      "Built a merchandise business from scratch during college, managing everything from design and sourcing to marketing and sales. Generated ₹3,00,000+ in revenue — learning the fundamentals of business, supply chain, and customer acquisition the hard way.",
    highlights: [
      "₹3,00,000+ in total sales",
      "End-to-end operations: design, sourcing, marketing, delivery",
      "Learned business fundamentals through real-world execution",
    ],
    link: null,
    linkText: null,
    emoji: "🎽",
    gradient: "from-pink-600 to-rose-600",
  },
];

const Entrepreneurship = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="relative min-h-screen bg-black text-white overflow-hidden"
      id="ventures"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Entrepreneurship
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I don&apos;t just build technology — I build businesses. From college
            side-hustles to a full-fledged AI agency.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    {venture.logo ? (
                      <img src={venture.logo} alt={`${venture.title} logo`} className="w-12 h-12 rounded-lg object-contain" />
                    ) : (
                      <span className="text-4xl">{venture.emoji}</span>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {venture.title}
                      </h3>
                      <p className="text-purple-400 text-sm">{venture.role}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      venture.status === "Active"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    {venture.status}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">{venture.period}</p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {venture.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {venture.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-purple-400 mt-1">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                {venture.link && (
                  <Link
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    {venture.linkText}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 text-lg mb-4">
            Have an AI idea? Let&apos;s build it together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Entrepreneurship;
