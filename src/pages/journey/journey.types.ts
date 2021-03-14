export enum JourneyType {
  WORK = 'work',
  EDUCATION = 'education',
  SPECIAL = 'special'
};

export interface JourneyLink {
  name: string;
  link: string;
}

export interface Journey {
  id: number;
  purpose: JourneyType;
  title: string;
  date: string;
  subtitle?: string;
  description?: string
  externalLinks?: JourneyLink[]
}