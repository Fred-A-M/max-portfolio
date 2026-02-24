"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'

export default function Fw26 () {

  const project = projects.find(project => project.name === "FW26")
  if (!project) return null;

  return (
    <div className="relative w-full h-full min-w-0 min-h-0">
      <CldImage
        src={project?.image}
        alt='Project Image'
        fill
        className="object-contain"
        preload
      />
    </div>
  )
}