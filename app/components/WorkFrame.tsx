"use client"
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import { projects } from '../consts';

export default function WorkFrame () {
  const pathname = usePathname()
  const router = useRouter()

  const currentSlug = pathname.split("/").pop()
  if (!currentSlug) return null

  const index = projects.findIndex(
    (project) => project.link.endsWith(currentSlug)
  )

  if (index === -1) return null

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <nav className="absolute inset-0 pointer-events-none">

      <div className='absolute inset-[25px]'>
        {/* top bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
          <h1 className="pointer-events-auto">MAX RAWLINS</h1>
          <Link href="/" className="pointer-events-auto">
            ABOUT
          </Link>
        </div>

        {/* left arrow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto">
          <button onClick={() => router.push(`/work/${prev}`)}>
            THIS WAY
          </button>
        </div>

        {/* right arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto">
          <button onClick={() => router.push(`/work/${next}`)}>
            THAT WAY
          </button>
        </div>

      </div>

    </nav>
  )
}