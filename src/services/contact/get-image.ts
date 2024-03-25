import { Image } from 'types';
import { fetcher } from 'utils/fetcher';

const getImage = async (): Promise<Image> => {
  return await fetcher('image.json');
};

export default getImage;
