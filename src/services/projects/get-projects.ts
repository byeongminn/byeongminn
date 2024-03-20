import { Project } from 'types';
import { fetcher } from 'utils/fetcher';

const getProjects = async (): Promise<Array<Project>> => {
  return await fetcher('projects.json');
};

export default getProjects;
