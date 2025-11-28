import { CheckCircle2 } from 'lucide-react';

interface SkillCategoryProps {
  category: string;
  items: string[];
  color: string;
  index: number;
}

const SkillCategory = ({ category, items, color, index }: SkillCategoryProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/90 via-[#0b182c]/70 to-[#050b16]/90 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#33f3ff]/40 hover:shadow-[0_25px_60px_rgba(51,243,255,0.12)] animate-slideUp"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ef9c7]/3 via-[#33f3ff]/3 to-[#9e82ff]/3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Floating orb effect */}
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
      
      <div className="relative z-10">
        {/* Category title */}
        <div className="mb-6 flex items-center gap-3">
          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${color}`} />
          <h3 className="text-xl font-bold text-[#edf6ff]">
            {category}
          </h3>
        </div>
        
        {/* Skills list */}
        <ul className="space-y-3">
          {items.map((skill, idx) => (
            <li 
              key={idx}
              className="flex items-start gap-3 text-[#8ea2c6] transition-colors duration-300 group-hover:text-[#edf6ff]/90"
              style={{ animationDelay: `${(index * 0.15) + (idx * 0.05)}s` }}
            >
              <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
              <span className="text-sm leading-relaxed sm:text-base">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Bottom gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
    </div>
  );
};

export default SkillCategory;
