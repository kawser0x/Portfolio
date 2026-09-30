"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "FRONTEND",
    skills: [
      { name: "HTML5", percent: 95, icon: <FaHtml5 className="text-orange-500 text-xl" /> },
      { name: "CSS3", percent: 90, icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "JavaScript", percent: 92, icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      { name: "React", percent: 90, icon: <FaReact className="text-cyan-400 text-xl" /> },
      { name: "Next.js", percent: 88, icon: <SiNextdotjs className="text-base-content text-xl" /> },
      { name: "Tailwind CSS", percent: 92, icon: <SiTailwindcss className="text-sky-400 text-xl" /> },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", percent: 85, icon: <FaNodeJs className="text-green-500 text-xl" /> },
      { name: "Express.js", percent: 82, icon: <SiExpress className="text-base-content text-xl" /> },
    ],
  },
  {
    category: "DATABASE",
    skills: [
      { name: "MongoDB", percent: 85, icon: <SiMongodb className="text-emerald-500 text-xl" /> },
      { name: "MySQL / SQL", percent: 75, icon: <SiMysql className="text-blue-600 text-xl" /> },
    ],
  },
  {
    category: "LANGUAGES",
    skills: [
      { name: "C Language", percent: 85, icon: <SiC className="text-blue-500 text-xl" /> },
      { name: "C++ (Codeforces)", percent: 85, icon: <SiCplusplus className="text-blue-700 text-xl" /> },
      { name: "JavaScript", percent: 92, icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      { name: "Python", percent: 75, icon: <FaPython className="text-yellow-500 text-xl" /> },
      { name: "Java", percent: 70, icon: <FaJava className="text-red-500 text-xl" /> },
    ],
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Git", percent: 90, icon: <FaGitAlt className="text-orange-600 text-xl" /> },
      { name: "GitHub", percent: 90, icon: <FaGithub className="text-base-content text-xl" /> },
      { name: "VS Code", percent: 95, icon: <VscVscode className="text-blue-500 text-xl" /> },
      { name: "Figma", percent: 70, icon: <FaFigma className="text-purple-500 text-xl" /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  let globalIndex = 0;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 bg-base-200 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider mb-3">
            WHAT I KNOW
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Professional <span className="text-accent">Skillset</span>
          </h2>
          <p className="text-base-content/70 max-w-xl mx-auto text-base">
            Technologies and tools I use to design, build, and ship complete web applications.
          </p>
        </div>

        {/* 2-Column Responsive Grid Layout (1 col sm, 2 col md/lg) */}
        <div className="grid grid-cols-1  gap-8 items-start">
          {skillCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className={`transform transition-all duration-700 ease-out ${
                group.category === "Tools" ? "md:col-span-3" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${groupIdx * 120}ms` }}>
              <h3 className="text-xl font-bold mb-4 text-base-content flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-pulse"></span>
                {group.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {group.skills.map((skill) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div
                      key={skill.name}
                      className={`bg-base-100 p-4 rounded-2xl border border-base-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transform transition-all duration-500 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      }`}
                      style={{ transitionDelay: `${currentIndex * 50}ms` }}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2.5">
                          <span>{skill.icon}</span>
                          <span className="font-bold text-sm text-base-content">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-base-content/60">
                          {skill.percent}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-base-200 h-2 rounded-full overflow-hidden mt-2.5">
                        <div
                          className="bg-accent h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.percent}%` : "0%",
                            transitionDelay: `${currentIndex * 50 + 150}ms`,
                          }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
