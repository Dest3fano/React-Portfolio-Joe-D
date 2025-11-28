import { reviews } from '../../data/reviews';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <section id="reviews" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#9e82ff]/12 via-[#33f3ff]/8 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute right-1/4 bottom-40 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-[#7ef9c7]/10 to-transparent blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold text-[#edf6ff] sm:text-5xl lg:text-6xl">
            Client Testimonials
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
