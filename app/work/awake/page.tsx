"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function Awake () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.name === "Awake")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
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
          className="object-contain pt-[4px]"
          preload
        />
      }
    </ProjectContentWrap>
  )
}