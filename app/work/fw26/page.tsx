"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import StaticImage from '@/app/components/StaticImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function Fw26 () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.name === "FW26")
  if (!project) return null;

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
        <StaticImage
          image={project.image}
        />
      }
    </ProjectContentWrap>
  )
}