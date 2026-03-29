"use client"
import { projects } from '@/app/consts'
import { useIsMobile } from '@/app/hooks/useIsMobile';
import HoverImage from '@/app/components/HoverImage';
import StaticImage from '@/app/components/StaticImage';
import ProjectContentWrap from '@/app/components/ProjectContentWrap';

export default function NewYorkFestival02 () {
  const isMobile = useIsMobile();

  const project = projects.find(project => project.link === "new-york-festival-02")
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
    {!isMobile && (
      <div className='flex gap-[25px] w-full h-full mx-auto max-w-[1150px] justify-center'>
        {/* Each wrapper must be relative for the 'fill' image inside */}
        <div className='relative flex-1 h-full'> 
          <StaticImage image={project.gallery[0]} />
        </div>
        <div className='relative flex-1 h-full'>
          <StaticImage image={project.gallery[1]} />
        </div>
      </div>
    )}
    </ProjectContentWrap>
  )
}