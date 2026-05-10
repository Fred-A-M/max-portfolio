"use client"
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import DoubleImage from '@/app/components/DoubleImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function PiercingTee () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.link === "piercing-tee")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <HoverImage 
        gallery={project.gallery}
      />
    </ProjectContentWrap>
  )
}