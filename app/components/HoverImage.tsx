"use client"
import { CldImage } from 'next-cloudinary'

export default function HoverImage({ primary, secondary }: { primary: string, secondary: string }) {

  return (
    <div className="relative w-full h-full group">
      <CldImage
        src={primary}
        alt="Project Image"
        fill
        preload
        className="
          object-contain
          transition-opacity
          duration-300
          group-hover:opacity-0
        "
      />

      {secondary && (
        <CldImage
          src={secondary}
          alt="Project Image Hover"
          fill
          className="
            object-contain
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      )}
    </div>
  )
}