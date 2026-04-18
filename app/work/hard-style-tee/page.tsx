"use client"
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import DoubleImage from '@/app/components/DoubleImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function HardStyleTee () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.link === "hard-style-tee")
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
        <DoubleImage 
          imageOne={project.gallery[0]}
          imageTwo={project.gallery[1]}
        />
      }
    </ProjectContentWrap>
  )
}