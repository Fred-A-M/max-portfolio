"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'
import StaticImage from '@/app/components/StaticImage'

export default function Bondage () {

  const project = projects.find(project => project.name === "Bondage")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <StaticImage
        image={project.image}
        padding
      />
    </ProjectContentWrap>
  )
}