export type ProfileType = {
  name: string;
  englishName: string;
  birth: string;
  address: string;
  number: string;
  email: string;
};

export type SkillType = {
  id: number;
  name: string;
  icon: string;
};

export type IntroductionType = {
  id: number;
  title: string;
  content: string;
};

export type EducationType = {
  id: number;
  school: string;
  major: string;
  period: string;
};

export type ChipType = {
  id: number;
  name: string;
};

export type ProjectType = {
  id: number;
  thumbnail: string;
  title: string;
  chips: Array<Chip>;
  directory: string;
  details: DetailsType;
};

export type ExperienceType = {
  id: number;
  company: string;
  position: string;
  job: string;
  duration: string;
  projects: Array<{
    id: number;
    title: string;
    roles: Array<string>;
    link: string;
  }>;
};

export type Award = {
  id: number;
  year: number;
  name: string;
  outcome: string;
};

export type LinkType = {
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

export type DetailsType = {
  cover?: string;
  overview?: string;
  background?: Array<string>;
  duration?: string;
  members?: string;
  skills?: string;
  features?: Array<string>;
  role?: Array<string>;
  collaboration?: Array<string>;
  performance?: Array<string>;
  output?: {
    thumbnail: string;
    pdf: string;
  };
};
