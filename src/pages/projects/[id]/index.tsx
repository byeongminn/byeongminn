import { ProjectDetail, ProjectList } from '@/components';

export default function ProjectPage() {
  return (
    <div className="flex flex-col tablet:flex-row gap-y-2 tablet:gap-x-4 laptop:gap-x-8 laptop:gap-y-0">
      <ProjectList />
      <ProjectDetail />
    </div>
  );
}
