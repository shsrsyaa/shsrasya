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
  icon: string;
}
