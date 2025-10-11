"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");

  const certificates = [
    {
      id: "terraform-aws",
      title: "Essential Terraform in AWS",
      issuer: "LinkedIn Learning",
      date: "Sep 2025",
      category: "Cloud",
      skills: ["Terraform", "AWS"],
      description: "Master infrastructure as code with Terraform on AWS. Learn to automate cloud resource provisioning and management efficiently.",
      featured: true,
      credentialUrl: "#",
      image: "/Essential Terraform in AWS.jpg",
    },
    {
      id: "devops-cicd",
      title: "DevOps Foundations: Continuous Delivery/Continuous Integration",
      issuer: "LinkedIn Learning",
      date: "Jun 2025",
      category: "DevOps",
      skills: ["CI/CD", "DevOps"],
      description: "Comprehensive guide to CI/CD pipelines and DevOps practices. Build automated workflows for seamless software delivery.",
      featured: true,
      credentialUrl: "#",
      image: "/Devops Foundations Continous Delivery Continuous Integration.jpg",
    },
    {
      id: "nodejs-express-website",
      title: "Building a Website with Node.js and Express.js",
      issuer: "LinkedIn Learning",
      date: "Feb 2025",
      category: "Backend",
      skills: ["Node.js", "Express"],
      description: "Create dynamic web applications using Node.js and Express framework. Learn routing, middleware, and server-side development.",
      featured: true,
      credentialUrl: "#",
      image: "/Building a Website with Node js and Express js.jpg",
    },
    {
      id: "express-essentials",
      title: "Express Essentials: Build Powerful Web Apps with Node.js",
      issuer: "LinkedIn Learning",
      date: "Feb 2025",
      category: "Backend",
      skills: ["Node.js", "Express"],
      description: "Deep dive into Express.js fundamentals. Build robust RESTful APIs and scalable backend applications with best practices.",
      featured: false,
      credentialUrl: "#",
      image: "/Express Essentials Build Powerful Web Apps with Node js.jpg",
    },
    {
      id: "ai-music-visualizer",
      title: "Building a Generative AI Music Visualizer with JavaScript and React",
      issuer: "LinkedIn Learning",
      date: "Dec 2024",
      category: "Frontend",
      skills: ["React", "Generative AI"],
      description: "Combine AI and React to create interactive music visualizations. Explore generative algorithms and real-time rendering techniques.",
      featured: true,
      credentialUrl: "#",
      image: "/Building a Generative AI Music Visualizer with Javascript and React.jpg",
    },
    {
      id: "js-async",
      title: "JavaScript: Async",
      issuer: "LinkedIn Learning",
      date: "Dec 2024",
      category: "Frontend",
      skills: ["JavaScript"],
      description: "Master asynchronous JavaScript patterns including promises, async/await, and callbacks for efficient code execution.",
      featured: false,
      credentialUrl: "#",
      image: "/Javascript Async.jpg",
    },
    {
      id: "react-essential",
      title: "React.js Essential Training",
      issuer: "LinkedIn Learning",
      date: "Dec 2024",
      category: "Frontend",
      skills: ["React"],
      description: "Complete React.js foundation course. Learn components, hooks, state management, and modern React development patterns.",
      featured: true,
      credentialUrl: "#",
      image: "/React.js Essentials Training.jpg",
    },
  ];

  const categories = ["All", "Cloud", "DevOps", "Frontend", "Backend", "Data Science"];

  // Filter and sort certificates
  const filteredAndSortedCerts = certificates
    .filter((cert) => activeCategory === "All" || cert.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "date-desc") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "date-asc") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container-width">
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

          <h1 className="mb-4">All Certifications</h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Complete collection of professional certifications and courses demonstrating continuous learning across cloud platforms, DevOps practices, and modern web technologies.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-foreground/60">
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <span>{filteredAndSortedCerts.length} Verified Certifications</span>
          </div>
        </div>
      </section>

      {/* Filters & Certificates */}
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
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
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
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedCerts.map((cert) => (
              <div
                key={cert.id}
                id={cert.id}
                className="group bg-background/80 backdrop-blur-sm md:backdrop-blur-md rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 scroll-mt-24"
                style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}
              >
                {/* Certificate Image */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-16 h-16 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg border border-white/20">
                      {cert.category}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {cert.featured && (
                    <div className="absolute top-3 left-3">
                      <div className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg border border-white/20">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Certificate Details */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    {/* Verified Badge */}
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Issuer and Date */}
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="text-foreground/40">•</span>
                    <span>{cert.date}</span>
                  </div>

                  {/* Full Description */}
                  <p className="text-sm text-foreground/70 mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Credential Button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-200 group/btn"
                  >
                    <span>View Credential</span>
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
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredAndSortedCerts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60 text-lg">No certificates found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
