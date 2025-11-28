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
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'Developed a real-time task management application with team collaboration features, drag-and-drop interface, and notification system.',
    image: '/projects/taskapp.jpg',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    caseStudyUrl: '/case-studies/task-management-app',
    featured: true,
    category: 'web'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with interactive maps and forecasts',
    longDescription: 'Created a weather dashboard that displays real-time weather data, interactive maps, and 7-day forecasts using multiple weather APIs.',
    image: '/projects/weather.jpg',
    tech: ['React', 'TypeScript', 'OpenWeather API', 'Mapbox'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    caseStudyUrl: '/case-studies/weather-dashboard',
    featured: false,
    category: 'web'
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Headless CMS for managing portfolio content dynamically',
    longDescription: 'Built a custom headless CMS for portfolio management with markdown support, image optimization, and API endpoints.',
    image: '/projects/cms.jpg',
    tech: ['Node.js', 'Express', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com',
    caseStudyUrl: '/case-studies/portfolio-cms',
    featured: false,
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans',
    longDescription: 'Designed and developed a fitness tracking application with custom workout plans, progress tracking, and social features.',
    image: '/projects/fitness.jpg',
    tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
    caseStudyUrl: '/case-studies/fitness-tracker',
    featured: false,
    category: 'mobile'
  },
  {
    id: 6,
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing and sharing code snippets',
    longDescription: 'Created a code snippet manager with syntax highlighting, tagging system, and team sharing capabilities.',
    image: '/projects/snippets.jpg',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Prism.js'],
    githubUrl: 'https://github.com',
    caseStudyUrl: '/case-studies/code-snippet-manager',
    featured: false,
    category: 'tool'
  }
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Apps' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'tool', label: 'Tools' }
];
