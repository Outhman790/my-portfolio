"use client";

import Image from "next/image";
import SplitText from "./animations/SplitText";
import TypingText from "./animations/TypingText";

export default function Hero() {
  // Easing function for smooth scroll
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const smoothScrollTo = (targetPosition, duration = 800) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easing);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScrollClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80; // Navbar height
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      smoothScrollTo(offsetPosition);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-width text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
            <Image
              src="/avatar.png"
              alt="Outhman Moumou"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <SplitText
                text="Outhman Moumou"
                delay={0.3}
                charDelay={0.05}
              />
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
              Full-Stack Web Developer & Junior DevOps/Cloud Engineer
            </p>
            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl">
              <TypingText
                text="From code to cloud: I build clean, scalable, and highly available web applications."
                typingSpeed={40}
                delay={1.5}
                showCursor={true}
              />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-border hover:border-primary text-foreground hover:text-primary rounded-lg font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollClick}
            className="mt-12 animate-bounce cursor-pointer group transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
            aria-label="Scroll to About section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
