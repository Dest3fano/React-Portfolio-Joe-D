import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import type { Review } from '../../data/reviews';

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/90 via-[#0b182c]/80 to-[#050b16]/90 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#33f3ff]/40 hover:shadow-[0_30px_70px_rgba(51,243,255,0.15)] sm:p-8 animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ef9c7]/5 via-[#33f3ff]/5 to-[#9e82ff]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote icon */}
      <div className="relative mb-4">
        <div className="inline-flex rounded-full bg-gradient-to-br from-[#7ef9c7]/20 to-[#33f3ff]/20 p-2.5">
          <FaQuoteLeft className="h-5 w-5 text-[#33f3ff]" />
        </div>
      </div>

      {/* Review text */}
      <div className="relative mb-6 flex-1">
        <p className="text-sm leading-relaxed text-[#8ea2c6] sm:text-base">
          "{review.content}"
        </p>
      </div>

      {/* Rating */}
      <div className="relative mb-5 flex gap-1">
        {Array.from({ length: review.rating }).map((_, idx) => (
          <FaStar key={idx} className="h-3.5 w-3.5 text-[#7ef9c7]" />
        ))}
      </div>

      {/* Reviewer info */}
      <div className="relative flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef9c7]/30 to-[#33f3ff]/30 text-lg font-bold text-[#edf6ff]">
          {review.name.charAt(0)}
        </div>

        {/* Details */}
        <div className="flex-1">
          <h3 className="mb-0.5 text-base font-bold text-[#edf6ff] sm:text-lg">
            {review.name}
          </h3>
          <p className="text-xs text-[#8ea2c6] sm:text-sm">
            {review.position} · {review.company}
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#33f3ff]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
};

export default ReviewCard;
