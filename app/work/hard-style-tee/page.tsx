"use client"
import { projects } from '@/app/consts'
import HoverImage from '@/app/components/HoverImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function HardStyleTee () {

  const project = projects.find(project => project.link === "hard-style-tee")
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