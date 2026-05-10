"use client"
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import Carousel from '@/app/components/Carousel'

export default function StudsAndChains () {

  const project = projects.find(project => project.link === "studs-and-chains")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <Carousel
        gallery={project.gallery}
      />
    </ProjectContentWrap>
  )
}