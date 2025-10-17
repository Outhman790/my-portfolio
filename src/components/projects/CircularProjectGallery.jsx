"use client";

import { useState, useEffect, useCallback } from "react";
import ProjectCard from "./ProjectCard";

export default function CircularProjectGallery({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, projects.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, projects.length]);

  const handleDotClick = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left - go to next
      handleNext();
    } else {
      // Swiped right - go to previous
      handlePrev();
    }

    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  const getPositionClass = (index) => {
    const diff = (index - activeIndex + projects.length) % projects.length;

    if (diff === 0) return "active-center";
    if (diff === 1 || diff === -5) return "right-1";
    if (diff === 2 || diff === -4) return "right-2";
    if (diff === projects.length - 1 || diff === -1) return "left-1";
    if (diff === projects.length - 2 || diff === -2) return "left-2";
    return "hidden-item";
  };

  const getZIndex = (positionClass) => {
    switch (positionClass) {
      case "active-center":
        return "z-30";
      case "left-1":
      case "right-1":
        return "z-20";
      case "left-2":
      case "right-2":
        return "z-10";
      default:
        return "z-0";
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center py-12">
      {/* Main Gallery Container */}
      <div
        className="relative w-full max-w-7xl h-[550px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Project Cards */}
        {projects.map((project, index) => {
          const positionClass = getPositionClass(index);
          const isActive = index === activeIndex;
          const zIndex = getZIndex(positionClass);

          return (
            <div
              key={project.id || index}
              className={`gallery-item ${positionClass} ${zIndex}`}
            >
              <ProjectCard
                project={project}
                isActive={isActive}
                showActions={true}
              />
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 p-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full hover:bg-primary/30 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 p-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full hover:bg-primary/30 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={isAnimating}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .gallery-item {
          position: absolute;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          width: 400px;
          height: 500px;
        }

        .active-center {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .left-1 {
          left: 15%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0.75);
          opacity: 0.5;
        }

        .left-2 {
          left: 5%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0.6);
          opacity: 0.3;
        }

        .right-1 {
          left: 85%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0.75);
          opacity: 0.5;
        }

        .right-2 {
          left: 95%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0.6);
          opacity: 0.3;
        }

        .hidden-item {
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0.5);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .gallery-item {
            width: 320px;
            height: 480px;
          }

          .left-1,
          .left-2,
          .right-1,
          .right-2 {
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  );
}
