import CFO from '../img/CFO.png'

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string | null;
  githubNote?: string;
  caseStudyUrl?: string;
  caseStudyId?: string;
  featured: boolean;
  startupBadge?: boolean;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'CFO Agenda Intelligence Platform',
    description: 'AI powered agenda builder helping finance leaders plan investor ready meetings with real time insights.',
    longDescription:
      'Designed and developed a confidential AI assistant for CFO teams that consolidates financial data, surfaces investor-ready talking points, and streamlines meeting prep workflows. Integrated secure authentication, dynamic agenda templates, and OpenAI-powered summarization tuned for finance compliance.',
    image: CFO,
    technologies: ['React', 'OpenAI API', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://offical-cfo-t0uz.onrender.com/',
    githubUrl: null,
    githubNote: 'GitHub repository available upon request due to client confidentiality and sensitive financial data',
    caseStudyUrl: 'https://example.com/case-study/ai-financial',
    caseStudyId: 'cfo-agenda-tool',
    featured: true,
    startupBadge: true,
    categories: ['FullStack', 'Frontend'],
  },
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'FullStack', label: 'Full Stack' },
  { value: 'Frontend', label: 'Frontend' },
];
