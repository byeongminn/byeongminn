import axios from 'axios';

export const fetchData = async (type: string) => {
  const { data } = await axios(`/api/information?type=${type}`);

  return data;
};
