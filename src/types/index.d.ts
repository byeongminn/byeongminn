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

export type Chip = {
  id: number;
  name: string;
};

export type Project = {
  id: number;
  logo: string;
  title: string;
  period: string;
  roles: Array<string>;
  chips: Array<Chip>;
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

export type More = {
  id: number;
  name: string;
  url: string;
};

export type Beyond = {
  id: number;
  information: string;
};

export type Image = {
  url?: string;
};

export type Detail = {
  id: string;
  thumbnail?: string;
  overview?: string;
  background?: Array<string>;
  duration?: string;
  members?: string;
  skills?: string;
  features?: Array<string>;
  role?: Array<string>;
  collaboration?: Array<string>;
  performance?: Array<string>;
};
