"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
  once?: boolean;
}

export function WordsPullUp({
  text,
  className,
  showAsterisk = false,
  delay = 0,
  once = true,
}: WordsPullUpProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once });
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1] as const,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("inline-flex flex-wrap justify-center gap-x-[0.25em]", className)}
    >
      {words.map((word, idx) => {
        const isLastWord = idx === words.length - 1;
        return (
          <motion.span
            key={idx}
            variants={childVariants}
            className="inline-block relative whitespace-nowrap"
          >
            {word}
            {isLastWord && showAsterisk && (
              <span className="absolute top-[-0.15em] -right-[0.35em] text-[0.45em] font-light text-primary pointer-events-none select-none">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

interface MultiStyleSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: MultiStyleSegment[];
  className?: string;
  delay?: number;
  once?: boolean;
}

export function WordsPullUpMultiStyle({
  segments,
  className,
  delay = 0,
  once = true,
}: WordsPullUpMultiStyleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once });

  // Flatten segments into a list of words, preserving their specific classes
  const wordsList = useMemo(() => {
    let globalIndex = 0;
    const list: Array<{
      word: string;
      className?: string;
      globalIndex: number;
    }> = [];

    segments.forEach((seg) => {
      const words = seg.text.split(" ");
      words.forEach((w) => {
        if (w.trim() !== "") {
          list.push({
            word: w,
            className: seg.className,
            globalIndex: globalIndex++,
          });
        }
      });
    });

    return list;
  }, [segments]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1] as const,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]", className)}
    >
      {wordsList.map((item) => (
        <motion.span
          key={item.globalIndex}
          variants={childVariants}
          className={cn("inline-block whitespace-nowrap", item.className)}
        >
          {item.word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// React useMemo helper
import { useMemo } from "react";

interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
}

export function ScrollRevealParagraph({ text, className }: ScrollRevealParagraphProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = useMemo(() => text.split(""), [text]);
  const totalChars = chars.length;

  return (
    <p
      ref={containerRef}
      className={cn("leading-relaxed select-none relative", className)}
      aria-label={text}
    >
      {/* Screen reader content */}
      <span className="sr-only">{text}</span>
      
      {/* Accessible character map with opacity transforms */}
      <span aria-hidden="true" className="flex flex-wrap justify-center gap-x-[0.05em] gap-y-[0.1em]">
        {chars.map((char, index) => {
          const charProgressStart = (index / totalChars) * 0.85;
          const charProgressEnd = Math.min(1, charProgressStart + 0.15);
          
          // Character reveal opacity linking
          const opacity = useTransform(
            scrollYProgress,
            [charProgressStart, charProgressEnd],
            [0.2, 1]
          );

          // Render spaces seamlessly
          if (char === " ") {
            return (
              <span key={index} className="inline-block">
                &nbsp;
              </span>
            );
          }

          return (
            <motion.span
              key={index}
              style={{ opacity }}
              className="inline-block transition-opacity duration-75"
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    </p>
  );
}
