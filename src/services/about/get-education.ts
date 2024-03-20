import { Education } from 'types';
import { fetcher } from 'utils/fetcher';

const getEducation = async (): Promise<Array<Education>> => {
  return await fetcher('education.json');
};

export default getEducation;
