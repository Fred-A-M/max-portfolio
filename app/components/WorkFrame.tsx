"use client"
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import { useIsMobile } from '../hooks/useIsMobile';
import { useEffect } from 'react';
import { projects } from '../consts';

export default function WorkFrame () {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();

  const currentSlug = pathname.split("/").pop()
  if (!currentSlug) return null

  const index = projects.findIndex(
    (project) => project.link.endsWith(currentSlug)
  )
  
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image()
      img.src = src
    }
  
    prev.gallery.slice(0, 2).forEach(preload)
    next.gallery.slice(0, 2).forEach(preload)
  
  }, [index])

  if (index === -1) return null

  if (!isMobile) return (
    <nav className="absolute inset-0">

      <div className='absolute inset-[12px] '>
        {/* top bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
          <Link href="/" className="hover:underline hover:cursor-pointer">
            MAX RAWLINS
          </Link>
          <Link href="/" className="hover:underline hover:cursor-pointer">
            ABOUT
          </Link>
        </div>

        {/* left arrow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hover:underline">
          <Link href={`/work/${prev.link}`} prefetch>
            THIS WAY
          </Link>
        </div>

        {/* right arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hover:underline">
          <Link href={`/work/${next.link}`} prefetch>
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
          <div className='w-full flex justify-between'>
            <Link href="/" className="hover:underline hover:cursor-pointer">
              MAX RAWLINS
            </Link>
            <Link href="/" className="hover:underline hover:cursor-pointer">
              ABOUT
            </Link>
          </div>
          <Link href={`/work/${prev.link}`} prefetch className='hover:cursor-pointer text-3xl hover:text-4xl'>
            &uarr;
          </Link>
        </div>

  
      

       <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-[25px]'>
          <Link href={`/work/${next.link}`} prefetch className='hover:cursor-pointer text-3xl hover:text-4xl'>
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
