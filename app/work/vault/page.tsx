"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import HoverImage from '@/app/components/HoverImage'

export default function Vault () {

  const project = projects.find(project => project.name === "Vault")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Image container */}
      <div className="relative w-full h-full">
        <HoverImage 
          primary={project.gallery[0]}
          secondary={project.gallery[1]}
        />
      </div>

      {/* Description (normal flow) */}
      <p className="text-center mt-[25px]">
        {project.description}
      </p>
    </div>
  )
}