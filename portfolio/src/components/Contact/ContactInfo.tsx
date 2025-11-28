import * as FaIcons from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { contactData } from '../../data/contact';

const ContactInfo = () => {
  const getIcon = (iconName: string) => {
    return FaIcons[iconName as keyof typeof FaIcons] as React.ComponentType<{ className?: string }>;
  };

  return (
    <div className="space-y-8">
      {/* Contact details */}
      <div className="space-y-6">
        <div className="group flex items-start gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/60 to-[#0b182c]/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/40">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef9c7]/20 to-[#33f3ff]/20">
            <FaEnvelope className="h-5 w-5 text-[#33f3ff]" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">Email</h3>
            <a 
              href={`mailto:${contactData.email}`}
              className="text-base font-medium text-[#edf6ff] transition-colors hover:text-[#33f3ff] sm:text-lg"
            >
              {contactData.email}
            </a>
          </div>
        </div>

        <div className="group flex items-start gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/60 to-[#0b182c]/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/40">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef9c7]/20 to-[#33f3ff]/20">
            <FaMapMarkerAlt className="h-5 w-5 text-[#33f3ff]" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">Location</h3>
            <p className="text-base font-medium text-[#edf6ff] sm:text-lg">
              {contactData.location}
            </p>
          </div>
        </div>

        <div className="group flex items-start gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/60 to-[#0b182c]/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/40">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef9c7]/20 to-[#33f3ff]/20">
            <FaClock className="h-5 w-5 text-[#33f3ff]" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">Availability</h3>
            <p className="text-base font-medium text-[#edf6ff] sm:text-lg">
              {contactData.availability}
            </p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">Connect</h3>
        <div className="flex flex-wrap gap-3">
          {contactData.social.map((social, index) => {
            const IconComponent = getIcon(social.icon);
            
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[#050b16]/80 to-[#0b182c]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#33f3ff]/50 hover:bg-gradient-to-br hover:from-[#7ef9c7]/10 hover:to-[#33f3ff]/10"
                aria-label={social.name}
              >
                {IconComponent && <IconComponent className="h-5 w-5 text-[#8ea2c6] transition-colors group-hover:text-[#33f3ff]" />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
