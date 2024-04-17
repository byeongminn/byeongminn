import { Detail } from 'types';
import { fetcher } from 'utils/fetcher';

const getDetails = async (): Promise<Array<Detail>> => {
  return await fetcher('details.json');
};

export default getDetails;
