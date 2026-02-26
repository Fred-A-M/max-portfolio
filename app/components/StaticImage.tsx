"use client"
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export default function StaticImage({
  image, 
  padding,
}: { 
  image: string, 
  padding?: boolean
}) {

  const [loaded, setLoaded] = useState(false);

  return (
    <CldImage
      src={image}
      alt="Project Image"
      fill
      preload
      onLoad={() => setLoaded(true)}
      className={`
        object-contain 
        transition-opacity
        duration-500
        ${padding ? "sm:pt-[4px]" : "pt-0"}
        ${loaded ? "opactity-100" : "opacity-0"}
      `}
    />
  )
}