import { EducationType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import { useQuery } from 'react-query';

export const Education = () => {
  const { data: education } = useQuery<EducationType>(
    'education',
    () => fetchData('education'),
    { refetchOnWindowFocus: false },
  );

  return (
    <div>
      <h2 className="mb-4 laptop:mb-7 text-eng-16M laptop:text-eng-20 text-gray-900 dark:text-gray-400">
        Education
      </h2>
      <div className="flex flex-col laptop:flex-row laptop:items-center gap-y-2 laptop:gap-y-0 laptop:gap-x-10 text-gray-800 dark:text-gray-500">
        <h3 className="text-kor-14M laptop:text-kor-18">{education?.school}</h3>
        <h4 className="text-kor-14 laptop:text-kor-16">{education?.major}</h4>
        <h4 className="text-eng-12 laptop:text-eng-14">{education?.period}</h4>
      </div>
    </div>
  );
};
