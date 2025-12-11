import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../../data/profile';
import HeroImage from './HeroImage';
import TechStack from './TechStack';


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-36 pb-20 sm:px-6 lg:px-8 lg:pt-44">

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Left column - Content */}
        <div className="space-y-8">

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight text-[#edf6ff] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-[#7ef9c7] via-[#33f3ff] to-[#9e82ff] bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="text-2xl font-semibold text-[#33f3ff] sm:text-3xl md:text-4xl lg:text-5xl">
              {profile.role}
            </p>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            I combine sharp design, clean code, and smart strategy to build lightning fast websites that get noticed, generate leads, and grow your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex rounded-full bg-gradient-to-r from-[#7ef9c7] via-[#33f3ff] to-[#9e82ff] p-[2px] text-base font-semibold text-white shadow-[0_15px_40px_rgba(8,17,35,0.4)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-[#030712] px-7 py-3 text-sm text-[#edf6ff] sm:text-base">
                <span className="tracking-wide uppercase text-xs text-[#7ef9c7] sm:text-sm">View My Work</span>
                <ArrowRight className="h-5 w-5 text-[#7ef9c7] transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.25)] bg-gradient-to-r from-[#050b16] via-[#0b182c] to-[#050b16] px-8 py-3 text-base font-semibold text-[#edf6ff] transition-all duration-300 hover:border-[#9e82ff] hover:shadow-[0_20px_45px_rgba(9,14,24,0.6)]"
            >
              <span className="rounded-full bg-[rgba(158,130,255,0.2)] p-2 text-[#9e82ff]">
                <Download className="h-4 w-4" />
              </span>
              <span className="tracking-wide uppercase text-xs">Download CV</span>
            </a>
          </div>

    
          {/* Tech Stack */}
          <TechStack />
        </div>

        {/* Right column - Image */}
        <div className="relative lg:ml-auto">
          <HeroImage imageUrl={profile.imageUrl} name={profile.name} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
