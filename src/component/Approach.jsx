"use client";

import React from "react";
import { motion } from "framer-motion";

const approachSteps = [
  {
    number: "01",
    title: "Define",
    description:
      "When I work to build a project, I deeply analyze requirements and write clean, maintainable code to create a strong foundation.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "I transform ideas into real-world applications using clean code principles, modern frameworks (React/Next.js), and scalable backend APIs.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "I ensure seamless deployment with thorough testing, performance optimization, and clean, maintainable code.",
  },
];

const Approach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <section
      id="approach"
      className="py-16 md:py-24 bg-base-200 text-base-content overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-12">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider">
            HOW I WORK
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-accent">Approach</span>
          </h2>
          <p className="text-base-content/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A structured, engineering-first development process I follow for every project, from initial concept to deployment.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {approachSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-base-100 p-8 md:p-10 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div>
                {/* Large Accent Step Number */}
                <div className="text-4xl sm:text-5xl font-extrabold text-accent group-hover:scale-105 transition-transform origin-left">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-base-content mt-4 mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base-content/70 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
