import { Project } from '../consts';
import FadeInPage from './FadeInPage';

export default function ProjectContentWrap({
  children,
  project
}: {
  children: React.ReactNode;
  project: Project
}) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Image container */}
      <div className="relative w-full h-full">
        {children}
      </div>
      
      {/* Description (normal flow) */}
      <FadeInPage>
        <p className="text-center mt-[25px]">
          {project.description}
        </p>
      </FadeInPage>
    </div>
  )
}