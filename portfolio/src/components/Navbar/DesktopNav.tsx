import { NAV_ITEMS } from './constants';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-1">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="px-4 py-2 text-sm font-medium text-[#edf6ff] hover:text-[#7ef9c7] rounded-xl hover:bg-[rgba(126,249,199,0.1)] transition-all duration-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default DesktopNav;
