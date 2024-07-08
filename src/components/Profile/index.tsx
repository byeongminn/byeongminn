import { ProfileType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import { useQuery } from 'react-query';

export const Profile = () => {
  const { data: profile } = useQuery<ProfileType>(
    'profile',
    () => fetchData('profile'),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div>
      <h2 className="mb-4 laptop:mb-7 text-eng-16M laptop:text-eng-20 text-gray-900 dark:text-gray-400">
        Profile
      </h2>
      <div className="flex flex-col gap-y-1 laptop:gap-y-2 text-gray-800 dark:text-gray-500">
        <div className="flex gap-x-[2px]">
          <h3 className="text-kor-14M laptop:text-kor-18">{profile?.name}</h3>
          <h4 className="text-eng-14M font-medium laptop:text-lg laptop:leading-6">
            {profile?.englishName}
          </h4>
        </div>
        <h4 className="text-eng-14 laptop:text-eng-16">{profile?.birth}</h4>
        <h4 className="text-eng-14 laptop:text-eng-16">{profile?.address}</h4>
        <h4 className="text-eng-14 laptop:text-eng-16">{profile?.number}</h4>
        <h4 className="text-eng-14 laptop:text-eng-16">{profile?.email}</h4>
      </div>
    </div>
  );
};
