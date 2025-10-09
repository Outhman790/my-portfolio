"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import Link from "next/link";
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("stars");

  const projects = [
    {
      id: "ogallery",
      title: "OGallery",
      description: "A modern, user-centric image gallery application built with React, Tailwind CSS, Express and AWS. Features include image upload, gallery management, and cloud storage integration.",
      tech: ["React", "Tailwind CSS", "Express", "AWS"],
      category: "Full Stack",
      demo: "#",
      github: "https://github.com/Outhman790/OGallery",
      stars: 1,
      featured: true,
    },
    {
      id: "fil-rouge",
      title: "fil-rouge",
      description: "Final Year Project of SOLICODE - A comprehensive full-stack web application demonstrating advanced web development concepts and best practices.",
      tech: ["PHP", "MySQL", "JavaScript"],
      category: "Full Stack",
      demo: "#",
      github: "https://github.com/Outhman790/fil-rouge",
      stars: 0,
      featured: true,
    },
    {
      id: "budget-monitoring",
      title: "Budget Monitoring",
      description: "A financial tracking application to monitor and manage personal budgets effectively. Track expenses, set goals, and visualize spending patterns.",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "Frontend",
      demo: "#",
      github: "https://github.com/Outhman790/budget-monitoring",
      stars: 0,
      featured: false,
    },
    {
      id: "dsa",
      title: "DSA",
      description: "Data Structures and Algorithms implementations and practice problems. Includes solutions to common coding challenges and algorithm optimizations.",
      tech: ["JavaScript", "Algorithms"],
      category: "Algorithms",
      demo: "#",
      github: "https://github.com/Outhman790/DSA",
      stars: 0,
      featured: false,
    },
    {
      id: "library-management",
      title: "Library Management System",
      description: "Object-oriented PHP application for managing library resources and operations. Features include book management, member tracking, and borrowing system.",
      tech: ["PHP", "OOP", "JavaScript"],
      category: "Backend",
      demo: "#",
      github: "https://github.com/Outhman790/Library-managment-with-PHP-OOP",
      stars: 0,
      featured: false,
    },
    {
      id: "mealdb-api",
      title: "MealDB API",
      description: "Web application utilizing the MealDB API to browse and search recipes. Features recipe search, filtering, and detailed recipe information.",
      tech: ["JavaScript", "API", "HTML/CSS"],
      category: "Frontend",
      demo: "#",
      github: "https://github.com/Outhman790/MealDb-API-",
      stars: 0,
      featured: false,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Algorithms"];

  // Filter and sort projects
  const filteredAndSortedProjects = projects
    .filter((project) => activeCategory === "All" || project.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "stars") {
        return b.stars - a.stars;
      } else if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ThemeToggle />
      <section className="section-padding bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
        {/* Floating glass orbs - Optimized */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-2xl animate-pulse [animation-delay:1s]" style={{ transform: 'translateZ(0)' }} />

        <div className="container-width relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back to Home</span>
          </Link>

          <h1 className="mb-4">All Projects</h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Complete collection of my development projects showcasing expertise in full-stack development, modern web technologies, and problem-solving through code.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
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
              <span>{filteredAndSortedProjects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-secondary"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Open Source on GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="section-padding">
        <div className="container-width">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-secondary to-primary text-white shadow-lg"
                      : "bg-muted/50 text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="stars">Most Starred</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="group bg-background/80 backdrop-blur-sm md:backdrop-blur-md rounded-2xl border border-border/50 hover:border-secondary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden scroll-mt-24"
                style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}
              >
                {/* Project Image/Preview */}
                <div className="relative w-full h-48 bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/20 flex items-center justify-center overflow-hidden">
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10" />

                  {/* Icon */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-16 h-16 text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </div>

                  {/* GitHub Stars Badge */}
                  {project.stars > 0 && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1 border border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.stars}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg border border-white/20">
                      {project.category}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute bottom-3 left-3">
                      <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg border border-white/20">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary/10 backdrop-blur-sm text-secondary text-xs font-medium rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-secondary/50 active:scale-95 transition-all duration-200 group/btn"
                    >
                      <span>Live Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-foreground/5 backdrop-blur-sm border border-border text-foreground text-sm font-medium rounded-lg hover:bg-foreground/10 hover:border-foreground/30 hover:shadow-lg active:scale-95 transition-all duration-200"
                    >
                      <span>GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
