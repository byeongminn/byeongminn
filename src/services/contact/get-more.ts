import { More } from 'types';
import { fetcher } from 'utils/fetcher';

const getMore = async (): Promise<Array<More>> => {
  return await fetcher('more.json');
};

export default getMore;
