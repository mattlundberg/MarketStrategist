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
    title: "Facebook Marketing",
    description: "Strategic Facebook campaigns and community building that drive engagement and conversions through targeted content and ads.",
    features: ["Content Strategy", "Ad Campaign Management", "Community Engagement"]
  },
  {
    icon: Instagram,
    title: "Instagram Growth",
    description: "Visual storytelling and aesthetic curation that builds authentic connections and drives business growth through Instagram.",
    features: ["Visual Content Planning", "Stories & Reels Strategy", "Hashtag Optimization"]
  },
  {
    icon: SiTiktok,
    title: "TikTok Strategy",
    description: "Viral content creation and trend leveraging that amplifies your brand reach across TikTok's dynamic platform.",
    features: ["Trend Analysis", "Viral Content Creation", "Algorithm Optimization"],
    isReactIcon: true
  },
  {
    icon: SiPinterest,
    title: "Pinterest Marketing",
    description: "SEO-optimized Pinterest strategies that drive traffic and sales through strategic pin creation and board optimization.",
    features: ["Pin Design & SEO", "Board Strategy", "Traffic Generation"],
    isReactIcon: true
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurturing email sequences and newsletters that convert subscribers into loyal customers through personalized messaging.",
    features: ["Email Automation", "List Building", "Campaign Analytics"]
  },
  {
    icon: Users,
    title: "Facebook Groups",
    description: "Community building and engagement strategies that foster brand loyalty and create valuable networking opportunities.",
    features: ["Community Management", "Engagement Strategies", "Growth Tactics"]
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
