import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import SocialLinks from './SocialLinks';
import useScrollDetection from './useScrollDetection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollDetection(20);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'w-[95%] md:w-[88%]' : 'w-[95%] md:w-[92%]'
        }`}
      >
        <div
          className={`backdrop-blur-md bg-[rgba(8,17,35,0.85)] border border-[rgba(89,140,255,0.35)] rounded-3xl shadow-[0_25px_65px_rgba(3,7,18,0.8)] transition-all duration-300 ${
            scrolled ? 'py-3 px-4 md:px-6' : 'py-4 px-5 md:px-8'
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <DesktopNav />
            
            <div className="hidden md:flex items-center gap-2">
              <SocialLinks />
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-[#edf6ff] hover:text-[#7ef9c7] hover:bg-[rgba(126,249,199,0.1)] rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={isOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
