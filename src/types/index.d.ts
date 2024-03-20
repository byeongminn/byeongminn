export type Profile = {
  name?: string;
  englishName?: string;
  birth?: string;
  address?: string;
  number?: string;
  email?: string;
};

export type Skill = {
  id: number;
  iconUrl: string;
  name: string;
};

export type Introduction = {
  id: number;
  title: string;
  content: string;
};

export type Education = {
  id: number;
  school: string;
  major: string;
  period: string;
};

export type Project = {
  id: number;
  title: string;
  period: string;
  role: string;
  link: string;
};

export type Experience = {
  id: number;
  company: string;
  position: string;
  job: string;
  period: string;
  projects: Array<Project>;
};

export type Award = {
  id: number;
  year: number;
  name: string;
  outcome: string;
};
