
export interface ThemeConfig {
  brandColor: string;
  accentColor: string;
  headerTitle: string;
  logoText: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  footerText: string;
  whatsappNumber: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
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

export interface ProcessStep {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface ProblemPoint {
  title: string;
  description: string;
}

export interface WPContent {
  theme: ThemeConfig;
  services: Service[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  processSteps: ProcessStep[];
  problemPoints: ProblemPoint[];
}
