import { FileDown, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-secondary to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Meet Emilie Lundberg
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Your Strategic Social Media Partner
              </p>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over 5 years of experience in digital marketing, I've helped 150+ businesses transform their social media presence into profitable revenue streams. My passion lies in creating authentic connections between brands and their audiences.
              </p>
              <p>
                I believe in data-driven strategies combined with creative storytelling. Every campaign I design is tailored to your unique brand voice and business objectives, ensuring maximum ROI and sustainable growth.
              </p>
              <p>
                When I'm not crafting the perfect social media strategy, you'll find me staying ahead of the latest platform updates and digital trends to keep my clients at the forefront of their industries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
            </div>

            <button className="bg-accent text-white px-8 py-4 rounded-full hover:bg-accent/90 transition duration-300 font-semibold">
              <FileDown className="inline w-5 h-5 mr-2" />
              Download My Resume
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Elegant digital marketing workspace" 
              className="rounded-3xl shadow-2xl w-full"
            />
            
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-highlight rounded-full flex items-center justify-center">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Top 1% Marketer</div>
                  <div className="text-sm text-gray-600">Industry Recognition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
