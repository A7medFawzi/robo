"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CursorLightProps = {
  className?: string;
  size?: number;
};

export function CursorLight({ className, size = 420 }: CursorLightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -9999, y: -9999 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = ref.current?.parentElement;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute z-[4] rounded-full opacity-0 blur-3xl transition-opacity duration-200",
        visible && "opacity-100",
        className
      )}
      style={{
        width: size,
        height: size,
        left: position.x - size / 2,
        top: position.y - size / 2,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(125,211,252,0.34) 28%, rgba(37,99,235,0.18) 48%, transparent 72%)",
      }}
    />
  );
}
