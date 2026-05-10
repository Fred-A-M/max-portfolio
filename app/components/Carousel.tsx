"use client"
import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from 'react';
import GalleryIndicators from './GalleryIndicators';

export default function Carousel({
  gallery, 
  video,
}: { 
  gallery: string[], 
  video?: boolean,
}) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ready = firstImageLoaded;
  const total = gallery.length || 0;

  useEffect(() => {
    gallery.forEach((asset) => {
      if (video) {
        const videoElement = document.createElement("video")
  
        videoElement.src = asset
        videoElement.preload = "auto"
  
        // optional but helps some browsers start fetching
        videoElement.muted = true
        videoElement.playsInline = true
  
        videoElement.load()
      } else {
        const img = new window.Image()
        img.src = `https://res.cloudinary.com/duijfl1pq/image/upload/${asset}`
      }
    })
  }, [gallery, video])

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
      
        {!video && 
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
        }

        {video &&
          <video
            src={gallery[currentIndex]}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => {
              if (currentIndex === 0) setFirstImageLoaded(true);
            }}
            className={`
            absolute
            inset-0
            w-full
            h-full
            object-contain
            sm:pt-[2px]
            transition-opacity
            duration-500
            custom-cursor-hover
            `}
          />
        }
      </div>

      <GalleryIndicators
        gallery={gallery}
        currentIndex={currentIndex}
      />
    </div>
  )
}