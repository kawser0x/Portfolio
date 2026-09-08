import React from "react";
import Image from "next/image";

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
      className="py-6 bg-base-200  flex items-center">
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
                      className="btn btn-accent btn-sm flex-1 font-semibold rounded-lg shadow-md hover:shadow-accent/40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-accent btn-sm flex-1 font-semibold rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
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
