import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projectsData = [
  {
    id: 1,
    title: "Fitness For Life",
    subtitle: "Full-Stack Fitness & Wellness Platform",
    description:
      "A comprehensive fitness platform allowing users to discover and book workout sessions with verified trainers via Stripe checkout, engage in community forums, and track wellness goals.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Node.js", "MongoDB"],
    liveUrl: "https://fitness-for-life-client.vercel.app/",
    githubUrl: "https://github.com/kawser0x/Fitness-For-Life-Client",
    category: "Full-Stack App",
  },
  {
    id: 2,
    title: "StudyNook",
    subtitle: "Private Study Space Booking System",
    description:
      "An intuitive reservation platform for university students to search and instantly book quiet, soundproof library study pods and group rooms with real-time slot conflict checks.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "Node.js", "MongoDB"],
    liveUrl: "https://studynook-hazel.vercel.app/",
    githubUrl: "https://github.com/kawser0x/studynook",
    category: "Web Application",
  },
  {
    id: 3,
    title: "Book Hopper",
    subtitle: "Online Book Borrowing & Library Platform",
    description:
      "A modern digital book borrowing platform enabling users to explore literature, technology, and science books, manage borrowing history, and review reads across all devices.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "Express", "MongoDB"],
    liveUrl: "https://book-hopper-k.vercel.app/",
    githubUrl: "https://github.com/kawser0x/Book-Hopper-k",
    category: "E-Learning Platform",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-6 bg-base-200 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto text-lg">
            Here are some of my recent full-stack web applications featuring
            modern frameworks, secure authentication, and real-time backend
            integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 flex flex-col overflow-hidden group hover:-translate-y-2">
              {/* Project Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-base-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className="badge badge-accent shadow-md font-semibold px-3 py-2 text-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="card-title text-2xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-medium text-base-content/60 mb-3">
                    {project.subtitle}
                  </h4>

                  <p className="text-base-content/80 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-base-200 text-base-content/80 text-xs px-2.5 py-1 rounded-md font-medium border border-base-300/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-base-200">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent btn-sm flex-1 font-semibold rounded-lg shadow-md hover:shadow-accent/40 flex items-center justify-center gap-1.5">
                      <HiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-accent btn-sm flex-1 font-semibold rounded-lg flex items-center justify-center gap-1.5">
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
