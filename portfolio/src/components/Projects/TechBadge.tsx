interface TechBadgeProps {
  tech: string;
  index: number;
}

const TechBadge = ({ tech, index }: TechBadgeProps) => {
  return (
    <span
      className="inline-flex items-center rounded-lg border border-[rgba(51,243,255,0.2)] bg-gradient-to-r from-[#050b16]/80 to-[#0b182c]/60 px-3 py-1.5 text-xs font-medium text-[#33f3ff] backdrop-blur-sm transition-all duration-300 hover:border-[#7ef9c7]/50 hover:text-[#7ef9c7] hover:shadow-[0_4px_12px_rgba(51,243,255,0.2)]"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
