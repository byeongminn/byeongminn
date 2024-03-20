import { Profile } from 'types';
import { fetcher } from 'utils/fetcher';

const getProfile = async (): Promise<Profile> => {
  return await fetcher('profile.json');
};

export default getProfile;
