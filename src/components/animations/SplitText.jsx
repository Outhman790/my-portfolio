"use client";

import { useEffect, useRef, useState } from "react";

export default function SplitText({
  text,
  className = "",
  delay = 0,
  charDelay = 0.03
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const characters = text.split("");

  return (
    <span ref={ref} style={{ display: "inline" }}>
      {characters.map((char, index) => (
        <span
          key={index}
          className={`inline-block ${className}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s ${index * charDelay}s, transform 0.5s ${index * charDelay}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
