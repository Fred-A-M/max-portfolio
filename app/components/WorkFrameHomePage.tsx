"use client"
import Link from 'next/link';
import { projects } from '../consts';
import { useIsMobile } from '../hooks/useIsMobile';


export default function WorkFrameHomePage () {
  const isMobile = useIsMobile();


  if (!isMobile) return (
    <nav className="absolute inset-0 z-0">

      <div className='absolute inset-[12px] '>
        {/* top bar */}
       

        {/* left arrow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hover:underline">
          <Link href={`/work/${projects[projects.length - 1].link}`} prefetch>
            THIS WAY
          </Link>
        </div>

        {/* right arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hover:underline">
          <Link href={`/work/${projects[0].link}`} prefetch>
            THAT WAY
          </Link>
        </div>

      </div>

    </nav>
  )

  if (isMobile) return (
    <nav className="absolute inset-0">

      <div className='absolute inset-[12px]'>
        {/* top bar */}
        <div className="absolute top-0 left-0 right-0 flex flex-col justify-center gap-[25px] items-center">
          <div className='w-full flex justify-center'>
            <Link href="/" className="hover:underline hover:cursor-pointer">
              
            </Link>
          </div>
          <Link href={`/work/${projects[projects.length - 1].link}`} prefetch className='hover:cursor-pointer text-3xl hover:text-4xl z-10'>
            &uarr;
          </Link>
        </div>

  
      

       <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-[25px]'>
          <Link href={`/work/${projects[0].link}`} prefetch className='hover:cursor-pointer text-3xl hover:text-4xl z-10'>
            &darr;
          </Link>
          <div>
            {" "}
          </div>
       </div>

      </div>

    </nav>
  )

}
