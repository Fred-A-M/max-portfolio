"use client"
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { useIsHoverCapable } from '../hooks/useIsHoverCapable';
import GalleryIndicators from './GalleryIndicators';

export default function HoverImage({
  gallery, 
}: { 
  gallery: string[], 
}) {
  const canHover = useIsHoverCapable();
  const [tapped, setTapped] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className='
        flex
        flex-col
        h-full
        w-full
      '
    >
      <div 
        className={`relative w-full max-w-[800px] mx-auto h-full group touch-manipulation transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onClick={() => {
          if (!canHover) {
            setTapped(prev => !prev)
            setCurrentIndex(prev => prev + 1 % 2)
          } 
        }}
        onMouseEnter={() => canHover && setCurrentIndex(prev => (prev + 1) % 2)}
        onMouseLeave={() => canHover && setCurrentIndex(prev => (prev + 1) % 2)}
      >
        <CldImage
          src={gallery[0]}
          alt="Project Image"
          fill
          preload
          onLoad={() => setLoaded(true)}
          className={`
            object-contain
            transition-opacity
            duration-500
            sm:pt-[2px]
            pt-0
            ${(canHover ? "group-hover:opacity-0" : "")}
            ${tapped ? "opacity-0" : "opacity-100"}
          `}
        />

        <CldImage
          src={gallery[1]}
          alt="Project Image Hover"
          fill
          className={`
            object-contain
            transition-opacity
            duration-500
            sm:pt-[2px]
            pt-0
            ${(canHover ? "group-hover:opacity-100" : "")}
            ${tapped ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
      <GalleryIndicators
        gallery={gallery.slice(0, 2)}
        currentIndex={currentIndex}
      />
    </div>
  )
}