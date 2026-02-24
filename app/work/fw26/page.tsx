"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'

export default function Fw26 () {

  const project = projects.find(project => project.name === "FW26")
  if (!project) return null;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Image container */}
      <div className="relative w-full h-full">
        <CldImage
          src={project.image}
          alt="Project Image"
          fill
          className="object-contain"
          preload
        />
      </div>

      {/* Description (normal flow) */}
      <p className="text-center mt-[25px]">
        {project.description}
      </p>
    </div>
  )
}