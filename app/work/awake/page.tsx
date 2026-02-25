"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';

export default function Awake () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.name === "Awake")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Image container */}
      <div className="relative w-full h-full">
        {isMobile &&
          <HoverImage 
            primary={project.gallery[0]}
            secondary={project.gallery[1]}
          />
        }
        {!isMobile &&
          <CldImage
            src={project.image}
            alt="Project Image"
            fill
            className="object-contain"
            preload
          />
        }
      </div>

      {/* Description (normal flow) */}
      <p className="text-center mt-[25px]">
        {project.description}
      </p>
    </div>
  )
}