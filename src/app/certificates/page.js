"use client";

import { useState } from "react";
import Link from "next/link";
import { certificates, certificateCategories } from "@/data/certificates";
import CertificateCard from "@/components/certificates/CertificateCard";

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");

  const categories = certificateCategories;

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
            {filteredAndSortedCerts.map((cert, index) => (
              <div key={cert.id} id={cert.id} className="scroll-mt-24">
                <CertificateCard
                  cert={cert}
                  index={index}
                  showFullDescription={true}
                />
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
