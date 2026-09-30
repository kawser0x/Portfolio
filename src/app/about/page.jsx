"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import kawserBanner from "../../../public/kawserbanner.jpg";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiDownload,
} from "react-icons/hi";
import {
  FaFigma,
  FaLaptopCode,
  FaRocket,
  FaHeart,
  FaBullseye,
} from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-base-200 text-base-content min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {/* Left Column: Photo Banner with Border Shadow */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            variants={itemVariants}>
            <div className="relative p-3.5 rounded-[2.5rem] bg-gradient-to-b from-accent/20 via-base-100 to-accent/10 border border-accent/20 shadow-2xl max-w-sm w-full">
              <div className="relative w-full h-[420px] rounded-[2rem] overflow-hidden bg-base-300 shadow-inner group">
                <Image
                  src={kawserBanner}
                  alt="Kawser Ahamad"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 24rem"
                  priority
                />
              </div>

              {/* Bottom Overlapping Name Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-base-100 border border-base-300 shadow-lg px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-base-content whitespace-nowrap z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Kawser Ahamad
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Stats */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                About <span className="text-accent">Me</span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-base-content/80 text-base md:text-lg leading-relaxed">
              <p>
                My journey started with problem-solving and competitive
                programming, learning to create something impactful out of code.
                That same passion now fuels my work as a Full Stack / MERN
                Developer.
              </p>
              <p>
                I build fast, clean, and impactful web apps with React, Next.js,
                Node.js, and MongoDB turning ideas into reality, one perfect
                pixel and line of code at a time.
              </p>
            </motion.div>

            {/* Pill Badges (Location & Email) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 shadow-sm text-sm font-semibold text-base-content/80">
                <HiOutlineLocationMarker className="text-accent text-lg" />
                Sylhet, Bangladesh
              </div>
              <a
                href="mailto:kawserswe@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 shadow-sm text-sm font-semibold text-base-content/80 hover:border-accent transition-colors">
                <HiOutlineMail className="text-accent text-lg" />
                kawserswe@gmail.com
              </a>
            </motion.div>

            {/* 3 Stats Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm text-center hover:shadow-md transition-shadow">
                <p className="text-2xl sm:text-3xl font-extrabold text-accent">
                  10+
                </p>
                <p className="text-xs sm:text-sm text-base-content/60 font-medium mt-1">
                  Projects Completed
                </p>
              </div>
              <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm text-center hover:shadow-md transition-shadow">
                <p className="text-2xl sm:text-3xl font-extrabold text-accent">
                  200+
                </p>
                <p className="text-xs sm:text-sm text-base-content/60 font-medium mt-1">
                  CF Problems Solved
                </p>
              </div>
              <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm text-center hover:shadow-md transition-shadow">
                <p className="text-2xl sm:text-3xl font-extrabold text-accent">
                  3.60
                </p>
                <p className="text-xs sm:text-sm text-base-content/60 font-medium mt-1">
                  CGPA
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SECTION 2: My Services                                       
        
        */}
        <motion.div
          className="pt-4 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              My <span className="text-accent">Services</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-2xl">
                <FaFigma />
              </div>
              <div>
                <h4 className="text-xl font-bold text-base-content mb-2">
                  Website Design
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  I create intuitive, visually engaging UI/UX designs with Figma
                  and other modern design tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-2xl">
                <HiOutlineCode />
              </div>
              <div>
                <h4 className="text-xl font-bold text-base-content mb-2">
                  Website Development
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Responsive, high-performance websites using React, Next.js,
                  Node.js, and Tailwind CSS.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center text-2xl">
                <HiOutlineServer />
              </div>
              <div>
                <h4 className="text-xl font-bold text-base-content mb-2">
                  Deployment
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Secure hosting solutions with CI/CD, cloud platforms, REST
                  APIs, and database integrations.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* SECTION 3: Experience & Education                             */}

        <motion.div
          className="pt-8 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          <motion.div className="text-center space-y-3" variants={itemVariants}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider">
              MY HISTORY
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Experience & <span className="text-accent">Education</span>
            </h3>
            <p className="text-base-content/70 text-sm md:text-base max-w-md mx-auto">
              A quick look at where I&apos;ve studied and my software
              development focus.
            </p>
            <div className="pt-2">
              <a
                href="https://drive.google.com/file/d/1kgOihl9f-zhSGBW76bB6SsHe_Nrz-Zeq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent rounded-full text-accent-content font-bold px-6 shadow-md hover:shadow-accent/40 gap-2">
                <HiDownload className="text-lg" />
                Download Full Resume
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Work & Project Experience */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-base-content flex items-center gap-2 mb-4">
                <HiOutlineBriefcase className="text-accent text-2xl" />
                Development Experience
              </h4>

              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h5 className="font-bold text-lg text-base-content">
                      Full-Stack Web Developer
                    </h5>
                    <p className="text-xs text-accent font-semibold">
                      Self-Driven / Project-Based
                    </p>
                  </div>
                  <span className="badge badge-accent badge-sm font-semibold px-2.5 py-1">
                    2024 - Present
                  </span>
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed pt-1">
                  Built 10+ fast, clean, and responsive full-stack applications
                  using Next.js, React, Node.js, Express, and MongoDB with
                  integrated payments and authentication.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h5 className="font-bold text-lg text-base-content">
                      Competitive Programmer & C++ Solver
                    </h5>
                    <p className="text-xs text-accent font-semibold">
                      Codeforces & Online Judges
                    </p>
                  </div>
                  <span className="badge badge-outline badge-accent badge-sm font-semibold px-2.5 py-1">
                    2024 - Present
                  </span>
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed pt-1">
                  Solved 200+ algorithmic challenges on Codeforces in C++,
                  specializing in core data structures, graph algorithms, and
                  time/space complexity optimization.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-base-content flex items-center gap-2 mb-4">
                <HiOutlineAcademicCap className="text-accent text-2xl" />
                Education
              </h4>

              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h5 className="font-bold text-lg text-base-content">
                      B.Sc. in Software Engineering
                    </h5>
                    <p className="text-xs text-accent font-semibold">
                      Metropolitan University, Sylhet
                    </p>
                  </div>
                  <span className="badge badge-accent badge-sm font-semibold px-2.5 py-1">
                    2024 - 2028 (Expected)
                  </span>
                </div>
                <p className="text-xs font-semibold text-emerald-500 pt-1">
                  CGPA: 3.60 / 4.00
                </p>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Coursework: Data Structures & Algorithms, Object-Oriented
                  Programming, Web Engineering, Software Architecture & Database
                  Management.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h5 className="font-bold text-lg text-base-content">
                      Higher Secondary Certificate (HSC)
                    </h5>
                    <p className="text-xs text-accent font-semibold">
                      Sunamgonj Govt College
                    </p>
                  </div>
                  <span className="badge badge-outline badge-accent badge-sm font-semibold px-2.5 py-1">
                    Science Group
                  </span>
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed pt-1">
                  Completed HSC in Science stream focusing on Mathematics,
                  Physics, Chemistry, and Information & Communication Technology
                  (ICT).
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 4: Programming Journey (Timeline)                     */}

        <motion.div
          className="pt-8 space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          <motion.div className="text-center space-y-2" variants={itemVariants}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider">
              MY STORY
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Programming <span className="text-accent">Journey</span>
            </h3>
          </motion.div>

          <div className="relative border-l-2 border-accent/30 ml-4 md:ml-12 pl-6 space-y-10">
            {/* Timeline Item 1 */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-base-200 group-hover:scale-125 transition-transform"></div>
              <div className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow max-w-2xl">
                <span className="badge badge-accent badge-sm font-semibold mb-2">
                  THE SPARK
                </span>
                <h4 className="text-xl font-bold text-base-content mb-1">
                  Curiosity for Building Things
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Started exploring C programming, algorithms, and logic
                  building. The excitement of turning problem statements into
                  running programs sparked a lifelong passion for software
                  engineering.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-base-200 group-hover:scale-125 transition-transform"></div>
              <div className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow max-w-2xl">
                <span className="badge badge-outline badge-accent badge-sm font-semibold mb-2">
                  2024
                </span>
                <h4 className="text-xl font-bold text-base-content mb-1">
                  Started B.Sc. in Software Engineering
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Enrolled at Metropolitan University, Sylhet (2024 - 2028).
                  Deepening core computer science foundations in Data
                  Structures, Algorithms, Object-Oriented Design, and Web
                  Systems.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-base-200 group-hover:scale-125 transition-transform"></div>
              <div className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow max-w-2xl">
                <span className="badge badge-accent badge-sm font-semibold mb-2">
                  2024
                </span>
                <h4 className="text-xl font-bold text-base-content mb-1">
                  Connected to Competitive Programming & C++
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Connected with competitive programming and solved 200+
                  algorithmic challenges on Codeforces in C++, refining
                  problem-solving efficiency and algorithmic thinking.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 4 */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-base-200 group-hover:scale-125 transition-transform"></div>
              <div className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow max-w-2xl">
                <span className="badge badge-outline badge-accent badge-sm font-semibold mb-2">
                  2024 - PRESENT
                </span>
                <h4 className="text-xl font-bold text-base-content mb-1">
                  Full-Stack MERN & Next.js Development
                </h4>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Built 10+ production-grade web applications including{" "}
                  <em>Fitness For Life</em>, <em>StudyNook</em>, and{" "}
                  <em>Book Hopper</em> with modern UI/UX, database architecture,
                  and authentication.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* SECTION 5: Bottom 3 Cards (Love, Goals, Hobbies)             */}

        <motion.div
          className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          {/* Card 1: Why I Love Building Software */}
          <motion.div
            variants={itemVariants}
            className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl">
                <FaHeart />
              </div>
              <h4 className="text-xl font-bold text-base-content">
                Why I Love Building Software
              </h4>
              <p className="text-sm text-base-content/70 leading-relaxed">
                I thrive on turning complex ideas into functional web products.
                Everyday coding is a chance to sharpen problem-solving skills
                and deliver seamless user experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="badge badge-sm badge-ghost font-medium">
                React
              </span>
              <span className="badge badge-sm badge-ghost font-medium">
                Next.js
              </span>
              <span className="badge badge-sm badge-ghost font-medium">
                Node.js
              </span>
              <span className="badge badge-sm badge-ghost font-medium">
                MongoDB
              </span>
              <span className="badge badge-sm badge-ghost font-medium">
                Tailwind
              </span>
            </div>
          </motion.div>

          {/* Card 2: Career Goals */}
          <motion.div
            variants={itemVariants}
            className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl">
                <FaBullseye />
              </div>
              <h4 className="text-xl font-bold text-base-content">
                Career Goals
              </h4>
              <ul className="space-y-2 text-sm text-base-content/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Grow into a Software Engineer role at a product-focused tech
                  company.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Deepen expertise in backend architecture, microservices, and
                  cloud systems.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Contribute actively to open-source developer tools and
                  software.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Hobbies & Interests */}
          <motion.div
            variants={itemVariants}
            className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl">
                <FaRocket />
              </div>
              <h4 className="text-xl font-bold text-base-content">
                Hobbies & Interests
              </h4>
              <ul className="space-y-2.5 text-sm text-base-content/70">
                <li className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-base-200 text-accent">
                    <SiCodeforces />
                  </span>
                  <span>Competitive Programming & Math Puzzles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-base-200 text-accent">
                    <FaLaptopCode />
                  </span>
                  <span>Building Full-Stack Web Projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-base-200 text-accent">
                    <HiOutlineCode />
                  </span>
                  <span>Exploring New Frameworks & Tech Trends</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
