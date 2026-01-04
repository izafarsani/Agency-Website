
import React from 'react';
import { 
  Globe, 
  Palette, 
  MessageSquare, 
  Cpu, 
  TrendingUp, 
  UserCheck,
  Rocket
} from 'lucide-react';
import { Service, CaseStudy, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    icon: <Globe className="w-8 h-8" />,
    problem: 'Startups lose 70% of potential leads due to slow, outdated, or confusing websites.',
    solution: 'We build high-converting, mobile-first websites optimized for speed and user experience.',
    result: 'Average 40% increase in conversion rates and immediate brand authority.',
    description: 'Custom React & WordPress solutions tailored for rapid scaling.'
  },
  {
    id: 'branding',
    title: 'Branding & Graphic Design',
    icon: <Palette className="w-8 h-8" />,
    problem: 'Generic branding makes your business forgettable in a crowded market.',
    solution: 'Deep-dive visual identity systems that resonate with your target audience.',
    result: 'A distinct, professional look that builds instant trust with premium clients.',
    description: 'Logo design, style guides, and digital assets that stand out.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    icon: <Cpu className="w-8 h-8" />,
    problem: 'Manual repetitive tasks are draining your team’s productivity and scaling potential.',
    solution: 'Custom AI workflows and chatbots that handle lead gen, FAQ, and internal data.',
    result: 'Save 20+ hours weekly and respond to customers 24/7 without extra hiring.',
    description: 'Zapier, OpenAI integrations, and workflow streamlining.'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: <MessageSquare className="w-8 h-8" />,
    problem: 'Inconsistent posting leads to a "ghost town" profile that scares away investors.',
    solution: 'Strategic content pillars, professional design, and active engagement growth.',
    result: 'Increased brand awareness and a warm pipeline of leads from social channels.',
    description: 'Instagram, LinkedIn, and Facebook growth strategy.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <TrendingUp className="w-8 h-8" />,
    problem: 'Burning budget on ads that don’t convert or reach the right people.',
    solution: 'Data-driven SEO and PPC campaigns focused on high-intent startup audiences.',
    result: 'Lower Customer Acquisition Cost (CAC) and scalable revenue growth.',
    description: 'Google Ads, Meta Ads, and SEO optimization.'
  },
  {
    id: 'va-services',
    title: 'Virtual Assistant Services',
    icon: <UserCheck className="w-8 h-8" />,
    problem: 'Founders overwhelmed by admin tasks can’t focus on high-level strategy.',
    solution: 'Trained professionals to handle scheduling, research, and daily operations.',
    result: 'Clean headspace for founders and organized business systems.',
    description: 'Dedicated support for scaling businesses.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Nexus Fintech App',
    category: 'Web Design & Branding',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800&h=600',
    problem: 'Nexus had a great product but a website that looked like a 2010 blog, scaring off serious investors.',
    solution: 'Full rebranding and a high-performance landing page with interactive demos and trust indicators.',
    result: 'Secured $2.4M Seed funding within 3 months of relaunch.'
  },
  {
    id: '2',
    title: 'EcoStore E-commerce',
    category: 'SEO & Marketing',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800&h=600',
    problem: 'High traffic from social media but almost zero conversions due to a clunky checkout process.',
    solution: 'UX Audit and overhaul of the mobile checkout flow, plus data-driven retargeting ads.',
    result: 'Conversion rate jumped from 0.4% to 3.2% in 60 days.'
  },
  {
    id: '3',
    title: 'SwiftLogistics AI',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
    problem: 'Managing 500+ daily support tickets manually was leading to 48-hour response times.',
    solution: 'Implemented a custom AI agent to handle Tier-1 inquiries and automated ticket sorting.',
    result: '90% of tickets resolved instantly; 40% reduction in support costs.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Lumina Tech',
    content: "Pixion Studio didn't just build a website; they built a revenue machine. Our lead volume tripled in the first month.",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder',
    company: 'Swift Logistics',
    content: "The AI automation they set up for us is worth its weight in gold. We're doing more work with fewer people.",
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: '3',
    name: 'Jessica Moore',
    role: 'Head of Growth',
    company: 'EcoStore',
    content: "The level of strategic depth they brought to our branding was unexpected. Truly a partner, not just a vendor.",
    avatar: 'https://i.pravatar.cc/150?u=jessica'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. We specialize in helping startups establish a professional presence quickly. We offer scalable solutions that grow as your business grows."
  },
  {
    question: "How long does a typical website project take?",
    answer: "Most startup websites take between 4 to 6 weeks from discovery to launch, depending on the complexity and features required."
  },
  {
    question: "Can I start with one service and scale later?",
    answer: "Yes! Many of our clients start with a high-converting website and then add Social Media Management or AI Automation as they grow."
  },
  {
    question: "Do you handle WordPress development?",
    answer: "Yes, we are experts in both modern React-based applications and professional, high-performance WordPress builds for startups."
  }
];

export const CLIENT_LOGOS = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg'
];
