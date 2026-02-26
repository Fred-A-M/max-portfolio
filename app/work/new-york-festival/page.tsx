"use client"
import { projects } from '@/app/consts';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function NewYorkFestival () {

  const project = projects.find(project => project.name === "New York Festival")
  if (!project || !project.video) return null;

  return (
    <ProjectContentWrap
     project={project}
    >
      <video
         src={project.video}
         autoPlay
         loop
         muted
         playsInline
         className="absolute inset-0 w-full h-full object-contain sm:pt-[4px]"
       />
    </ProjectContentWrap>
  )
}