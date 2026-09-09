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
                {`Max Rawlins is a Designer and art director based in\u00A0London.`}
              </p>
              <p>
                {`Clients include: Adidas, All Purpose, Awake Ny, Ballantines, Basement, Boiler Room, Budweiser, Dazed, Fiorucci, Levi's, MTV, New Balance, Nike,
                Nowadays, Papa Johns, Superimpose, Umbro, Urban Outfitters, With\u00A0Projects.`}
              </p>
              <p>
                Full portfolio available upon request.
              </p>
              <Link href="mailto:helloitsmaxrawlins@gmail.com" className='hover:underline'>
                XXXXXXXXXX@gmail.com
              </Link>
              <Link href="https://www.instagram.com/handburgers/" className='hover:underline' target='_blank'>
                @Handburgers
              </Link>
          </div>
        </div>
   
  )}

  if (isMobile) {
    return (
      <div className='flex flex-col flex-1 px-[12px] py-[12px]'>
        <div className='flex'>
          <div className='flex flex-col w-3/4 sm:flex-1'>
            <div className='flex flex-col gap-[25px] pb-[25px]'>
              <h1 className='underline'>
              I&apos;M MAX RAWLINS. WELCOME TO MY WEBSITE.
            </h1>
            <p>
              I am a graphic designer and art director currently working in London. I enjoy working on projects within music and apparel.
            </p>
            <p>
              Experience working with and for:
            </p>
            <div className='flex flex-col'>
              {profile.workedWith.map((brand, index) => (
                <p key={index}>{brand}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='flex-1 text-right'>
          <Link href="/work/" className='hover:underline'>
            WORK
          </Link>
        </div>
      </div>
      <div className='flex flex-col mt-auto'>
        <Link href="mailto:helloitsmaxrawlins@gmail.com" className='hover:underline'>
          EMAIL
        </Link>
        <Link href="https://www.instagram.com/handburgers/" className='hover:underline' target='_blank'>
          INSTAGRAM
        </Link>
      </div>
    </div>
  )}
}