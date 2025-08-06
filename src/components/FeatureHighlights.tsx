import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Globe, BarChart3, Zap, Star, ArrowRight } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Revenue-Focused Marketing",
      description: "We don't just drive traffic – we drive revenue. Every campaign is optimized for your bottom line with clear ROI tracking.",
      stats: "Average 284% ROI",
      gradient: "from-blue-500 to-purple-600",
      benefits: ["Revenue attribution modeling", "Performance-based optimization", "Monthly ROI reporting"]
    },
    {
      icon: Users,
      title: "Qualified Lead Generation",
      description: "Generate high-quality leads that actually convert into customers through targeted, multi-channel campaigns.",
      stats: "3.2x More Qualified Leads",
      gradient: "from-green-500 to-blue-500",
      benefits: ["Lead scoring & qualification", "Multi-channel campaigns", "CRM integration"]
    },
    {
      icon: Target,
      title: "Conversion Rate Optimization",
      description: "Maximize your marketing performance with continuous A/B testing and conversion optimization across all touchpoints.",
      stats: "150% Higher Conversions",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["A/B testing programs", "Landing page optimization", "Funnel analysis"]
    },
    {
      icon: Globe,
      title: "Search Domination",
      description: "Dominate search results with SEO strategies that deliver sustainable, long-term organic traffic growth.",
      stats: "92% First-Page Rankings",
      gradient: "from-orange-500 to-red-500",
      benefits: ["Technical SEO audits", "Content optimization", "Local search dominance"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get complete transparency with real-time dashboards, detailed reporting, and actionable insights.",
      stats: "24/7 Real-time Reporting",
      gradient: "from-cyan-500 to-blue-500",
      benefits: ["Custom dashboards", "Automated reporting", "Performance insights"]
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Scale your marketing efforts with intelligent automation that nurtures leads and conversions 24/7.",
      stats: "75% Efficiency Increase",
      gradient: "from-yellow-500 to-orange-500",
      benefits: ["Email automation", "Lead nurturing", "Behavioral targeting"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Full-Service Digital Marketing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Proven Strategies That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've generated over $3.2B in revenue for our clients using these core marketing services. 
            Each strategy is data-driven, results-focused, and tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft bg-white group h-full">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <div className="text-sm font-semibold text-primary mb-3">{feature.stats}</div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                <div className="mt-auto">
                  <div className="space-y-2 mb-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <Button variant="brand-outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-brand-gradient rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Marketing?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 500+ companies that trust us to drive their digital marketing success. 
            Get a free strategy session and custom growth plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#calculator">Get Free Audit</a>
            </Button>
            <Button variant="brand-outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;