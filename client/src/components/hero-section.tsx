import { Calendar, Download, TrendingUp } from "lucide-react";
import emilieImage from "@/assets/images/emilie.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-secondary via-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                Transform Your
                <span className="text-accent block">Social Media</span>
                Into Revenue
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Strategic social media marketing that converts followers into loyal customers across Facebook, Instagram, TikTok, Pinterest, and email campaigns.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <Calendar className="inline w-5 h-5 mr-2" />
                Book Strategy Call
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition duration-300 font-semibold text-lg">
                <Download className="inline w-5 h-5 mr-2" />
                Free Strategy Guide
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">13+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3x ROI</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-600">Years of Marketing Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={emilieImage}
              alt="Professional female marketing consultant" 
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-highlight rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">3x ROI Average</div>
                  <div className="text-sm text-gray-600">Client Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
