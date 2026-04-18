"use client"
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import StaticImage from '@/app/components/StaticImage'

export default function Jail () {

  const project = projects.find(project => project.link === "jail")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <StaticImage
        image={project.gallery[0]}
      />
    </ProjectContentWrap>
  )
}