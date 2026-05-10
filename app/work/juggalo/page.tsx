"use client"
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import StaticImage from '@/app/components/StaticImage';

export default function Juggalo () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.link === "juggalo")
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
        <StaticImage 
          image={project.gallery[2]}
        />
      }
    </ProjectContentWrap>
  )
}