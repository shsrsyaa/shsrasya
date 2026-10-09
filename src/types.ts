export interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'data' | 'frontend' | 'all';
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // percentage
  category: string;
  experienceYears: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  organization?: string;
  description: string;
  achievements: string[];
  iconName: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  badge?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  category: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  impact: string;
  fullCase: string;
}

export interface ProcessStep {
  number: string;
  step: string;
  tagline: string;
  description: string;
  outputs: string[];
}

export interface VentureItem {
  id: string;
  title: string;
  tagline: string;
  institution: string;
  stage: string;
  description: string;
  domain: string;
  focusTags: string[];
  status: string;
}
