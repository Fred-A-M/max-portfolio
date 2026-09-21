"use client"
import Link from 'next/link'
import { profile } from './consts'
import WorkFrameHomePage from './components/WorkFrameHomePage'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { useState } from 'react'
import { CldImage } from 'next-cloudinary';

export default function Main () {
  const isMobile = useIsMobile();
  const [counter, setCounter] = useState(0);
  const ready = counter > 0;

  if (!isMobile) {
    return (
      <div
        className={`
          relative
          w-full
          grid
          grid-rows-[auto,1fr]
          transition-opacity
          duration-500
          ${ready ? "opacity-100" : "opacity-0"}
          `}
          
        >
          <WorkFrameHomePage />
         
          <div 
            className="
              px-[12px]
              py-[12px]
              h-full
              mx-auto
              w-1/2
              lg:w-1/3
              2xl:w-1/4
              flex
              flex-col
              gap-[15px]
              justify-center
              text-left
              z-10
              "
            >
              <div className="min-h-0 min-w-0 flex items-center justify-center">
                <CldImage
                  src={profile.image}
                  alt="Max Rawlins Logo"
                  width={350}
                  height={350}
                  preload
                  onLoad={() => setCounter(prev => prev + 1)}
                  className="max-w-full max-h-full w-auto h-auto object-contain mb-[20px]"
                />
              </div>
              <p>
                {profile.description}
              </p>
              <p>
                {profile.clients}
              </p>
              <p>
                {profile.portfolio}
              </p>
              <Link href="mailto:hello@maxrawlins.com" className='hover:underline'>
                {profile.email}
              </Link>
              <Link href="https://www.instagram.com/handburgers/" className='hover:underline' target='_blank'>
                {profile.insta}
              </Link>
            </div>
        </div>
    ) 
  }

  if (isMobile) {
    return (
      <div
        className={`
          relative
          w-full
          grid
          grid-rows-[auto,1fr]
          transition-opacity
          duration-500
          ${ready ? "opacity-100" : "opacity-0"}
          `}
          
        >
          <WorkFrameHomePage />
         
          <div 
            className="
              px-[12px]
              py-[12px]
              w-4/7
              my-auto
              mx-auto
              flex
              flex-col
              gap-[15px]
              justify-center
              text-left
              z-5
              "
            >
              <div className="w-full flex items-center justify-center mb-[10px]">
                <CldImage
                  src={profile.image}
                  alt="Max Rawlins Logo"
                  width={350}
                  height={350}
                  preload
                  onLoad={() => setCounter(prev => prev + 1)}
                  className="w-full h-auto object-contain "
                />
              </div>
              <p>
                {profile.description}
              </p>
              <p>
                {profile.clients}
              </p>
              <p>
                {profile.portfolio}
              </p>
              <Link href="mailto:hello@maxrawlins.com" className='hover:underline'>
                {profile.email}
              </Link>
              <Link href="https://www.instagram.com/handburgers/" className='hover:underline' target='_blank'>
                {profile.insta}
              </Link>
            </div>
        </div>
    )}
}