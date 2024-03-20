import { Experience } from 'types';
import { fetcher } from 'utils/fetcher';

const getExperiences = async (): Promise<Array<Experience>> => {
  return await fetcher('experiences.json');
};

export default getExperiences;
