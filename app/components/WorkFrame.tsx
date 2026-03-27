"use client"
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import { useIsMobile } from '../hooks/useIsMobile';
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

  if (index === -1) return null

  const prev = projects[(index - 1 + projects.length) % projects.length].link
  const next = projects[(index + 1) % projects.length].link

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
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <button onClick={() => router.push(`/work/${prev}`)} className='hover:underline hover:cursor-pointer'>
            THIS WAY
          </button>
        </div>

        {/* right arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button onClick={() => router.push(`/work/${next}`)} className='hover:underline hover:cursor-pointer'>
            THAT WAY
          </button>
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
          <button onClick={() => router.push(`/work/${prev}`)} className='hover:cursor-pointer text-3xl hover:text-4xl'>
            &uarr;
          </button>
        </div>

  
      

       <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-[25px]'>
          <button onClick={() => router.push(`/work/${next}`)} className='hover:cursor-pointer text-3xl hover:text-4xl'>
            &darr;
          </button>
          <div>
            {" "}
          </div>
       </div>

      </div>

    </nav>
  )
}
