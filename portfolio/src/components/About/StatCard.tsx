import * as FaIcons from 'react-icons/fa';

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  index: number;
}

const getIcon = (iconName: string) => {
  return FaIcons[iconName as keyof typeof FaIcons] as React.ComponentType<{ className?: string }>;
};

const StatCard = ({ label, value, icon, index }: StatCardProps) => {
  const IconComponent = getIcon(icon);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/80 via-[#0b182c]/60 to-[#050b16]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/50 hover:shadow-[0_20px_50px_rgba(51,243,255,0.15)] animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ef9c7]/5 via-[#33f3ff]/5 to-[#9e82ff]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex min-h-[170px] flex-col items-center justify-center gap-3 text-center">
        {/* Icon */}
        <div className="mb-4 rounded-full bg-gradient-to-br from-[#7ef9c7]/20 to-[#33f3ff]/20 p-3 transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="h-6 w-6 text-[#33f3ff]" />
        </div>
        
        {/* Value */}
        <div className="mb-2 text-3xl font-bold bg-gradient-to-r from-[#7ef9c7] via-[#33f3ff] to-[#9e82ff] bg-clip-text text-transparent">
          {value}
        </div>
        
        {/* Label */}
        <div className="text-sm font-medium text-[#8ea2c6] group-hover:text-[#edf6ff]/80 transition-colors">
          {label}
        </div>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7ef9c7]/20 via-[#33f3ff]/20 to-[#9e82ff]/20 blur-xl" />
      </div>
    </div>
  );
};

export default StatCard;
