"use client";

import { certificates } from "@/data/certificates";
import CertificateGrid from "./CertificateGrid";

export default function CertificatesSection() {
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

        {/* Certificates Grid - Featured Only */}
        <CertificateGrid certificates={certificates} featuredOnly={true} showFullDescription={false} />

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
