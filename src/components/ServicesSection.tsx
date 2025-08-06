import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MousePointer, 
  ShoppingCart, 
  Smartphone, 
  TrendingUp, 
  Users,
  Palette,
  Code,
  Layers,
  Zap,
  BarChart3,
  Target
} from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"marketing" | "development">("marketing");

  const marketingServices = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your organic search rankings and drive qualified traffic"
    },
    {
      icon: MousePointer,
      title: "Paid Advertising",
      description: "Strategic PPC campaigns across Google, Facebook, and LinkedIn"
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Marketing",
      description: "Specialized strategies for online stores and marketplaces"
    },
    {
      icon: Smartphone,
      title: "Social Media",
      description: "Engage your audience across all major social platforms"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      description: "Convert visitors into qualified leads with proven funnels"
    },
    {
      icon: Users,
      title: "B2B Marketing",
      description: "Targeted campaigns for business-to-business growth"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing ROI"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Improve your website's conversion rates and user experience"
    }
  ];

  const developmentServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that converts"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: Layers,
      title: "CMS Development",
      description: "Content management systems tailored to your needs"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast-loading, optimized websites and applications"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Custom online stores with advanced functionality"
    }
  ];

  const currentServices = activeTab === "marketing" ? marketingServices : developmentServices;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive solutions to grow your business online
          </p>
          
          {/* Service Toggle */}
          <div className="inline-flex rounded-lg bg-muted p-1 mb-12">
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === "marketing"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => setActiveTab("development")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === "development"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Design & Development
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300 cursor-pointer border-l-4 border-l-primary/20 hover:border-l-primary">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-brand-gradient-light rounded-lg flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Categories Footer */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary">Strategy Development</Badge>
            <Badge variant="secondary">Campaign Management</Badge>
            <Badge variant="secondary">Performance Tracking</Badge>
            <Badge variant="secondary">Growth Optimization</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;