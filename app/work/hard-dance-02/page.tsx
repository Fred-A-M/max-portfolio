"use client"
import { projects } from '@/app/consts'
import HoverImage from '@/app/components/HoverImage'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'

export default function HardDance02 () {

  const project = projects.find(project => project.name === "Hard Dance 02")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <HoverImage 
        primary={project.gallery[0]}
        secondary={project.gallery[1]}
      />
    </ProjectContentWrap>
  )
}