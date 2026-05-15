"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    function handleMouseOver(e) {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[99999] rounded-full transition-transform duration-100"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          backgroundColor: "#22d3ee",
          transform: isHovering ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        className="fixed pointer-events-none z-[99998] rounded-full transition-all duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          border: "1px solid rgba(34, 211, 238, 0.4)",
          transform: isHovering ? "scale(1.8)" : "scale(1)",
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
    </>
  );
}
