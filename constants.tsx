
import React from 'react';
import { Home, User, Code, FileText, Mail, Award } from 'lucide-react';
import { NavItem, Project, Certificate } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: <Home size={20} /> },
  { label: 'About', path: '/about', icon: <User size={20} /> },
  { label: 'Projects', path: '/projects', icon: <Code size={20} /> },
  { label: 'Resume', path: '/resume', icon: <FileText size={20} /> },
  { label: 'Certificates', path: '/certificates', icon: <Award size={20} /> },
  { label: 'Contact', path: '/contact', icon: <Mail size={20} /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'LangChain Q&A using LLMs',
    description: 'Developed a sophisticated Q&A system using LangChain and Gemini that extracts relevant answers from PDFs and URLs. Implemented semantic search and vector indexing to improve query accuracy.',
    tech: ['Python', 'LangChain', 'Gemini API', 'FAISS'],
    features: ['PDF/URL ingestion', 'Semantic search', 'Vector embeddings'],
    githubUrl: 'https://github.com/shreyas/langchain-qa',
    imageUrl: 'https://picsum.photos/seed/langchain/800/600'
  },
  {
    title: 'Employee Management System',
    description: 'Built a full-stack system to manage employee records including CRUD operations, role-based access, and data persistence. Optimized SQL queries for better performance.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    features: ['CRUD operations', 'Role-based access', 'DB Optimization'],
    githubUrl: 'https://github.com/shreyas/ems',
    imageUrl: 'https://picsum.photos/seed/management/800/600'
  },
  {
    title: 'Weather Dashboard',
    description: 'Developed a real-time weather dashboard fetching live data from OpenWeather. Features dynamic backgrounds based on conditions and a responsive UI.',
    tech: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    features: ['Live data tracking', 'City search', '5-day forecasts'],
    githubUrl: 'https://github.com/shreyas/weather-viz',
    imageUrl: 'https://picsum.photos/seed/weather/800/600'
  }
];

export const CERTIFICATES: Certificate[] = [
  { title: 'Advanced Python Programming', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', type: 'pdf' },
  { title: 'SQL & Database Design', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', type: 'pdf' },
  { title: 'Microsoft Power BI Certified', fileUrl: 'https://picsum.photos/seed/powerbi/800/600', type: 'image' },
];
