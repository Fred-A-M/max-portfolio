"use client"
import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from 'react';

export default function Carousel({
  gallery, 
}: { 
  gallery: string[], 
}) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ready = firstImageLoaded;
  // const pointers = project && project?.gallery.length > 1;
  const total = gallery.length || 0;

  useEffect(() => {
    // Preload all gallery images
    gallery.forEach((image) => {
      const img = new window.Image()
      img.src = `https://res.cloudinary.com/duijfl1pq/image/upload/${image}`
    })
  }, [gallery])

  if (total === 0) return null;
  

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
        className={`
          relative 
          w-full 
          max-w-[800px] 
          mx-auto 
          h-full 
          group 
          touch-manipulation 
          transition-opacity 
          duration-500
          select-none
          ${ready ? "opacity-100" : "opacity-0"}
        `}
        onClick={() => {
          setCurrentIndex(prev => (prev + 1) % gallery.length)
        }}
      >
      
        <CldImage
          src={gallery[currentIndex]}
          alt={`Image ${currentIndex}`}
          fill
          className="
            object-contain 
            custom-cursor-hover
            sm:pt-[2px]
            pt-0
            transition-opacity 
            duration-500
          "
          preload={currentIndex === 0}
          onLoad={() => {
            if (currentIndex === 0) setFirstImageLoaded(true);
          }}
        />
      </div>
      
      <div className="flex justify-center items-center gap-2 mt-2">
        {gallery.map((_, index) => (
          <p
            key={index}
            className={`h-1 w-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-black"
                : "bg-gray-300 opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}