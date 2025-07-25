import { 
  Facebook, 
  Instagram, 
  Mail, 
  Users, 
  Check,
  ArrowRight
} from "lucide-react";
import { SiTiktok, SiPinterest } from "react-icons/si";

const services = [
  {
    icon: Facebook,
    title: "Facebook Group Growth",
    statement: "Turn passive followers into a thriving community.",
    description: "Community is the most underrated sales strategy. I help you grow and engage Facebook Groups that drive conversation, build trust, and generate consistent, warm leads — without ad spend.",
    features: ["Growth & Engagement Strategy", "Conversion-Focused Content", "Launch Support + Offer Validation"]
  },
  {
    icon: Users,
    title: "Facebook Business Page", 
    statement: "Turn Your Facebook Business Page Into a Sales Asset — Not Just a Social Placeholder",
    description: "Most business owners have a Facebook Page “because they're supposed to” — but it's outdated, inconsistent, or completely inactive. That's a missed opportunity. \n\nI help you turn your Page into a trust-building, conversion-ready hub that supports your entire marketing funnel.",
    features: ["Community Management", "Engagement Strategies", "Growth Tactics"]
  },
  {
    icon: Instagram,
    title: "Instagram Growth",
    statement: "Build a brand that converts with content that connects.",
    description: "From scroll-stopping visuals to reels that actually drive traffic, I’ll help you build a magnetic Instagram presence designed for real growth and real revenue.",
    features: ["Reels & Stories Strategy", "Content Planning + Execution", "Hashtag + Keyword Optimization"]
  },
  {
    icon: SiTiktok,
    title: "TikTok Strategy",
    statement: "Go viral with intention.",
    description: "Not just for Gen Z. I craft TikTok strategies that tap into trends while staying aligned with your brand — to grow your following and your client list.",
    features: ["Trend Integration", "Viral Content Planning", "CTA-Focused Strategy"],
    isReactIcon: true
  },
  {
    icon: SiPinterest,
    title: "Pinterest Marketing",
    statement: "Turn pins into passive traffic.",
    description: " I design Pinterest strategies that drive long-term visibility, traffic, and discovery using smart SEO, consistent branding, and pin-worthy design.",
    features: ["Pin Design + Optimization", "Board Strategy", "Searchable, Shareable Content"],
    isReactIcon: true
  },
  {
    icon: Mail,
    title: "Email Marketing",
    statement: "From follower to forever client.",
    description: "Turn clicks into conversions with emails that do more than land — they sell. I build nurturing sequences, list-building strategies, and launch flows that convert.",
    features: ["Email Automation", "Nurture Sequences", "Launch & Promo Emails"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Strategic Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive social media strategies tailored to your brand's unique voice and business goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-secondary to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  {service.isReactIcon ? (
                    <IconComponent className="text-white text-2xl" />
                  ) : (
                    <IconComponent className="text-white w-8 h-8" />
                  )}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-bold">
                  {service.statement}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90 transition duration-300 font-semibold text-lg shadow-lg">
            <ArrowRight className="inline w-5 h-5 mr-2" />
            View Detailed Packages
          </button>
        </div>
      </div>
    </section>
  );
}
