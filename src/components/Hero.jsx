"use client";

import Image from "next/image";
import SplitText from "./animations/SplitText";
import TypingText from "./animations/TypingText";
import { scrollToElement } from "@/utils/smoothScroll";

export default function Hero() {
  const handleScrollClick = () => {
    scrollToElement("about");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Gradient Background Accents */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container-width text-center relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-background hover:ring-offset-4 transition-all duration-300"
               style={{
                 background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                 padding: '4px'
               }}>
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <Image
                src="/avatar.png"
                alt="Outhman Moumou"
                fill
                className="object-cover"
                priority
              />
            </div>
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
              Full-Stack Developer & DevOps Enthusiast
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
              className="px-6 py-3 border-2 border-transparent bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-foreground rounded-lg font-medium transition-all duration-200 hover:scale-105 relative group overflow-hidden"
              style={{
                borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1'
              }}
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-transparent bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-foreground rounded-lg font-medium transition-all duration-200 hover:scale-105 relative group overflow-hidden"
              style={{
                borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1'
              }}
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollClick}
            className="mt-12 animate-bounce cursor-pointer group transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-3 bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all"
            aria-label="Scroll to About section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className="w-6 h-6 stroke-current"
              style={{
                stroke: 'url(#gradient-scroll)'
              }}
            >
              <defs>
                <linearGradient id="gradient-scroll" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--secondary)" />
                </linearGradient>
              </defs>
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
