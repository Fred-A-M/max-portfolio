"use client"
import { CldImage } from 'next-cloudinary'
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { useState } from 'react';
import HoverImage from '@/app/components/HoverImage';
import StaticImage from '@/app/components/StaticImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function Awake () {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  const project = projects.find(project => project.name === "Awake")
  if (!project || !project.gallery || project.gallery.length === 0) return null;

  return (
    <ProjectContentWrap
      project={project}
    >
      {isMobile &&
        <HoverImage 
          primary={project.gallery[0]}
          secondary={project.gallery[1]}
        />
      }
      {!isMobile &&
        <StaticImage
          image={project.image}
          padding
        />
      }
    </ProjectContentWrap>
  )
}