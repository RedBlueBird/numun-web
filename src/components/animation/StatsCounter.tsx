"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/**
 * Animated counter that counts up to a target value when in view
 */
export default function StatsCounter({
  value,
  suffix = "",
  className = "",
  duration = 1.5,
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        setDisplayValue(value);
      } else {
        motionValue.set(value);
      }
    }
  }, [isInView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });

      return () => unsubscribe();
    }
  }, [springValue, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
