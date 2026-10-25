import { EducationItem } from '../types/portfolio';

export const educationData: EducationItem[] = [
  {
    id: 'btech',
    institution: 'A.K.T Memorial College of Engineering and Technology',
    degree: 'B.Tech Information Technology',
    period: 'September 2023 – April 2027',
    score: 'CGPA: 7.90',
    statusNote: 'Expected Graduation: 2027',
    location: 'Kallakurichi, Tamil Nadu, India',
    highlights: [
      'Focus on Software Engineering, Artificial Intelligence, and Cybersecurity.',
      'Active researcher in Deep Reinforcement Learning for Network Security.',
      'Core coursework: Data Structures, Object-Oriented Programming, Database Management Systems, Computer Networks.'
    ]
  },
  {
    id: 'hsc',
    institution: 'Higher Secondary Certificate (HSC)',
    degree: 'Class XII — Higher Secondary Education',
    period: '2022 – 2023',
    score: '72.33%',
    location: 'Tamil Nadu, India',
    highlights: [
      'Mathematics, Physics, Chemistry, and Computer Science foundation.'
    ]
  },
  {
    id: 'sslc',
    institution: 'Secondary School Leaving Certificate (SSLC)',
    degree: 'Class X — Secondary School Education',
    period: '2020 – 2021',
    score: 'Completed',
    location: 'Tamil Nadu, India',
    highlights: [
      'Core sciences, foundational mathematics, and analytical aptitude.'
    ]
  }
];
