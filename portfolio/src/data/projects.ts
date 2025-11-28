export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack' | 'tool';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    longDescription: 'Built a complete e-commerce platform with payment integration, admin dashboard, and real-time inventory tracking. Implemented secure authentication and optimized for performance.',
    image: '/projects/ecommerce.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    caseStudyUrl: '/case-studies/ecommerce-platform',
    featured: true,
    category: 'fullstack'
  },
  
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Apps' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'tool', label: 'Tools' }
];
