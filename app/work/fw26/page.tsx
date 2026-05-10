"use client"
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import DoubleImage from '@/app/components/DoubleImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function Fw26 () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.link === "fw26")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      {isMobile &&
        <HoverImage 
          gallery={project.gallery}
        />
      }
      {!isMobile &&
        <DoubleImage 
          imageOne={project.gallery[0]}
          imageTwo={project.gallery[1]}
        />
      }
    </ProjectContentWrap>
  )
}