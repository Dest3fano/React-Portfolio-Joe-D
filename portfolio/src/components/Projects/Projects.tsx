import { useState } from 'react';
import { FaCode, FaFilter } from 'react-icons/fa';
import { projects, categories } from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section
      id="projects"
      className="relative -mt-12 overflow-hidden px-4 pt-16 pb-24 sm:-mt-16 sm:px-6 sm:pt-20 sm:pb-24 lg:-mt-20 lg:px-8 lg:pt-24 lg:pb-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#7ef9c7]/10 via-[#33f3ff]/8 to-transparent blur-[120px]" />
        <div className="absolute right-1/3 bottom-20 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#9e82ff]/12 to-transparent blur-[100px] animate-pulse-slow" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold text-[#edf6ff] sm:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaFilter className="h-4 w-4 text-[#8ea2c6]" />
            <span className="text-sm font-medium text-[#8ea2c6]">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`
                  relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300
                  ${activeFilter === category.value
                    ? 'border border-[#33f3ff]/50 bg-gradient-to-r from-[#7ef9c7]/20 via-[#33f3ff]/20 to-[#9e82ff]/20 text-[#edf6ff] shadow-[0_10px_30px_rgba(51,243,255,0.2)]'
                    : 'border border-[rgba(255,255,255,0.1)] bg-gradient-to-r from-[#050b16]/80 to-[#0b182c]/60 text-[#8ea2c6] hover:border-[#33f3ff]/30 hover:text-[#edf6ff]'
                  }
                `}
              >
                {activeFilter === category.value && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7ef9c7]/10 via-[#33f3ff]/10 to-[#9e82ff]/10" />
                )}
                <span className="relative">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
            <div className="mb-4 rounded-full bg-gradient-to-br from-[#7ef9c7]/10 to-[#33f3ff]/10 p-6">
              <FaCode className="h-12 w-12 text-[#33f3ff]" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-[#edf6ff]">No projects found</h3>
            <p className="text-[#8ea2c6]">Try selecting a different category</p>
          </div>
        )}

        {/* View more section */}
        {filteredProjects.length > 0 && (
          <div className="mt-16 text-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-[#8ea2c6]">
                Want to see more? Check out my{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#33f3ff] transition-colors hover:text-[#7ef9c7]"
                >
                  GitHub profile
                </a>
              </p>
              
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#33f3ff]/50 to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
