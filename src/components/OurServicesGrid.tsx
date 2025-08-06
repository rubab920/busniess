import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Globe, 
  Share2,
  TrendingUp,
  BarChart3,
  Users,
  Linkedin,
  Zap,
  ShoppingCart,
  Cloud,
  Briefcase,
  Bot,
  Brain,
  Code,
  Palette,
  Smartphone,
  Layers
} from "lucide-react";

const OurServicesGrid = () => {
  const [activeTab, setActiveTab] = useState<"digital" | "ai" | "design">("digital");

  const digitalMarketingServices = [
    { name: "Link Building", icon: Share2 },
    { name: "Local SEO", icon: Globe },
    { name: "Online Reputation Management", icon: Users },
    { name: "SEO Services", icon: Search },
    { name: "Conversation Rate Optimisation", icon: BarChart3 },
    { name: "Lead Generation", icon: TrendingUp },
    { name: "Linkedin Marketing", icon: Linkedin },
    { name: "Adwords", icon: Zap },
    { name: "Paid Media", icon: BarChart3 },
    { name: "E-commerce Marketing", icon: ShoppingCart },
    { name: "Saas Marketing", icon: Cloud },
    { name: "B2b Marketing", icon: Briefcase }
  ];

  const aiServices = [
    { name: "AI Chatbots", icon: Bot },
    { name: "Machine Learning", icon: Brain },
    { name: "AI Analytics", icon: BarChart3 },
    { name: "Automation Tools", icon: Zap },
    { name: "AI Content Creation", icon: Search },
    { name: "Predictive Analytics", icon: TrendingUp }
  ];

  const designServices = [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Mobile App Development", icon: Smartphone },
    { name: "Brand Identity", icon: Layers },
    { name: "E-commerce Development", icon: ShoppingCart },
    { name: "CMS Development", icon: Globe }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case "ai":
        return aiServices;
      case "design":
        return designServices;
      default:
        return digitalMarketingServices;
    }
  };

  return (
    <section className="py-20 bg-brand-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 backdrop-blur-sm rounded-2xl p-2 gap-2">
            <button 
              onClick={() => setActiveTab("digital")}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                activeTab === "digital" 
                  ? "bg-white text-primary shadow-lg" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Digital Marketing
            </button>
            <button 
              onClick={() => setActiveTab("ai")}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                activeTab === "ai" 
                  ? "bg-white text-primary shadow-lg" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              AI
            </button>
            <button 
              onClick={() => setActiveTab("design")}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                activeTab === "design" 
                  ? "bg-white text-primary shadow-lg" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Design and Development
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentServices().map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="p-6 flex items-center gap-4">
                  {IconComponent && (
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <span className="font-semibold text-foreground">{service.name}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesGrid;