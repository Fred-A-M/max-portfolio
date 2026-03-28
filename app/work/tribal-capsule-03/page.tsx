"use client"
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import StaticImage from '@/app/components/StaticImage'

export default function TribalCapsule03 () {

  const project = projects.find(project => project.link === "tribal-capsule-03")
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