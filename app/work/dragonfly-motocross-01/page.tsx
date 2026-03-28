"use client"
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import StaticImage from '@/app/components/StaticImage'

export default function DragonflyMotocross01 () {

  const project = projects.find(project => project.link === "dragonfly-motocross-01")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <StaticImage
        image={project.gallery[0]}
        padding
      />
    </ProjectContentWrap>
  )
}