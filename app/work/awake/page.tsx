"use client"
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { useState } from 'react';
import HoverImage from '@/app/components/HoverImage';
import StaticImage from '@/app/components/StaticImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function Awake () {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  const project = projects.find(project => project.link === "awake")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      {isMobile &&
        <HoverImage 
          primary={project.gallery[1]}
          secondary={project.gallery[2]}
        />
      }
      {!isMobile &&
        <StaticImage
          image={project.gallery[0]}
          padding
        />
      }
    </ProjectContentWrap>
  )
}