import { Star, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Emilie transformed our Instagram presence completely. Our engagement increased by 300% and we saw a direct impact on sales within just 2 months.",
    name: "Sarah Johnson",
    company: "Boutique Owner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b4fa8a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The email marketing strategy Emilie created for us generated over $50K in additional revenue in our first quarter. Her expertise is unmatched.",
    name: "Michael Chen",
    company: "Tech Startup CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Working with Emilie was a game-changer. Her Pinterest strategy alone brought us 10,000 new website visitors in just 3 months.",
    name: "Emma Rodriguez",
    company: "Lifestyle Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses who trusted their growth to strategic social media marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-secondary to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
            >
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
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition duration-300 font-semibold">
            <ChevronRight className="inline w-5 h-5 mr-2" />
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}
