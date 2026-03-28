"use client"
import { projects } from '@/app/consts';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';
import { useState } from 'react';

export default function NewYorkFestival () {

  const [loaded, setLoaded] = useState(false);
  const project = projects.find(project => project.link === "new-york-festival");
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
         onCanPlay={() => setLoaded(true)}
         className={`
          absolute
          inset-0
          w-full
          h-full
          object-contain
          sm:pt-[4px]
          transition-opacity
          duration-500
          ${loaded ? "opactity-100" : "opacity-0"}
          `}
       />
    </ProjectContentWrap>
  )
}