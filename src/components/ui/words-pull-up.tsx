"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, MotionValue, useReducedMotion } from "motion/react";
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

interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
}

interface ScrollRevealWordProps {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
}

function ScrollRevealWord({ word, index, totalWords, scrollYProgress }: ScrollRevealWordProps) {
  const wordProgressStart = (index / totalWords) * 0.85;
  const wordProgressEnd = Math.min(1, wordProgressStart + 0.15);
  
  // Word reveal opacity linking
  const opacity = useTransform(
    scrollYProgress,
    [wordProgressStart, wordProgressEnd],
    [0.2, 1]
  );

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block transition-opacity duration-75"
    >
      {word}
    </motion.span>
  );
}

export function ScrollRevealParagraph({ text, className }: ScrollRevealParagraphProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = useMemo(() => text.split(" "), [text]);
  const totalWords = words.length;

  const bypassAnimation = shouldReduceMotion || !mounted || isMobile;

  return (
    <p
      ref={containerRef}
      className={cn("leading-relaxed relative", className)}
    >
      {bypassAnimation ? (
        <span>{text}</span>
      ) : (
        <>
          {/* Screen reader content */}
          <span className="sr-only">{text}</span>
          
          {/* Accessible word map with opacity transforms */}
          <span aria-hidden="true" className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em] select-none">
            {words.map((word, index) => (
              <ScrollRevealWord
                key={index}
                word={word}
                index={index}
                totalWords={totalWords}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </span>
        </>
      )}
    </p>
  );
}
