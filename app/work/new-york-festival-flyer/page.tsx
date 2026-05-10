"use client"
import { projects } from '@/app/consts'
import HoverImage from '@/app/components/HoverImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function NewYorkFestivalFlyer () {


  const project = projects.find(project => project.link === "new-york-festival-flyer")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      <HoverImage 
        gallery={project.gallery}
        slim
      />
    </ProjectContentWrap>
  )
}