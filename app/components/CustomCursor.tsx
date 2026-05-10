"use client"
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsDesktop(mediaQuery.matches);

    const handleMouseMove = (e : MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true)
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true)
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the element (or its parent) is clickable
      if (target.closest("button, a, input[type='submit'], .cursor-pointer, .custom-cursor-hover")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);


  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      <img
        src="/cursor2.png" // <-- path to your PNG
        alt="custom cursor"
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "64px",   // adjust size as needed
          height: "64px",
          pointerEvents: "none",
          transform: `translate(-50%, -50%) 
                      scale(${isHovering ? 0.8 : 1}) 
                      rotate(${isHovering ? "15deg" : "0deg"})`,
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)", // "Bouncy" transition
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;