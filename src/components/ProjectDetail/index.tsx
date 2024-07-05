import { ProjectType } from '@/types';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const ProjectDetail = () => {
  const router = useRouter();
  const { id = '' } = router.query;

  const fetchProject = async () => {
    const { data } = await axios(`/api/project?id=${id}`);

    return data;
  };

  const { data: project } = useQuery<ProjectType>(
    `projects-${id}`,
    fetchProject,
    { refetchOnWindowFocus: false },
  );

  const handleTopClick = () => {
    window.scrollTo(0, 0);
  };

  return project ? (
    <div className="flex-1 flex flex-col gap-y-4">
      {project?.details?.cover && (
        <div className="relative w-full aspect-[4/1]">
          <Image
            src={`/assets/pictures/${project.directory}/cover.webp`}
            alt={project.title}
            fill
            priority
          />
        </div>
      )}
      {project?.details?.output && (
        <div className="inline-block text-right">
          <Link
            href={`${project?.details?.output}`}
            target="_blank"
            className="px-2 py-1 bg-white dar:bg-gray-800 border border-gray-600 dark:border-gray-300 rounded-full text-eng-14M laptop:text-eng-16 text-gray-600 dark:text-gray-300"
          >
            OUTPUT
          </Link>
        </div>
      )}
      <div className="flex flex-col gap-y-8">
        {project?.details?.overview && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              프로젝트 개요
            </h2>
            <p className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500">
              {project?.details?.overview}
            </p>
          </div>
        )}
        {project?.details?.background?.length && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              프로젝트 배경
            </h2>
            {project?.details?.background.map((item, index) => (
              <p
                key={index}
                className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500"
              >
                {item}
              </p>
            ))}
          </div>
        )}
        {project?.details?.duration && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              기간
            </h2>
            <p className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500">
              {project?.details?.duration}
            </p>
          </div>
        )}
        {project?.details?.members && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              구성 팀원
            </h2>
            <p className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500">
              {project?.details?.members}
            </p>
          </div>
        )}
        {project?.details?.skills && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              기술 스택
            </h2>
            <p className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500">
              {project?.details?.skills}
            </p>
          </div>
        )}
        {project?.details?.features?.length && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              주요 기능
            </h2>
            {project?.details?.features.map((item, index) => (
              <p
                key={index}
                className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500"
              >
                {item}
              </p>
            ))}
          </div>
        )}
        {project?.details?.role?.length && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              담당 역할
            </h2>
            {project?.details?.role.map((item, index) => (
              <p
                key={index}
                className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500"
              >
                {item}
              </p>
            ))}
          </div>
        )}
        {project?.details?.collaboration?.length && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              협업 방식
            </h2>
            {project?.details?.collaboration.map((item, index) => (
              <p
                key={index}
                className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500"
              >
                {item}
              </p>
            ))}
          </div>
        )}
        {project?.details?.performance?.length && (
          <div className="flex flex-col gap-y-1 break-keep">
            <h2 className="text-kor-16M laptop:text-kor-20 text-gray-900 dark:text-gray-400">
              성과 및 배운 점
            </h2>
            {project?.details?.performance.map((item, index) => (
              <p
                key={index}
                className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="mt-[72px]">
        <button
          className="py-6 w-full cursor-pointer bg-transparent border-y-[0.5px] border-gray-600 text-eng-14 tablet:text-eng-16 text-gray-600"
          onClick={handleTopClick}
        >
          TOP
        </button>
      </div>
    </div>
  ) : (
    <p className="text-kor-14 laptop:text-kor-16 text-gray-800 dark:text-gray-500">
      해당 프로젝트가 존재하지 않습니다.
    </p>
  );
};
