"use client"
import { projects } from '@/app/consts';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';
import Carousel from '@/app/components/Carousel';

export default function MediaPlayer () {
  const project = projects.find(project => project.link === "media-player");
  if (!project) return null;

  return (
    <ProjectContentWrap
     project={project}
    >
     <Carousel
      gallery={project.gallery}
      video
     /> 
    </ProjectContentWrap>
  )
}