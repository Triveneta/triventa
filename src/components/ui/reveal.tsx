import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number; // milliseconds
}

const Reveal = ({
  children,
  className = "",
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  delay = 0,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && observer && el) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const base =
    "will-change-transform transform-gpu transition-all duration-700 ease-out " +
    (visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98");

  const style: React.CSSProperties = {};
  if (delay) style.transitionDelay = `${delay}ms`;

  return (
    <div ref={ref} className={`${base} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
