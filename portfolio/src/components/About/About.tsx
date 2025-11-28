import * as FaIcons from 'react-icons/fa';
import { aboutData } from '../../data/about';
import StatCard from './StatCard';

const About = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons] as React.ComponentType<{ className?: string }>;
    return IconComponent ?? FaIcons.FaRegCircle;
  };

  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-[#9e82ff]/15 via-[#33f3ff]/10 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute left-1/3 bottom-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#7ef9c7]/10 to-transparent blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center animate-fadeIn">
          
          <h2 className="mb-4 text-4xl font-bold text-[#edf6ff] sm:text-5xl lg:text-6xl">
            {aboutData.title}
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-[#8ea2c6] sm:text-xl">
            {aboutData.description}
          </p>
        </div>

        {/* Stats grid */}
        <div className="mb-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {aboutData.stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>

        {/* Story section */}
        <div className="mb-20 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              {/* Left: Interests */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-[#edf6ff]">
                  What I'm Into
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {aboutData.interests.map((interest, index) => {
                    const IconComponent = getIcon(interest.icon);

                    return (
                      <div
                        key={index}
                        className="group flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/60 to-[#0b182c]/40 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/40 hover:shadow-[0_10px_30px_rgba(51,243,255,0.1)]"
                      >
                        {IconComponent && (
                          <span className="rounded-full bg-[rgba(51,243,255,0.08)] p-2 text-[#33f3ff] transition-colors group-hover:text-[#7ef9c7]">
                            <IconComponent className="h-4 w-4" />
                          </span>
                        )}
                        <span className="text-sm font-medium text-[#8ea2c6] group-hover:text-[#edf6ff]/90 transition-colors">
                          {interest.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Story */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#edf6ff]">
                  My Journey
                </h3>
                {aboutData.story.map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-relaxed text-[#8ea2c6]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
