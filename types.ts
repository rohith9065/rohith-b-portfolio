
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}
