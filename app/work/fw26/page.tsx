"use client"
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import StaticImage from '@/app/components/StaticImage';
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
          primary={project.gallery[1]}
          secondary={project.gallery[2]}
        />
      }
      {!isMobile &&
        <StaticImage
          image={project.gallery[0]}
        />
      }
    </ProjectContentWrap>
  )
}