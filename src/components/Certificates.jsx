"use client";

import { useState } from "react";
import Image from "next/image";

export default function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      image: "/Building a Website with Node.js and Express js.jpg",
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
      image: "/Express Essentials Build Powerful Web Apps with Node.js.jpg",
    },
    {
      id: "ai-music-visualizer",
      title: "Building a Generative AI Music Visualizer with JavaScript and React",
      issuer: "LinkedIn Learning",
      date: "Dec 2024",
      category: "Frontend",
      skills: ["React", "Generative AI"],
      description: "Combine AI and React to create interactive music visualizations. Explore generative algorithms and real-time rendering techniques.",
      featured: false,
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
    }
  ];

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 backdrop-blur-2xl" />

      {/* Floating glass orbs - Optimized */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-2xl animate-pulse [animation-delay:1s]" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-xl animate-pulse [animation-delay:2s]" style={{ transform: 'translateZ(0)' }} />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <span className="text-sm font-semibold text-primary">Verified Credentials</span>
            </div>
          </div>
          <h2 className="mb-4">Certifications & Awards</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across cloud platforms, DevOps practices, and modern web technologies.
          </p>
        </div>

        {/* Certificates Grid - Simple 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.filter(cert => cert.featured).map((cert, index) => (
            <div
              key={cert.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card */}
              <div className="relative w-full h-full">
                <div
                  className={`relative bg-background/80 backdrop-blur-sm md:backdrop-blur-md rounded-2xl p-4 lg:p-6 border transition-all duration-300 h-full flex flex-col overflow-hidden ${
                    hoveredIndex === index
                      ? "-translate-y-1 shadow-xl border-primary/30"
                      : "shadow-lg border-border/50"
                  }`}
                  style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Certificate Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden transition-all duration-300 shadow-lg">
                        {/* Subtle shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10" />

                        {/* Image or Placeholder */}
                        <div className="relative w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20">
                          {cert.image ? (
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                        {/* Category Badge - Glassmorphic */}
                        <div className="absolute bottom-2 right-2 z-20">
                          <div className="px-2.5 py-1 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap border border-white/20">
                            {cert.category}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="flex flex-col">
                      {/* Title and Verified Badge */}
                      <div className="mb-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-lg line-clamp-2">
                            {cert.title}
                          </h3>

                          {/* Verified Badge - Glassmorphic with wiggle */}
                          <div className="flex-shrink-0">
                            <div className={`flex items-center gap-1 px-2 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 transition-transform duration-200 ${
                              hoveredIndex === index ? "animate-wiggle" : ""
                            }`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-3 h-3 text-primary"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Issuer and Date */}
                        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/60 mb-3">
                          <span className="font-medium">{cert.issuer}</span>
                          <span className="text-foreground/40">•</span>
                          <span>{cert.date}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-foreground/70 line-clamp-2 mb-3">
                          {cert.description}
                        </p>

                        {/* Read More Link */}
                        <a
                          href={`/certificates#${cert.id}`}
                          className="text-sm text-primary hover:text-primary-hover transition-colors duration-200 inline-flex items-center gap-1 mb-4"
                        >
                          <span>Read more</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </a>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-primary/10 backdrop-blur-sm text-primary text-xs font-medium rounded-full hover:bg-primary/20 hover:scale-105 transition-all duration-200 border border-primary/20"
                            style={{
                              animation: `fadeInUp 0.3s ease-out ${idx * 0.1}s both`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* View Credential Button */}
                      <div>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium rounded-lg hover:bg-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200 group/btn"
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
                  </div>

                  {/* Decorative corner accent - subtle grow */}
                  <div className={`absolute top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 ${
                    hoveredIndex === index ? "w-12 h-12 border-primary/30" : "w-6 h-6 border-primary/10"
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="text-center mt-12">
          <a
            href="/certificates"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-semibold rounded-xl hover:bg-primary/30 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>View All Certificates</span>
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

        {/* Custom Micro-interaction Animations */}
        <style jsx>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-3deg); }
            75% { transform: rotate(3deg); }
          }

          .animate-wiggle {
            animation: wiggle 0.5s ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
}
