"use client"
import { projects } from '@/app/consts'

export default function NewYorkFestival () {

  const project = projects.find(project => project.name === "New York Festival")
  if (!project || !project.video) return null;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Image container */}
      <div className="relative w-full h-full">
       <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain sm:pt-[4px]"
        />
      </div>

      {/* Description (normal flow) */}
      <p className="text-center mt-[25px]">
        {project.description}
      </p>
    </div>
  )
}