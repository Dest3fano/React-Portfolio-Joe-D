interface HeroImageProps {
  imageUrl: string;
  name: string;
}

const HeroImage = ({ imageUrl, name }: HeroImageProps) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      {/* Animated gradient background */}
      <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#7ef9c7]/40 via-[#33f3ff]/30 to-[#9e82ff]/40 blur-3xl animate-pulse-slow" />
      
      {/* Rotating border effect */}
      <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-[#7ef9c7] via-[#33f3ff] to-[#9e82ff] opacity-75 blur-md animate-spin-slow" />

      {/* Image container */}
      <div className="relative overflow-hidden rounded-[28px] border-2 border-[rgba(89,140,255,0.35)] bg-[rgba(8,17,35,0.75)] p-3 shadow-[0_25px_65px_rgba(3,7,18,0.85)] backdrop-blur-md">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#030915] via-[#050e20] to-[#01040b]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/35 to-[#010308]/75 mix-blend-screen" />
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-700 mix-blend-lighten opacity-90 hover:scale-105"
            onError={(e) => {
              // Fallback to placeholder if image doesn't load
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg width="400" height="500" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="500" fill="%23050e20"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%237ef9c7"%3EJD%3C/text%3E%3C/svg%3E';
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/10 mix-blend-soft-light" />
        </div>

      </div>
    </div>
  );
};

export default HeroImage;
