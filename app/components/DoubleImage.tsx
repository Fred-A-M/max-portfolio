import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

export default function DoubleImage ({
  imageOne,
  imageTwo,
  padding,
} : {
  imageOne: string,
  imageTwo: string,
  padding?: boolean,
}) {

  const [counter, setCounter] = useState(0);
  const ready = counter > 1;

  return (
    <div 
      className={`
        flex 
        gap-[25px] 
        w-full 
        h-full 
        mx-auto 
        max-w-[1150px]
        justify-center
        transition-opacity
        duration-500
        ${ready ? "opacity-100" : "opacity-0"}
        ${padding ? "pt-[2px]" : "pt-0"}
      `}
    >
      <div className='relative flex-1 h-full'> 
        <CldImage
          src={imageOne}
          alt="Project Image"
          fill
          preload
          onLoad={() => setCounter(prev => prev + 1)}
          className="object-contain"
        />
      </div>
      <div className='relative flex-1 h-full'>
      <CldImage
          src={imageTwo}
          alt="Project Image"
          fill
          preload
          onLoad={() => setCounter(prev => prev + 1)}
          className="object-contain"
        />
      </div>
    </div>
  )
}