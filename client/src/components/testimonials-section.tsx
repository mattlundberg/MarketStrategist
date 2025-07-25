import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Working with Emilie has been a pure pleasure and has completely transformed our social media strategy. Our posts went from occasional and mundane to consistent and creative — driving strategy and results. In just 9 months, our engagement skyrocketed and sales exceeded forecasts. The peace of mind she gives us is priceless.",
    name: "Cody Dingus",
    company: "Founder, Finders Seekers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Emilie is an enthusiastic partner who shows up prepared, strategic, and full of creative ideas. She blends analytical thinking with innovative marketing and truly cared about my product and audience. A joy to work with.",
    name: "Neylan Blane",
    company: "CEO, Duet Parter",
    image: "https://images.unsplash.com/photo-1494790108755-2616b4fa8a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "We couldn't be more thrilled. Emilie's expertise and innovative strategies have taken our violin teaching business to new heights. Our online presence has grown significantly, and we've seen a huge boost in student enrollments. She's made an incredible impact.",
    name: "Melodie",
    company: "Founder, Violin for Kids", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Before Emilie, I was invisible online. In just a few months, my fine art Instagram was buzzing. I got featured by the local news, landed new opportunities through email marketing, and even my coworkers started asking who was behind my account. Emilie didn't just grow my platform — she elevated my entire brand.",
    name: "Joel Gardner",
    company: "Fine Artist, Prescriptive Fine Art",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);

  const nextTestimonials = () => {
    if (currentIndex < maxIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevTestimonials = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => Math.max(prev - 1, 0));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(pageIndex);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses who trusted their growth to strategic social media marketing.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={prevTestimonials}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-2 border-primary text-primary p-3 rounded-full hover:bg-primary hover:text-white transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {currentIndex < maxIndex && (
            <button
              onClick={nextTestimonials}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-2 border-primary text-primary p-3 rounded-full hover:bg-primary hover:text-white transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="relative">
            <div 
              className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
                width: `${(testimonials.length / testimonialsPerView) * 90}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-gradient-to-br from-secondary to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 h-full">
                    <div className="flex items-center mb-6">
                      <div className="flex text-highlight">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.name} testimonial`} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-primary">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {testimonials.length > testimonialsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    i === Math.floor(currentIndex / testimonialsPerView)
                      ? 'bg-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/*<div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition duration-300 font-semibold">
            <ChevronRight className="inline w-5 h-5 mr-2" />
            Read More Success Stories
          </button>
        </div> */}
      </div>
    </section>
  );
}
