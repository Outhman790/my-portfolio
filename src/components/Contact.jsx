"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToElement } from "@/utils/smoothScroll";

export default function Contact() {
  const [theme, setTheme] = useState(null);

  // Detect theme changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme) {
        setTheme(currentTheme);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Outhman790",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/outhman-moumou",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:moumou.outhman@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToElement(id);
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-background via-muted/30 to-background border-t border-border pt-20 pb-8">
      <div className="container-width">
        {/* Centered Brand Section */}
        <div className="text-center mb-16">
          {theme && (
            <Link href="/" className="inline-block mb-6">
              <Image
                src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="Logo"
                width={140}
                height={140}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          )}
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Full-stack developer passionate about building modern, scalable web applications and cloud solutions. Specializing in React, Next.js, Node.js, and AWS infrastructure.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 max-w-sm mx-auto">
              {navLinks.map((link) => (
                <li key={link.name} className="text-left">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-foreground/60 hover:text-primary transition-all hover:scale-110 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media - Centered */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
              Let's Connect
            </h3>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start gap-3 text-foreground/70 hover:text-primary transition-all group hover:scale-105"
                >
                  <span className="p-3 bg-gradient-to-br from-muted to-muted/50 rounded-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all shadow-sm flex-shrink-0">
                    {social.icon}
                  </span>
                  <span className="font-medium text-left">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Ready to collaborate? Let's discuss your next project.
            </p>
            <a
              href="mailto:moumou.outhman@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-transparent bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-foreground rounded-lg font-medium transition-all hover:scale-105 relative group overflow-hidden"
              style={{
                borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Send Message</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © 2025 Outhman Moumou. Built with Next.js & Tailwind CSS.
          </p>
          <button
            onClick={() => scrollToElement("home")}
            className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm group"
          >
            <span>Back to top</span>
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
