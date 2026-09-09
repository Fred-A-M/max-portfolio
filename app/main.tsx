"use client"
import Link from 'next/link'
import { profile } from './consts'
import WorkFrameHomePage from './components/WorkFrameHomePage'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { CldImage } from 'next-cloudinary';

export default function Main () {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div
        className="
          relative
          w-full
          grid
          grid-rows-[auto,1fr]
          "
        >
          <WorkFrameHomePage />
          {/* CENTER VIEWPORT */}
          <div 
            className="
              px-[12px]
              sm:px-[120px]
              py-[120px]
              sm:pb-[12px]
              sm:pt-[28px]
              h-full
              mx-auto
              w-1/2
              flex
              flex-col
              gap-[20px]
              justify-center
              text-left
              z-10
              "
            >
              <CldImage
                src={profile.image}
                alt="Max Rawlins Logo"
                width={800}
                height={800}
                className='max-w-[400px] max-h-[500px] self-center'
              />
              <p>
                Max Rawlins is a Designer and art director based in london.
              </p>
              <p>
                Clients include: Adidas, All Purpose, Awake Ny, Ballantines, Basement, Boiler Room, Budweiser, Dazed, Fiorucci, Levi's, MTV, New Balance, Nike,
                Nowadays, Papa Johns, Superimpose, Umbro, Urban Outfitters, With Projects.
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
      <div className='flex flex-col flex-1'>
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