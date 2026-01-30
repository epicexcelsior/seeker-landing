"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/hooks";

export function GlobalEffects() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-seeker-red via-seeker-gold to-seeker-blue"
          style={{ width: `${scrollProgress * 100}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Matrix Rain Effect - Minimal */}
      <MatrixRain />

      {/* Grunge Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[998] opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}

function MatrixRain() {
  const [columns, setColumns] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Reduced column count for performance
    const cols = Array.from({ length: 8 }, (_, i) => i);
    // Use requestAnimationFrame to avoid synchronous setState
    requestAnimationFrame(() => {
      setColumns(cols);
    });

    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-[0.08]">
      {columns.map((col) => (
        <MatrixColumn key={col} index={col} />
      ))}
    </div>
  );
}

function MatrixColumn({ index }: { index: number }) {
  const chars = "0123456789ABCDEF";
  const [text, setText] = useState("");
  const [y, setY] = useState(-100);

  useEffect(() => {
    let frame = 0;
    const speed = 0.5 + Math.random() * 0.5;
    const interval = setInterval(() => {
      frame++;
      if (frame % 3 === 0) {
        setText(
          Array.from({ length: 15 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join(" ")
        );
      }
      setY((prev) => {
        const newY = prev + speed;
        return newY > 120 ? -20 : newY;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute text-seeker-gold/40 font-mono text-xs leading-[1.2] whitespace-pre"
      style={{
        left: `${10 + index * 12}%`,
        top: `${y}%`,
        textShadow: "0 0 10px rgba(212,175,55,0.5)",
      }}
    >
      {text}
    </div>
  );
}
