import { ProjectType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const ProjectList = () => {
  const router = useRouter();
  const { id }: { id?: string } = router.query;

  const { data: projects } = useQuery<ProjectType[]>(
    'projects',
    () => fetchData('projects'),
    { refetchOnWindowFocus: false },
  );

  return (
    <div className="pb-5 tablet:pb-0 tablet:pr-4 laptop:pr-8 flex tablet:flex-col gap-x-5 tablet:gap-y-6 tablet:border-r dark:border-gray-700 overflow-x-auto tablet:overflow-visible">
      {projects?.map((project) => (
        <div
          key={project.id}
          onClick={() => router.push(`/projects/${project?.id}`)}
          className={`flex tablet:flex-col gap-x-3 tablet:gap-x-0 tablet:gap-y-2 text-center cursor-pointer ${id === undefined && project.id === 0 ? 'opacity-100' : id !== undefined && parseInt(id) === project.id ? 'opacity-100' : 'opacity-20'}`}
        >
          <div className="relative w-10 h-10 tablet:w-32 tablet:h-24 laptop:w-48 laptop:h-36">
            <Image
              src={`/assets/pictures/${project.directory}/thumbnail.svg`}
              alt={project.title}
              fill
              priority
            />
          </div>
          <div className="flex flex-col gap-y-1 tablet:gap-y-2 whitespace-nowrap">
            <div className="text-kor-14 tablet:text-kor-18 text-gray-800 dark:text-gray-500 text-left tablet:text-center">
              {project.title}
            </div>
            <div className="flex gap-1 tablet:justify-center items-center tablet:flex-wrap">
              {project?.chips?.map(({ id, name }) => (
                <div
                  key={id}
                  className="px-2 bg-gray-300 dark:bg-gray-800 rounded-xl text-eng-12 tablet:text-eng-14 text-gray-600 dark:text-gray-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
