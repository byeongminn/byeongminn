import { LinkType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import Link from 'next/link';
import { useQuery } from 'react-query';

export const Links = () => {
  const { data: links } = useQuery<LinkType[]>(
    'links',
    () => fetchData('links'),
    { refetchOnWindowFocus: false },
  );

  return (
    <div>
      <h2 className="mb-4 laptop:mb-7 text-eng-16M laptop:text-eng-20 text-gray-900 dark:text-gray-400">
        Links
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {links?.map(({ id, name, url }) => (
          <Link
            key={id}
            href={url}
            target="_blank"
            className="text-eng-14 tablet:text-eng-16 text-gray-800 dark:text-gray-500 underline capitalize decoration-gray-800 dark:decoration-gray-500"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
