import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { techStack } from '../../data/profile';

const TechStack = () => {
  const allTech = [
    ...techStack.frontend,
    ...techStack.backend,
    ...techStack.tools,
  ];

  const getIcon = (iconName: string) => {
    const allIcons = { ...FaIcons, ...SiIcons };
    return allIcons[iconName as keyof typeof allIcons] as React.ComponentType<{ className?: string }>;
  };

  return (
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-[#8ea2c6]">Tech Stack</p>
      <div className="flex flex-wrap gap-3">
        {allTech.map((tech) => {
          const IconComponent = getIcon(tech.icon);
          
          return (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-xl border border-[rgba(89,140,255,0.3)] bg-[rgba(8,17,35,0.6)] px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-[#7ef9c7] hover:bg-[rgba(126,249,199,0.05)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                {IconComponent && (
                  <span style={{ color: tech.color }}>
                    <IconComponent className="w-5 h-5" />
                  </span>
                )}
                <span className="text-sm font-medium text-[#edf6ff]">{tech.name}</span>
              </div>
              <div
                className="absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
