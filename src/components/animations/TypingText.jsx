"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingText({
  text,
  className = "",
  typingSpeed = 50,
  delay = 0,
  showCursor = true,
  loop = false,
  onComplete
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => {
            setHasStarted(true);
            setIsTyping(true);
          }, delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutRef.current = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
        if (onComplete) onComplete();

        if (loop) {
          timeoutRef.current = setTimeout(() => {
            setDisplayedText("");
            currentIndex = 0;
            setIsTyping(true);
            typeNextChar();
          }, 2000);
        }
      }
    };

    typeNextChar();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTyping, hasStarted, text, typingSpeed, loop, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {showCursor && (
        <span
          className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse"
          style={{
            opacity: isTyping || loop ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      )}
    </span>
  );
}
