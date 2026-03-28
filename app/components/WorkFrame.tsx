"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation"
import { useIsMobile } from '../hooks/useIsMobile';
import { useEffect } from 'react';
import { projects, Project } from '../consts';

export default function WorkFrame () {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const currentSlug = pathname.split("/").pop()
  if (!currentSlug) return null

  const index = projects.findIndex(
    (project) => project.link.endsWith(currentSlug)
  )
  
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    const preloadImage = (id: string) => {
      if (!id) return
  
      const img = new Image()
      img.src = `https://res.cloudinary.com/duijfl1pq/image/upload/${id}`
    }
  
    const preloadVideo = (src: string) => {
      if (!src) return
  
      const video = document.createElement("video")
      video.src = src
      video.preload = "auto"
    }
  
    const preloadProject = (project: Project) => {
      if (project.video) {
        preloadVideo(project.video)
        return
      }
  
      project.gallery.forEach(preloadImage)
    }
  
    preloadProject(prev)
    preloadProject(next)
  
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
