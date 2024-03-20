import { Award } from 'types';
import { fetcher } from 'utils/fetcher';

const getAwards = async (): Promise<Array<Award>> => {
  return await fetcher('awards.json');
};

export default getAwards;
