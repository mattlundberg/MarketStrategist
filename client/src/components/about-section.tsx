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
                With over 5 years of hands-on digital marketing experience, I've helped businesses grow real revenue through intentional, relationship-based social media strategies. I specialize in helping brands connect with their audience, grow engaged communities, and drive consistent, measurable results across platforms like Instagram, TikTok, Facebook Groups, Pinterest, and email marketing.
              </p>
              <p>
                I've been professionally trained inside <span className="font-bold">Rachel Pedersen's 'The Clique'</span>, where I've gained expert-level strategy through ongoing mentorship, cutting-edge trainings, and collaboration with some of the best social media marketers in the industry.
              </p>
              <p>
                I bring the perfect blend of <span className="font-bold">creative storytelling</span> and <span className="font-bold">data-driven strategy</span> to every campaign — designing content that's not only beautiful, but also built to convert.
              </p>
              <p>
                When I'm not optimizing content calendars or reverse-engineering client goals, I'm soaking up the latest algorithm changes and trends so my clients can stay ahead of the curve — and the competition.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">What Sets Me Apart</h3>
              <div className="grid gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                  <div className="text-lg font-semibold text-primary">Trained by Rachel Pedersen</div>
                  <div className="text-gray-600">Member of Rachel Pedersen's elite social media mastermind</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                  <div className="text-lg font-semibold text-primary">Trusted by clients in 25+ industries</div>
                </div>
              </div>
            </div>

            {/* <button className="bg-accent text-white px-8 py-4 rounded-full hover:bg-accent/90 transition duration-300 font-semibold">
              <FileDown className="inline w-5 h-5 mr-2" />
              Download My Resume
            </button> */}
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
