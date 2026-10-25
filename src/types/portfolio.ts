export interface ProfileInfo {
  name: string;
  professionalTitle: string;
  tagline: string;
  location: string;
  degree: string;
  college: string;
  studyPeriod: string;
  graduationYear: number;
  cgpa: string;
  email: string;
  phone: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl: string;
  headline: string;
  supportingText: string;
  statusPanel: {
    profile: string;
    focus: string;
    interests: string;
    graduation: string;
    location: string;
  };
}

export type SkillCategory = 
  | 'Programming'
  | 'Core Computer Science'
  | 'Development Tools'
  | 'AI and Machine Learning'
  | 'Cybersecurity';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  shortDesc: string;
  howIUseIt: string;
  relevantProjects?: string[];
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  fullTitle: string;
  status: string;
  technologies: string[];
  shortDescription: string;
  fullDescription: string;
  architectureHighlights: string[];
  pipelineSteps?: string[];
  repoUrl: string | null; // Verified URL or null
  demoUrl?: string | null;
  category: 'AI / Audio Forensics' | 'Cybersecurity / Reinforcement Learning';
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  keyLearnings: string[];
  badge: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  statusNote?: string;
  location?: string;
  highlights?: string[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  conference: string;
  institution: string;
  year: number;
  summary: string;
  problemStatement: string;
  methodology: string;
  significance: string;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  scoreOrDetail?: string;
  description: string;
}

export interface TechnicalActivity {
  id: string;
  title: string;
  institution: string;
  type: string;
  description: string;
}
