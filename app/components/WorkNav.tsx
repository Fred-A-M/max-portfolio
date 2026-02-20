import Link from 'next/link';

export default function WorkNav () {

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex'>
        <div className='flex flex-col flex-1'>
          <div className='flex flex-col gap-[25px] pb-[25px]'>
            <h1>
              MAX RAWLINS
            </h1>
          </div>
        </div>
        <div className='flex-1 text-right'>
          <Link href="/">
            ABOUT
          </Link>
        </div>
      </div>
      <div className='flex justify-center mt-auto'>
        <p>
          EMAIL
        </p>
      </div>
    </div>
  )
}