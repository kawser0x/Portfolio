"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import kawserImg from "../../../public/kawser.jpg";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCodeforces, SiExpress, SiMongodb } from "react-icons/si";
import { HiOutlineMail, HiDownload, HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.2 },
    },
  };

  return (
    <section
      id="hero"
      className="bg-base-200 text-base-content py-16 md:py-24 px-4 sm:px-8 md:px-12 min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Left Column: Bio & CTA Buttons */}
        <div className="lg:col-span-7 space-y-6">
          {/* Who I Am Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-100 border border-base-300 shadow-sm text-xs font-semibold text-base-content/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            WHO I AM
          </motion.div>

          {/* Main Title & Role */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-base-content leading-tight">
              I&apos;m Kawser Ahamad
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mt-2">
              Full Stack Developer (MERN)
            </h2>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-base-content/70 text-base md:text-lg max-w-xl leading-relaxed">
            I build fast, clean, and impactful web applications turning ideas
            into reality, one perfect pixel and line of code at a time.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1kgOihl9f-zhSGBW76bB6SsHe_Nrz-Zeq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent rounded-full text-accent-content font-bold px-6 shadow-md hover:shadow-accent/40 gap-2">
              <HiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="btn btn-outline rounded-full font-bold px-6 border-base-300 hover:bg-base-100 hover:border-accent gap-2">
                View Projects
                <HiOutlineArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn btn-ghost rounded-full font-semibold border border-base-300 hover:border-accent px-5 gap-2">
                <HiOutlineMail className="w-5 h-5 text-accent" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-base-content/60 font-medium pt-2">
            10+ Projects Completed &bull; 200+ Problems Solved on Codeforces &bull;
            Competitive Programmer
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kawser0x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content/80 hover:bg-accent hover:text-accent-content hover:border-accent flex items-center justify-center transition-colors shadow-sm text-xl">
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/kawser-ahamad-09k/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content/80 hover:bg-accent hover:text-accent-content hover:border-accent flex items-center justify-center transition-colors shadow-sm text-xl">
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://codeforces.com/profile/kawser0x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces"
              className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content/80 hover:bg-accent hover:text-accent-content hover:border-accent flex items-center justify-center transition-colors shadow-sm text-lg">
              <SiCodeforces />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:kawserswe@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content/80 hover:bg-accent hover:text-accent-content hover:border-accent flex items-center justify-center transition-colors shadow-sm text-xl">
              <HiOutlineMail />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Photo Banner Container with Floating Tech Badges */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          variants={imageVariants}>
          <div className="relative bg-accent/10 rounded-[3rem] p-6 border border-accent/20 shadow-xl flex items-center justify-center">
            {/* Floating Tech Badge 1 (React - Top Left) */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{
                repeat: Infinity,
                duration: 3.2,
                ease: "easeInOut",
              }}
              className="w-11 h-11 rounded-2xl bg-base-100 border border-base-300 shadow-md flex items-center justify-center absolute -top-2 -left-2 z-10 text-2xl text-cyan-400">
              <FaReact />
            </motion.div>

            {/* Floating Tech Badge 2 (Node.js - Top Right) */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
              }}
              className="w-11 h-11 rounded-2xl bg-base-100 border border-base-300 shadow-md flex items-center justify-center absolute top-6 -right-2 z-10 text-2xl text-green-500">
              <FaNodeJs />
            </motion.div>

            {/* Floating Tech Badge 3 (Express.js - Bottom Left) */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="w-11 h-11 rounded-2xl bg-base-100 border border-base-300 shadow-md flex items-center justify-center absolute bottom-12 -left-3 z-10 text-xl text-base-content">
              <SiExpress />
            </motion.div>

            {/* Floating Tech Badge 4 (MongoDB - Bottom Right) */}
            <motion.div
              animate={{ y: [6, -4, 6] }}
              transition={{
                repeat: Infinity,
                duration: 3.0,
                ease: "easeInOut",
              }}
              className="w-11 h-11 rounded-2xl bg-base-100 border border-base-300 shadow-md flex items-center justify-center absolute -bottom-1 -right-1 z-10 text-2xl text-emerald-500">
              <SiMongodb />
            </motion.div>

            {/* Main Circular Profile Image Frame */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-base-100 shadow-2xl relative overflow-hidden group">
              <Image
                src={kawserImg}
                alt="Kawser Ahamad"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 16rem, 24rem"
                priority
              />
            </div>

            {/* Bottom Floating Motto Pill Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              className="px-4 py-1.5 rounded-full bg-base-100 border border-base-300 shadow-lg text-xs font-semibold text-base-content flex items-center gap-2 absolute -bottom-4 z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Think. Code. Create.
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
