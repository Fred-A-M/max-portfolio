"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import ProjectContentWrap from '@/app/components/ProjectContentWrap'

export default function Bondage () {

  const project = projects.find(project => project.name === "Bondage")
  if (!project) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <CldImage
        src={project.image}
        alt="Project Image"
        fill
        className="object-contain sm:pt-[4px]"
        preload
      />
    </ProjectContentWrap>
  )
}