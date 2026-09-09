"use client"
import Link from 'next/link';
import { projects } from '../consts';


export default function WorkFrameHomePage () {
  


  return (
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

}
