import { Introduction } from 'types';
import { fetcher } from 'utils/fetcher';

const getIntroduction = async (): Promise<Array<Introduction>> => {
  return await fetcher('introduction.json');
};

export default getIntroduction;
