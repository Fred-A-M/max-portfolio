"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'

export default function Bondage () {

  const project = projects.find(project => project.name === "Bondage")
  if (!project) return null;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Image container */}
      <div className="relative w-full h-full">
        <CldImage
          src={project.image}
          alt="Project Image"
          fill
          className="object-contain sm:pt-[4px]"
          preload
        />
      </div>

      {/* Description (normal flow) */}
      <p className="text-center mt-[25px] mx-[-100px]">
        {project.description}
      </p>
    </div>
  )
}