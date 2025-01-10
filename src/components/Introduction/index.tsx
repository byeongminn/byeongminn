import { IntroductionType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import { useQuery } from 'react-query';

export const Introduction = () => {
  const { data: introductions } = useQuery<IntroductionType[]>(
    'introduction',
    () => fetchData('introduction'),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div>
      <h2 className="mb-4 laptop:mb-7 text-eng-16M laptop:text-eng-20 text-gray-900 dark:text-gray-400">
        Introduction
      </h2>
      <div className="flex flex-col gap-y-6">
        {introductions?.map((introduction) => (
          <div
            key={introduction.id}
            className="flex flex-col gap-y-1 laptop:gap-y-3 text-gray-800 dark:text-gray-500 break-keep"
          >
            <h4 className="flex-1 font-spoqa font-medium text-base laptop:text-[20px] laptop:leading-[30px] tracking-[-0.5px]">
              {introduction?.title}
            </h4>
            <p
              className="flex-1 grow-3 text-kor-14 laptop:font-spoqa laptop:font-normal laptop:text-[18px] laptop:leading-[30px]"
              dangerouslySetInnerHTML={{ __html: introduction.content }}
            />
            {/* {introduction?.content}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
