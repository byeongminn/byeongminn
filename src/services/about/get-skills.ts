import { Skill } from 'types';
import { fetcher } from 'utils/fetcher';

const getSkills = async (): Promise<Array<Skill>> => {
  return await fetcher('skills.json');
};

export default getSkills;
