"use client";

import CircularProjectGallery from "./CircularProjectGallery";

export default function Projects() {
  const projects = [
    {
      title: "OGallery",
      description: "A modern, user-centric image gallery application built with React, Tailwind CSS, Express and AWS.",
      tech: ["React", "Tailwind CSS", "Express", "AWS"],
      demo: "#",
      github: "https://github.com/Outhman790/OGallery",
      stars: 1,
    },
    {
      title: "fil-rouge",
      description: "Final Year Project of SOLICODE - A comprehensive full-stack web application.",
      tech: ["PHP", "MySQL", "JavaScript"],
      demo: "#",
      github: "https://github.com/Outhman790/fil-rouge",
      stars: 0,
    },
    {
      title: "Budget Monitoring",
      description: "A financial tracking application to monitor and manage personal budgets effectively.",
      tech: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      github: "https://github.com/Outhman790/budget-monitoring",
      stars: 0,
    },
    {
      title: "DSA",
      description: "Data Structures and Algorithms implementations and practice problems.",
      tech: ["JavaScript", "Algorithms"],
      demo: "#",
      github: "https://github.com/Outhman790/DSA",
      stars: 0,
    },
    {
      title: "Library Management System",
      description: "Object-oriented PHP application for managing library resources and operations.",
      tech: ["PHP", "OOP", "JavaScript"],
      demo: "#",
      github: "https://github.com/Outhman790/Library-managment-with-PHP-OOP",
      stars: 0,
    },
    {
      title: "MealDB API",
      description: "Web application utilizing the MealDB API to browse and search recipes.",
      tech: ["JavaScript", "API", "HTML/CSS"],
      demo: "#",
      github: "https://github.com/Outhman790/MealDb-API-",
      stars: 0,
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5 backdrop-blur-2xl" />

      {/* Floating glass orbs - Optimized */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-2xl animate-pulse [animation-delay:1s]" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-xl animate-pulse [animation-delay:2s]" style={{ transform: 'translateZ(0)' }} />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              <span className="text-sm font-semibold text-secondary">Portfolio Showcase</span>
            </div>
          </div>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Explore my work through an interactive showcase. Navigate through projects to see details, technologies, and live demos.
          </p>
        </div>

        {/* Circular Project Gallery */}
        <CircularProjectGallery projects={projects} />

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary font-semibold rounded-xl hover:bg-secondary/30 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
