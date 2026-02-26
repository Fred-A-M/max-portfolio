import Link from 'next/link'
import { profile } from './consts'

export default function Main () {

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex'>
        <div className='flex flex-col flex-1'>
          <div className='flex flex-col gap-[10px] sm:gap-[25px] sm:pb-[25px] pb-[10px]'>
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
  )
}