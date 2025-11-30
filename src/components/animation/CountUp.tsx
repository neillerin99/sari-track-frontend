"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface CountUpProps {
  target?: number;
  duration?: number;
  text?: string;
}

export default function CountUp({
  target = 100,
  duration = 2,
  text = "",
}: CountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (value) => setDisplay(value));
    const controls = animate(count, target, { duration });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target, duration]);

  return (
    <motion.div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#60a5fa",
      }}
    >
      {display}
      {text}
    </motion.div>
  );
}
