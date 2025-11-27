import { useEffect } from 'react';
import { NAV_ITEMS } from './constants';
import SocialLinks from './SocialLinks';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-24 right-4 left-4 z-50 md:hidden transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="backdrop-blur-md bg-[rgba(8,17,35,0.95)] border border-[rgba(89,140,255,0.35)] rounded-2xl shadow-[0_25px_65px_rgba(3,7,18,0.9)] overflow-hidden">
          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-[#edf6ff] hover:text-[#7ef9c7] hover:bg-[rgba(126,249,199,0.1)] rounded-xl transition-all duration-200 animate-slide-in"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-[rgba(89,140,255,0.25)]" />

          {/* Social Icons */}
          <div className="p-4 flex items-center justify-center gap-4">
            <SocialLinks className="p-3" iconSize={6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
