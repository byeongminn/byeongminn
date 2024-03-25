import { Beyond } from 'types';
import { fetcher } from 'utils/fetcher';

const getBeyond = async (): Promise<Array<Beyond>> => {
  return await fetcher('beyond.json');
};

export default getBeyond;
