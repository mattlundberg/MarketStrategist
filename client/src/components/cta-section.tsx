import { Phone, Mail } from "lucide-react";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
          Ready to Transform Your Social Media Strategy?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Let's discuss how strategic social media marketing can drive real results for your business. Book your complimentary strategy session today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToContact}
            className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 font-semibold text-lg shadow-lg"
          >
            <Phone className="inline w-5 h-5 mr-2" />
            Schedule Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary transition duration-300 font-semibold text-lg">
            <Mail className="inline w-5 h-5 mr-2" />
            Get Strategy Guide
          </button>
        </div>

        <div className="mt-8 text-sm opacity-75">
          <p>No obligation • 30-minute strategy session • Customized recommendations</p>
        </div>
      </div>
    </section>
  );
}
