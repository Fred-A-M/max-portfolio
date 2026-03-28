"use client"
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import StaticImage from '@/app/components/StaticImage'

export default function ParisShowroomInvite () {

  const project = projects.find(project => project.link === "paris-showroom-invite")
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