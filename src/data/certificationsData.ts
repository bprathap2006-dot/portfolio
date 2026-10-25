import { CertificationItem, TechnicalActivity } from '../types/portfolio';

export const certificationsData: CertificationItem[] = [
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    scoreOrDetail: 'Certification Completed',
    description: 'Comprehensive certification covering core Java syntax, object-oriented concepts, multithreading, exception handling, collections framework, and applet/GUI programming.'
  },
  {
    id: 'tcs-ion-nqt',
    title: 'TCS iON National Qualifier Test (NQT)',
    issuer: 'Tata Consultancy Services (TCS iON)',
    scoreOrDetail: 'Cognitive Score: 59.91%',
    description: 'National assessment evaluating numerical ability, reasoning ability, and verbal aptitude for professional software engineering competencies.'
  }
];

export const technicalActivitiesData: TechnicalActivity[] = [
  {
    id: 'project-expo',
    title: 'Project Expo',
    institution: "St. Anne's College of Engineering and Technology",
    type: 'Technical Exhibition & Demonstration',
    description: 'Showcased technical engineering prototype and defended architecture choices before academic panels and peer developers.'
  },
  {
    id: 'xai-workshop',
    title: 'Explainable AI (XAI) Workshop',
    institution: 'Idhaya Engineering College for Women',
    type: 'Hands-on Technical Workshop',
    description: 'Participated in hands-on exploration of interpretable machine learning models, feature attribution algorithms, and transparency in neural network decisions.'
  }
];
