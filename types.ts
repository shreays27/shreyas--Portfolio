
import React from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  imageUrl: string;
}

export interface Certificate {
  title: string;
  fileUrl: string;
  type: 'pdf' | 'image';
}

export interface NavItem {
  label: string;
  path: string;
  // Fix: Added React import to resolve React namespace for ReactNode
  icon: React.ReactNode;
}
