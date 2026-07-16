"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const timer = setTimeout(() => setHidden(true), 700);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`loading-screen ${mounted ? "is-fading" : ""}`}>
      <span className="loading-mark">Apex Flow</span>
    </div>
  );
}
