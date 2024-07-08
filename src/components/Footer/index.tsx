import { ProfileType } from '@/types';
import { fetchData } from '@/utils/fetcher';
import { useQuery } from 'react-query';

export const Footer = () => {
  const { data: profile } = useQuery<ProfileType>(
    'profile',
    () => fetchData('profile'),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div className="py-[72px]">
      <h5 className="font-light text-eng-12 laptop:text-eng-14 text-gray-600 text-center laptop:text-right">
        Copyright 2024.{' '}
        <strong className="uppercase">{profile?.englishName}</strong> all rights
        reserved.
      </h5>
    </div>
  );
};
