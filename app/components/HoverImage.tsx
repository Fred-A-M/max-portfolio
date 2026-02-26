"use client"
import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from 'react';

export default function HoverImage({
  primary, 
  secondary
}: { 
  primary: string, 
  secondary: string 
}) {

  function useHoverCapable() {
    const [canHover, setCanHover] = useState(false)
  
    useEffect(() => {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
      setCanHover(mq.matches)
    }, [])
  
    return canHover
  }
  
  const canHover = useHoverCapable();
  const [tapped, setTapped] = useState(false);


  return (
    <div 
      className="relative w-full h-full group touch-manipulation"
      onClick={() => {
        if (!canHover) setTapped(prev => !prev)
      }}
    >
      <CldImage
        src={primary}
        alt="Project Image"
        fill
        preload
        className={`
          object-contain
          transition-opacity
          duration-300
          ${(canHover ? "group-hover:opacity-0" : "")}
          ${tapped ? "opacity-0" : "opacity-100"}
        `}
      />

      {secondary && (
        <CldImage
          src={secondary}
          alt="Project Image Hover"
          fill
          className={`
            object-contain
            transition-opacity
            duration-300
            ${(canHover ? "group-hover:opacity-100" : "")}
            ${tapped ? "opacity-100" : "opacity-0"}
          `}
        />
      )}
    </div>
  )
}