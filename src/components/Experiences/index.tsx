import { ExperienceType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';

export const Experiences = () => {
  const { resolvedTheme } = useTheme();

  const { data: experiences } = useQuery<ExperienceType[]>(
    'experiences',
    () => fetchData('experiences'),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div>
      <h2 className="mb-4 laptop:mb-7 text-eng-16M laptop:text-eng-20 text-gray-900 dark:text-gray-400">
        Experiences
      </h2>
      {experiences?.map(
        ({
          id,
          company,
          position,
          job,
          duration,
          projects,
        }: ExperienceType) => (
          <div
            key={id}
            className="mt-4 flex flex-col gap-y-4 text-gray-800 dark:text-gray-500 break-keep"
          >
            <div className="flex flex-col laptop:flex-row laptop:justify-between laptop:items-center laptop:gap-x-6 gap-y-1 laptop:gap-y-0">
              <div className="flex justify-between laptop:justify-normal laptop:gap-x-6">
                <h3 className="text-kor-14M laptop:text-kor-18">{company}</h3>
                <h4 className="text-kor-14 laptop:text-kor-16">
                  {position} · {job}
                </h4>
              </div>
              <h4 className="text-eng-12 text-right laptop:text-eng-16 laptop:text-left">
                {duration}
              </h4>
            </div>
            <div className="hidden laptop:block border-t border-gray-500 bg-[#fafafa] dark:bg-[#232424]">
              {projects?.map(({ id, title, roles, link }) => (
                <div
                  key={id}
                  className="p-2 laptop:px-6 laptop:py-4 flex flex-col laptop:flex-row laptop:justify-between gap-y-2 laptop:gap-y-0 laptop:gap-x-6 border-b border-gray-500"
                >
                  <div className="flex flex-1 justify-between laptop:justify-normal laptop:gap-x-6">
                    <h4 className="flex-1 grow-2 text-eng-14M laptop:text-kor-16M text-gray-700 dark:text-gray-500">
                      {title}
                    </h4>
                    <div className="flex-1 grow-8">
                      {roles.map((role: string, idx: number) => (
                        <h4
                          key={idx}
                          className="text-kor-12 laptop:text-kor-16 text-gray-600 dark:text-gray-500"
                        >
                          {role}
                        </h4>
                      ))}
                    </div>
                  </div>
                  {link ? (
                    <Link href={link}>
                      <Image
                        src={`/assets/icons/link-${resolvedTheme}.svg`}
                        alt="link"
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] laptop:w-6 laptop:h-6"
                      />
                    </Link>
                  ) : (
                    <div className="w-6" />
                  )}
                </div>
              ))}
            </div>
            <div className="laptop:hidden border-t border-gray-500 bg-[#fafafa] dark:bg-[#232424]">
              {projects?.map(({ id, title, roles, link }) => (
                <div
                  key={id}
                  className="p-2 laptop:px-6 laptop:py-4 flex flex-col laptop:flex-row laptop:justify-between gap-y-2 laptop:gap-y-0 laptop:gap-x-6 border-b border-gray-500"
                >
                  <div className="flex flex-1 justify-between laptop:justify-normal laptop:gap-x-6">
                    <h4 className="flex-1 grow-2 text-eng-14M laptop:text-kor-16M text-gray-700 dark:text-gray-500">
                      {title}
                    </h4>
                    {link && (
                      <Link href={link}>
                        <Image
                          src={`/assets/icons/link-${resolvedTheme}.svg`}
                          alt="link"
                          width={24}
                          height={24}
                          className="w-[18px] h-[18px] laptop:w-6 laptop:h-6"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="flex-1 grow-8">
                    {roles.map((role: string, idx: number) => (
                      <h4
                        key={idx}
                        className="text-kor-12 laptop:text-kor-16 text-gray-600 dark:text-gray-500"
                      >
                        {role}
                      </h4>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
};
