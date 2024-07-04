import { SkillType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import Image from 'next/image';
import { useQuery } from 'react-query';

export const Skills = () => {
  const { data: skills } = useQuery<SkillType[]>('skills', () =>
    fetchData('skills'),
  );

  return (
    <div>
      <h2 className="mb-4 laptop:mb-7 text-eng-16M laptop:text-eng-20 text-gray-900 dark:text-gray-400">
        Skills
      </h2>
      <div className="flex laptop:flex-col items-center laptop:items-start flex-wrap laptop:flex-nowrap gap-x-4 gap-y-3 laptop:gap-y-2">
        {skills?.map(({ id, name }) => (
          <div
            key={id}
            className="flex items-center gap-x-2 laptop:gap-x-3 text-eng-14 laptop:text-eng-16 text-gray-800 dark:text-gray-500 capitalize"
          >
            <Image
              src={`/assets/icons/${name}-light.svg`}
              alt={name}
              width={24}
              height={24}
              className="w-[18px] h-[18px] laptop:w-6 laptop:h-6"
            />
            <h5>{name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
