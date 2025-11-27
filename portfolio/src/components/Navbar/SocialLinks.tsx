import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
};

const SocialLinks = ({ className = '', iconSize = 5 }: SocialLinksProps) => {
  return (
    <>
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 text-[#edf6ff] hover:text-[#33f3ff] hover:bg-[rgba(51,243,255,0.1)] rounded-lg transition-all duration-200 ${className}`}
            aria-label={link.name}
          >
            <Icon className={`w-${iconSize} h-${iconSize}`} />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
