import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import type { Project } from '../../data/projects';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryEmojiMap: Record<string, string> = {
  Ai: '🤖',
  FinTech: '💹',
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const primaryCategory = project.categories[0];
  const categoryEmoji = primaryCategory ? (categoryEmojiMap[primaryCategory] ?? '🚀') : '🚀';

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/90 via-[#0b182c]/80 to-[#050b16]/90 backdrop-blur-sm transition-all duration-500 hover:border-[#33f3ff]/40 hover:shadow-[0_30px_70px_rgba(51,243,255,0.15)] animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ef9c7]/5 via-[#33f3ff]/5 to-[#9e82ff]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Badge area */}
      <div className="absolute right-4 top-4 z-20">
        {project.startupBadge && (
          <div className="rounded-full border border-[#9e82ff]/30 bg-gradient-to-r from-[#9e82ff]/20 to-[#33f3ff]/20 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9e82ff]">Startup</span>
          </div>
        )}
      </div>

      {/* Image container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0b182c] to-[#050b16] sm:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b16] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7ef9c7]/10 via-[#33f3ff]/10 to-[#9e82ff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 rounded-full bg-[rgba(5,11,22,0.6)] px-4 py-1 text-sm font-semibold text-[#edf6ff]">
          {categoryEmoji}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col p-6 sm:p-8">
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-[#edf6ff] transition-colors duration-300 group-hover:text-[#33f3ff] sm:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 min-h-[3rem] text-sm leading-relaxed text-[#8ea2c6] sm:text-base">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-6 flex min-h-[2.5rem] flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} index={idx} />
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="group/link inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.25)] bg-gradient-to-r from-[#050b16]/80 via-[#0b182c]/70 to-[#050b16]/80 px-4 py-3 text-sm font-semibold text-[#edf6ff] backdrop-blur-sm transition-all duration-300 hover:border-[#7ef9c7]/50 hover:text-[#7ef9c7]"
            >
              <FaFileAlt className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">Case Study</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(5,11,22,0.65)] px-4 py-3 text-sm font-semibold text-[#edf6ff] backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/40 hover:text-[#33f3ff]"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">Live Demo</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.15)] px-4 py-3 text-sm font-medium text-[#8ea2c6] transition-all duration-300 hover:border-[#9e82ff]/40 hover:text-[#9e82ff]"
            >
              <FaGithub className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">View Code</span>
            </a>
          )}
          {!project.githubUrl && project.githubNote && (
            <div className="col-span-full rounded-lg border border-dashed border-[rgba(255,255,255,0.15)] px-4 py-3 text-xs text-[#8ea2c6]">
              {project.githubNote}
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#33f3ff]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
};

export default ProjectCard;
