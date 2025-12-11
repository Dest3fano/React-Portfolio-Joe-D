import { reviews } from '../../data/reviews';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <section id="reviews" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

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
