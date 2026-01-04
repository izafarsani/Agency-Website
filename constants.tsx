
import { WPContent } from './types';

export const DEFAULT_WP_CONTENT: WPContent = {
  theme: {
    brandColor: '#0F172A',
    accentColor: '#38BDF8',
    headerTitle: 'Pixion Studio',
    logoText: 'Pixion Studio',
    heroHeadline: 'We Help Startups Build, Scale, and Automate Their Growth',
    heroSubheadline: 'From high-converting websites and branding to AI-powered systems — we help you grow faster with smart digital foundations.',
    primaryCTA: 'Book a Free Strategy Call',
    secondaryCTA: 'View Our Services',
    footerText: 'Helping startups and developing businesses build automated growth machines through strategic design and AI systems.',
    whatsappNumber: '1234567890'
  },
  processSteps: [
    { id: 1, title: 'Discovery & Strategy', icon: 'Search', description: 'We map your growth path based on competitor data and user psychology.' },
    { id: 2, title: 'UI/UX Design', icon: 'Layout', description: 'Design that doesnt just look pretty, but directs users toward conversion.' },
    { id: 3, title: 'Fast Development', icon: 'Code', description: 'High-performance, mobile-first builds that load in under 1.5 seconds.' },
    { id: 4, title: 'Launch & Optimization', icon: 'Rocket', description: 'We deploy and continuously optimize for peak performance and ROI.' }
  ],
  problemPoints: [
    { title: 'Outdated Websites', description: 'Slow, ugly sites that kill trust and drive potential leads to your competitors.' },
    { title: 'Ineffective Marketing', description: 'Burning cash on ads and social content that fails to generate actual sales.' },
    { title: 'Weak Branding', description: 'Looking like a hobby business rather than a serious, investor-ready market contender.' },
    { title: 'Manual Overload', description: 'Wasting 20+ hours a week on admin tasks that should be automated by AI.' }
  ],
  services: [
    {
      id: 'web-design',
      title: 'Website Design & Development',
      icon: 'Globe',
      problem: 'Slow sites kill conversion.',
      solution: 'High-speed, conversion-optimized builds.',
      result: '40% increase in leads.',
      description: 'The digital storefront your startup deserves.'
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      icon: 'Palette',
      problem: 'Generic visuals ignore trust.',
      solution: 'Full visual identity & strategy.',
      result: 'Investor-ready presence.',
      description: 'Strategic branding for the modern era.'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      icon: 'Users',
      problem: 'Ghost town social profiles.',
      solution: 'Content strategy & engagement.',
      result: 'Active, loyal community.',
      description: 'Turning followers into brand advocates.'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      icon: 'Cpu',
      problem: 'Repetitive manual burnout.',
      solution: 'Custom AI agents & workflows.',
      result: 'Save 15+ hours weekly.',
      description: 'Smart systems that scale with you.'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: 'BarChart3',
      problem: 'Invisible to your customers.',
      solution: 'Data-driven growth campaigns.',
      result: 'Consistent, scalable traffic.',
      description: 'Marketing that actually returns ROI.'
    },
    {
      id: 'virtual-assistant',
      title: 'Virtual Assistant Services',
      icon: 'Zap',
      problem: 'Stuck in the admin weeds.',
      solution: 'Dedicated virtual support.',
      result: 'Focus on CEO-level tasks.',
      description: 'Expert support for growing teams.'
    }
  ],
  caseStudies: [
    {
      id: '1',
      title: 'Nexus Fintech',
      category: 'Web & Branding',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800&h=600',
      problem: 'Struggling to close Series A due to "unprofessional" presence.',
      solution: 'Rebranding and enterprise-grade responsive site.',
      result: 'Secured $2.4M funding within 90 days.'
    },
    {
      id: '2',
      title: 'Zonit AI',
      category: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
      problem: 'Manual customer support slowing down growth.',
      solution: 'Automated AI support agent and funnel optimization.',
      result: '90% reduction in support response time.'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Jenkins',
      role: 'CEO',
      company: 'Lumina Tech',
      content: "Pixion Studio built us more than a website; they built a growth machine. Our conversion rate tripled in month one.",
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Founder',
      company: 'SwiftPay',
      content: "Their AI automation saved my team hundreds of hours. Truly a partner for scaling businesses.",
      avatar: 'https://i.pravatar.cc/150?u=michael'
    }
  ],
  faqs: [
    {
      question: "Do you work with early-stage startups?",
      answer: "Absolutely. We specialize in helping seed and pre-seed startups launch with an investor-ready presence."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most high-performance sites take 4-6 weeks. Marketing and AI setups can be faster."
    },
    {
      question: "Can I start with one service and scale later?",
      answer: "Yes, we often start with branding or web design and move to AI automation as you grow."
    }
  ]
};

export const LOGO_PURPLE = 'https://generativelanguage.googleapis.com/v1beta/files/input_file_1.png';

export const CLIENT_LOGOS = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
];
