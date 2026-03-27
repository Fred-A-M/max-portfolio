"use client"
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

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

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;