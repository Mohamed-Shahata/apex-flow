"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);

  // Format the raw motion value into the final output string (decimals + suffix)
  const formatted = useTransform(count, (latest) => {
    return latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      });
      return () => controls.stop();
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{formatted}</motion.span>;
}
