"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDetailsModal from "@/components/projects/ProjectDetailsModal";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("stars");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = projectCategories;

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Filter and sort projects
  const filteredAndSortedProjects = projects
    .filter((project) => activeCategory === "All" || project.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "stars") {
        return b.stars - a.stars;
      } else if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
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
              <option value="date">Newest First</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map((project, index) => (
              <div key={project.id} id={project.id} className="scroll-mt-24">
                <ProjectCard
                  project={project}
                  isActive={true}
                  showActions={true}
                  onCardClick={handleCardClick}
                />
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

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </main>
  );
}
