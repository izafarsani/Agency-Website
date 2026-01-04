
// Fix: Added React import to provide access to the React namespace for types
import React from 'react';

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  problem: string;
  solution: string;
  result: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}